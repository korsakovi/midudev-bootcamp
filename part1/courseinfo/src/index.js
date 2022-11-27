import ReactDOM from "react-dom/client";

const App = () => {
 const course = "Half Stack application development";
 const part1 = {
  name: "Fundamentals of React",
  exercises: 10,
  id: 25,
 };
 const part2 = {
  name: "Using props to pass data",
  exercises: 7,
  id: 30,
 };
 const part3 = {
  name: "State of a component",
  exercises: 14,
  id: 40,
 };

 const data = [part1, part2, part3];
 let numeroEjercicios = data.length;

 return (
  <div>
   <Title curso={course} />
   <ul>
    {data.map((tipos) => (
     <Tipos key={tipos.id} nombre={tipos.name} ejercicios={tipos.exercises} />
    ))}
   </ul>

   <Total numero={numeroEjercicios} />
  </div>
 );
};

const Tipos = ({ id, nombre, ejercicios }) => {
 return (
  <li key={id}>
   {nombre} <span> ---- Ejercicio número: {ejercicios}</span>
  </li>
 );
};

const Title = ({ curso }) => {
 return <h1 style={{ background: "#D5DBDB" }}>{curso}</h1>;
};

const Total = ({ numero }) => (
 <p
  style={{
   display: "inline-block",
   margin: "0 2em",
   border: "1px solid red",
   padding: "0.5em",
  }}
 >
  Hay un total de: {numero} ejercicios
 </p>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

