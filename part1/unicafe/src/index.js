import { useState } from "react";
import ReactDOM from "react-dom/client";

const Button = (props) => {
 //console.log(props);
 return <button onClick={props.handleClick}>{props.text}</button>;
};

const NoResults = () => {
 return <span>Sin resultados</span>;
};

const App = () => {
 const [votes, setVotes] = useState({
  good: 0,
  neutral: 0,
  bad: 0,
  all: 0,
  value: 0,
 });

 const handleGood = () => {
  setVotes({
   ...votes,
   good: votes.good + 1,
   all: votes.all + 1,
   value: votes.value + 1,
  });
  console.log(votes);
 };

 const handleNeutral = () => {
  setVotes({
   ...votes,
   neutral: votes.neutral + 1,
   all: votes.all + 1,
  });
 };

 const handleBad = () => {
  setVotes({
   ...votes,
   bad: votes.bad + 1,
   all: votes.all + 1,
   value: votes.value - 1,
  });
 };

 let promedio = votes.value / votes.all;
 let votosPositivos = (votes.good * 100) / votes.all;

 return (
  <div>
   <h2>give feedback</h2>
   <Button handleClick={handleGood} text="good" />
   <Button handleClick={handleNeutral} text="neutral" />
   <Button handleClick={handleBad} text="bad" />
   <h2>statics</h2>
   <p>good: {votes.good}</p>
   <p>neutral: {votes.neutral}</p>
   <p>bad: {votes.bad}</p>
   <p>all: {votes.all}</p>
   <p>average: {!promedio ? <NoResults /> : promedio}</p>
   <p>positive: {!votosPositivos ? <NoResults /> : votosPositivos}</p>
  </div>
 );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

