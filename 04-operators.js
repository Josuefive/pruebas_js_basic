//operadores


//operador Aritmético


let a = 5; 
let b = 3;



console.log(a - b);
console.log(a * b);
console.log(a + b);
console.log(a / b);


console.log(a * b);
console.log(a ** b);

//Incremento
a++
console.log(a);

//Decremento
b--;
console.log(b);


// operadores de asignacion
let myVariable = 2;
console.log(myVariable);
myVariable += 2;
console.log(myVariable);


myVariable *= 3;
myVariable /= 3;
myVariable %= 3;
myVariable **=3;
//Operadores de comparación


console.log(a); 

console.log(a > b);
console.log(a < b);
console.log(a >= b);
console.log(a <= b);
console.log(a == a); //igualdad por valor
console.log(a == "6"); // igualdad por valor
console.log(a === a); // igual por identadidad (Por tipo y valor)
console.log(a === 6);
console.log(a === "6");
console.log(a != 6);
console.log(a !== 6);

console.log(0 == false);
console.log(1 == true);
console.log(2 == false);
console.log(0 == "");
console.log(0 == " ");
console.log(0 == "Hola");
console.log(0 == ``);
console.log(undefined == null);
console.log(undefined ===null);


// Truty values (Valores verdaderos)
//Todos los numeros positivos y negativos menos el 0
//todas las cadenas de text
//todos lo boolean
// falsy values (valores falsos)


/*
- 0
- 0n
- null
- undefined
- NaN (Not a Number)
- El boolean false
- Cadenas de texto vacías 
*/


for (let i  = 0; i < 5; i++)
{
    console.log("Te quiero josue");
}

console.log(5 > 10 && 15 > 20)
console.log(5 < 10 && 15 < 20)
console.log(5 < 10 && 15 > 20)
console.log(5 > 10 && 15 > 20 && 30 > 40)

// or (||)
console.log(5 > 10 || 15 > 20)
console.log(5 < 10 || 15 < 20)
console.log(5 < 10 || 15 > 20)
console.log(5 > 10 || 15 > 20 || 30 > 40)

console.log(5 > 10 && 15 > 20 || 30 < 40)

// not (!)
console.log(!true)
console.log(!false)
console.log(!(5 > 10 && 15 > 20))
console.log(!(5 > 10 || 15 > 20))

// Operadores ternarios

const isRaining = false
isRaining ? console.log("Está lloviendo") : console.log("No está lloviendo")