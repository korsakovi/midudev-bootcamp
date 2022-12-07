import { useState } from "react";

import { Note } from "./Note";

function App(props) {
 const [notes, setNotes] = useState(props.notes);
 const [newNote, setNewNote] = useState("");
 const [showAll, setShowAll] = useState(true);

 const handleChange = (e) => {
  setNewNote(e.target.value);
 };

 const handleSubmit = (e) => {
  e.preventDefault();
  console.log(newNote);
  const nuevaNota = {
   id: notes.length + 1,
   content: newNote,
   date: new Date().toISOString(),
   important: Math.random() < 0.5,
  };

  setNotes([...notes, nuevaNota]);
  setNewNote("");
 };

 const notesToShow = showAll ? notes : notes.filter((el) => el.important);

 const handleClickShow = () => setShowAll(!showAll);

 return (
  <div>
   <h1>Notes</h1>
   <button onClick={handleClickShow}>
    Show {showAll ? "important" : "all"}
   </button>
   <div>
    {notesToShow.map((el) => (
     <Note
      key={el.id}
      content={el.content}
      date={el.date}
      categories={el.categories}
      important={el.important}
     />
    ))}
   </div>
   <form onSubmit={handleSubmit}>
    <input onChange={handleChange} value={newNote} type="text"></input>
    <button type="submit">Añadir nota</button>
   </form>
  </div>
 );
}

export default App;
