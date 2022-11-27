import { useState } from "react";
import ReactDOM from "react-dom/client";

const App = () => {
 // save clicks of each button to its own state
 const [good, setGood] = useState(0);
 const [neutral, setNeutral] = useState(0);
 const [bad, setBad] = useState(0);

 const handleClickVotes = (typeVote) => {
  if (typeVote === "good") {
   return setGood(good + 1);
  }
  if (typeVote === "neutral") {
   return setNeutral(neutral + 1);
  }
  if (typeVote === "bad") {
   return setBad(bad + 1);
  }
 };

 return (
  <div>
   <h2>give feedback</h2>
   <button onClick={() => handleClickVotes("good")}>good</button>
   <button onClick={() => handleClickVotes("neutral")}>neutral</button>
   <button onClick={() => handleClickVotes("bad")}>bad</button>
   <h2>statics</h2>
   <p>good {good}</p>
   <p>neutral {neutral}</p>
   <p>bad {bad}</p>
  </div>
 );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

