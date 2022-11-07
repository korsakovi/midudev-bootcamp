console.log("Hola mundo");

const persona = {
 name: "Jacobo",
 twitter: "@jacobito",
 age: 45,
 isDeveloper: true,
};

const field = "twitter";

console.log(persona);
console.log(field);
console.log(persona[field]);

const sumar = (operando1, operando2) => {
 console.log(operando1);
 console.log(operando2);
 let resultado = operando1 + operando2;
 return console.log(resultado);
};

sumar(3, 5);
