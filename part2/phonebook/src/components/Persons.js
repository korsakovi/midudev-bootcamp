import { Person } from "./Person";

export const Persons = ({ persons, search }) => {
 return (
  <ul>
   {persons
    .filter((person) => {
     return search.toLowerCase() === ""
      ? person
      : person.name.toLowerCase().includes(search);
    })
    .map((person) => (
     <Person key={person.name} name={person.name} number={person.number} />
    ))}
  </ul>
 );
};
