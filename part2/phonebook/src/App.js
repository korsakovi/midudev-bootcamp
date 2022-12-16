import React, { useState } from "react";
import { SearchFilter } from "./components/SearchFilter";
import { FormPersons } from "./components/FormPersons";
import { Persons } from "./components/Persons";

const App = () => {
 const [persons, setPersons] = useState([
  { name: "Arto Hellas", number: "040-123456" },
  { name: "Ada Lovelace", number: "39-44-5323523" },
  { name: "Dan Abramov", number: "12-43-234345" },
  { name: "Mary Poppendieck", number: "39-23-6423122" },
 ]);

 const [newName, setNewName] = useState("");
 const [number, setNumber] = useState("");
 const [search, setSearch] = useState("");

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
  const concatenado = persons.concat(nuevaPersona);
  setPersons(concatenado);

  setNewName("");
  setNumber("");

  document.getElementById("name").focus();
 };

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
   <Persons persons={persons} search={search} />
  </div>
 );
};

export default App;

