import { useState } from "react";
import ReactDOM from "react-dom/client";

const ButtonAnecdota = ({ handleFrase }) => {
 return (
  <button onClick={handleFrase} style={{ margin: "1rem 1rem" }}>
   Mostrar anédota aleatoria
  </button>
 );
};

const ButtonVoto = ({ handleVoto }) => {
 return <button onClick={handleVoto}>Me gusta</button>;
};

const App = ({ anecdotes }) => {
 const votos = new Uint8Array(anecdotes.length);

 const [selected, setSelected] = useState(0);
 const [votes, setVotes] = useState(votos);

 const handleFrase = () => {
  const aleatorio = Math.floor(Math.random() * anecdotes.length);
  setSelected(aleatorio);
 };

 const handleVoto = () => {
  const copyVotos = [...votes];
  const resultArray = copyVotos.map((elem, indice) => {
   return indice === selected ? (elem += 1) : elem;
  });

  setVotes(resultArray);
  console.log(resultArray);
 };

 return (
  <>
   <ButtonAnecdota handleFrase={handleFrase} />
   <ButtonVoto handleVoto={handleVoto} />
   <p
    style={{ marginLeft: "2rem", border: "thin solid red", padding: ".5rem" }}
   >
    {anecdotes[selected]}
   </p>
   <p>Has {votes[selected]} votes </p>
  </>
 );
};

const anecdotes = [
 "If it hurts, do it more often",
 "Adding manpower to a late software project makes it later!",
 "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
 "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
 "Premature optimization is the root of all evil.",
 "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
];

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App anecdotes={anecdotes} />);

