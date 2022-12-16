import React, { useState } from "react";

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
   <div>
    Filter shown with
    <input
     onChange={handleChangeFilter}
     placeholder="Busca contactos..."
    ></input>
   </div>
   <h2>Add a new</h2>
   <form>
    <div>
     name: <input id="name" onChange={handleChangeName} value={newName} />
    </div>
    <div>
     number: <input onChange={handleChangeNumber} value={number}></input>
    </div>
    <div>
     <button onClick={handleSubmit} type="submit">
      add
     </button>
    </div>
   </form>
   <h2>Numbers</h2>
   <ul>
    {persons
     .filter((person) => {
      return search.toLowerCase() === ""
       ? person
       : person.name.toLowerCase().includes(search);
     })
     .map((person) => (
      <li key={person.name}>
       {person.name} {person.number}
      </li>
     ))}
   </ul>
  </div>
 );
};

export default App;

