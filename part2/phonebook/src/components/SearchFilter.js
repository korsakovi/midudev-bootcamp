export const SearchFilter = ({ handleFilter }) => {
 return (
  <div>
   Filter shown with
   <input onChange={handleFilter} placeholder="Busca contactos..."></input>
  </div>
 );
};
