import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";
import { useState } from "react";

const WaringNotUsed = () => <h3>No se ha usado el contador</h3>;

const ListOfClicks = ({ clicks }) => <p>{clicks.join(", ")}</p>;

const App = () => {
 const [counter, setCounter] = useState({
  left: 0,
  right: 0,
  mensaje: "Practicando con React",
 });

 const [clicks, setClicks] = useState([]);

 const handleLeft = () => {
  const nuevoEstado = {
   ...counter,
   left: counter.left + 1,
  };

  setCounter(nuevoEstado);
  setClicks((prevValue) => [...prevValue, "L"]);
 };

 const handleRight = () => {
  setCounter({
   ...counter,
   right: counter.right + 1,
  });
  setClicks((prevValue) => prevValue.concat("R"));
 };

 return (
  <div className="container">
   {counter.left}
   <button onClick={handleLeft}>Left</button>
   <button onClick={handleRight}>Right</button>
   {counter.right}
   <p>Has pulsado {clicks.length} veces</p>
   <p>{counter.mensaje}</p>
   {clicks.length === 0 ? <WaringNotUsed /> : <ListOfClicks clicks={clicks} />}
  </div>
 );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

