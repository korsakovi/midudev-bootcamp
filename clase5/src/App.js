import { useState, useEffect } from "react";

import { Note } from "./Note";
import { getAllNotes } from "./services/notes/getAllNotes";
import { postNewNote } from "./services/notes/postNewNote";

function App() {
 const [notes, setNotes] = useState([]);
 const [newNote, setNewNote] = useState("");
 const [loading, setLoading] = useState(false);

 useEffect(() => {
  setLoading(true);
  getAllNotes().then((notes) => {
   setNotes(notes);
   setLoading(false);
  });
 }, []);

 const handleChange = (e) => {
  setNewNote(e.target.value);
 };

 const handleSubmit = (e) => {
  e.preventDefault();

  const noteToAdd = {
   title: newNote,
   body: newNote,
   userId: 1,
  };

  postNewNote(noteToAdd).then((newNote) => {
   setNotes((prevNotes) => {
    console.log(prevNotes);
    console.log(newNote);
    return prevNotes.concat(newNote);
   }).catch((error) => console.log(error));
  });
  setNewNote("");
 };

 return (
  <div>
   <h1>Notes</h1>
   {loading ? "Cargando..." : ""}
   <ol>
    {notes.map((el) => (
     <Note key={el.id} {...el} />
    ))}
   </ol>
   <div>
    <form onSubmit={handleSubmit}>
     <input onChange={handleChange} type="text" value={newNote}></input>
     <button>Añadir nota</button>
    </form>
   </div>
  </div>
 );
}

export default App;

