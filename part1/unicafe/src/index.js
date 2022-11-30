import { useState } from "react";
import ReactDOM from "react-dom/client";

const Button = ({ handleClick, text }) => {
 //console.log(props);
 return <button onClick={handleClick}>{text}</button>;
};

const Statistics = ({ votes }) => {
 let promedio = votes.value / votes.all;
 let votosPositivos = (votes.good * 100) / votes.all;

 return (
  <>
   <table>
    <tbody>
     <tr>
      <td>good:</td>
      <td>{votes.good}</td>
     </tr>
     <tr>
      <td>neutral:</td>
      <td>{votes.neutral}</td>
     </tr>
     <tr>
      <td>bad:</td>
      <td>{votes.bad}</td>
     </tr>
     <tr>
      <td>all:</td>
      <td>{votes.all}</td>
     </tr>
     <tr>
      <td>average:</td>
      <td>{!promedio ? 0 : promedio}</td>
     </tr>
     <tr>
      <td>positive:</td>
      <td>{!votosPositivos ? 0 : votosPositivos}</td>
     </tr>
    </tbody>
   </table>
  </>
 );
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

 return (
  <div>
   <h2>give feedback</h2>
   <Button handleClick={handleGood} text="good" />
   <Button handleClick={handleNeutral} text="neutral" />
   <Button handleClick={handleBad} text="bad" />
   <h2>statistics</h2>
   {!votes.all ? "No feedback given" : <Statistics votes={votes} />}
  </div>
 );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

