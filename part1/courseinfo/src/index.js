import React from "react";
import ReactDOM from "react-dom/client";

const App = () => {
 const course = "Half Stack application development";
 const totalExercises = 3;
 return (
  <div>
   <Header course={course} />
   <Content />
   <Total number={totalExercises} />
  </div>
 );
};

const Header = (props) => {
 return <h2>{props.course}</h2>;
};

const Part = (props) => {
 return (
  <div>
   <span>
    {props.part1} {props.number1}
   </span>
   <span>
    {props.part2} {props.number2}
   </span>
   <span>
    {props.part3} {props.number3}
   </span>
  </div>
 );
};

const Content = () => {
 const part1 = "Fundamentals of React";
 const part2 = "Using props to pass data";
 const part3 = "State of a component";
 const exercises1 = 10;
 const exercises2 = 7;
 const exercises3 = 14;
 return (
  <div>
   <Part part1={part1} number1={exercises1} />
   <Part part2={part2} number2={exercises2} />
   <Part part3={part3} number3={exercises3} />
  </div>
 );
};

const Total = (props) => {
 return (
  <p style={{ color: "red" }}>
   El número total de ejercicios son: {props.number}
  </p>
 );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

