export const FormPersons = ({
 handleName,
 handleNumber,
 handleSubmit,
 newName,
 number,
}) => {
 return (
  <form>
   <div>
    name: <input id="name" onChange={handleName} value={newName} />
   </div>
   <div>
    number: <input onChange={handleNumber} value={number}></input>
   </div>
   <div>
    <button onClick={handleSubmit} type="submit">
     add
    </button>
   </div>
  </form>
 );
};
