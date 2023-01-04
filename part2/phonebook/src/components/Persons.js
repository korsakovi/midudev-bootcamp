import personService from "../services/peticiones";

export const Persons = ({ persons, search, setPersons }) => {
 const handleDelete = (id, name) => {
  if (window.confirm(`Delete ${name}`)) {
   personService.deletePerson(id).then((response) => {
    const updatedPersons = persons.filter((person) => person.id !== id);
    setPersons(updatedPersons);
   });
  }
 };

 return (
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
      <button onClick={() => handleDelete(person.id, person.name)}>
       Delete
      </button>
     </li>
    ))}
  </ul>
 );
};
