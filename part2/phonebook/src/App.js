import React, { useState, useEffect } from "react";
import { SearchFilter } from "./components/SearchFilter";
import { FormPersons } from "./components/FormPersons";
import { Persons } from "./components/Persons";

import personService from "./services/peticiones";

const App = () => {
 const [persons, setPersons] = useState([]);

 const [newName, setNewName] = useState("");
 const [number, setNumber] = useState("");
 const [search, setSearch] = useState("");

 useEffect(() => {
  personService.getAll().then((initialPersons) => setPersons(initialPersons));
 }, []);

 const handleChangeName = (e) => {
  setNewName(e.target.value);
 };

 const handleChangeNumber = (e) => {
  setNumber(e.target.value);
 };

 const handleChangeFilter = (e) => {
  setSearch(e.target.value);
 };

 const handleSubmit = (e) => {
  e.preventDefault();
  const nuevaPersona = { name: newName, number: number };

  personService.create(nuevaPersona).then((returnedPersons) => {
   const totalPersons = persons.concat(returnedPersons);
   setPersons(totalPersons);

   setNewName("");
   setNumber("");

   document.getElementById("name").focus();
  });
 };

 /* const findPerson = (id) => {
  const person = persons.find((p) => p.id === id);
  const changedPerson = { ...person };

  personService
   .update(id, changedPerson)
   .then((returnedPerson) => {
    setPersons(
     persons.map((person) => (person.id !== id ? person : returnedPerson))
    );
   })
   .catch((err) => {
    console.log(err);
   });
 }; */

 if (persons.filter((person) => person.name === newName).length > 0) {
  alert(`El nombre ${newName} ya está incluido`);
  setNewName("");
 }

 return (
  <div>
   <h2>Phonebook</h2>
   <SearchFilter handleFilter={handleChangeFilter} />
   <h2>Add a new</h2>
   <FormPersons
    handleName={handleChangeName}
    handleNumber={handleChangeNumber}
    handleSubmit={handleSubmit}
    newName={newName}
    number={number}
   />
   <h2>Numbers</h2>
   <Persons persons={persons} setPersons={setPersons} search={search} />
  </div>
 );
};

export default App;

