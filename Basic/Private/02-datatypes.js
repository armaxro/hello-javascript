//strig
let name = "Maxi";
let username = 'max';
let email = `max@maxi.com`;
//number basic
let age = 30;
let height = 1.75;
//boolean
let isStudent = true;   // primero tru y luego false si se usan en el mismo programa
let isTeacher = false;
//undefined
let address; // no se le asigna un valor, por lo que es undefined
//null
let phoneNumber = null; // se le asigna null para indicar que no tiene un valor válido  
//object
let person = {
    name: "Maxi",
    age: 30,
    isStudent: true
};
//symbol
let uniqueId = Symbol("id"); // se crea un símbolo único con la descripción "id"    
//bigint
let bigNumber = 1234567890123456789012345678901234567890n; // se crea un número grande utilizando la notación "n" al final
//imprimir los valores de las variables
let myBigInt = BigInt("1234567890123456789012345678901234567890"); // se crea un número grande utilizando la función BigInt
console.log("Name:", name);
console.log("Username:", username);
console.log("Email:", email);   
console.log("Age:", age);
console.log("Height:", height);
console.log("Is Student:", isStudent);  
console.log("Is Teacher:", isTeacher);
console.log("Address:", address);
console.log("Phone Number:", phoneNumber);
console.log("Person:", person);
console.log("Unique ID:", uniqueId);
console.log("Big Number:", bigNumber);
console.log("My BigInt:", myBigInt);

