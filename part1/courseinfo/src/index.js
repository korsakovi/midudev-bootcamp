import React from "react";
import ReactDOM from "react-dom/client";

const App = () => {
 const course = "Half Stack application development";
 const part1 = "Fundamentals of React";
 const exercises1 = 10;
 const part2 = "Using props to pass data";
 const exercises2 = 7;
 const part3 = "State of a component";
 const exercises3 = 14;
 const exercises = [exercises1, exercises2, exercises3];
 const totalExercises = exercises.length;
 console.log(totalExercises);

 return (
  <div>
   <Header course={course} />
   <Content
    part1={part1}
    part2={part2}
    part3={part3}
    exercises1={exercises1}
    exercises2={exercises2}
    exercises3={exercises3}
   />
   <Total number={totalExercises} />
  </div>
 );
};

const Header = (props) => {
 return <h2>{props.course}</h2>;
};

const Content = (props) => {
 return (
  <>
   <p>El curso tiene las siguientes partes:</p>
   <li>
    {props.part1}
    <span>
     -- Ejercicio número:<b>{props.exercises1}</b>
    </span>
   </li>
   <li>
    {props.part2}
    <span>
     -- Ejercicio número:<b>{props.exercises2}</b>
    </span>
   </li>
   <li>
    {props.part3}
    <span>
     -- Ejercicio número:<b>{props.exercises3}</b>
    </span>
   </li>
  </>
 );
};

const Total = (props) => {
 return (
  <p style={{ color: "red" }}>
   El número total de ejercicios son: {props.number}{" "}
  </p>
 );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

