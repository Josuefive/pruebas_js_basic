// 1. Escribe un comentario en un linea
    //Hola
//2. Escribe un comentario en varias lineas
     /*
        HOla que onda la verda es que ya no
        me acordaba jaja
     */
//3. Declara variables con valores asociados a todos los datos de tipo primitivos


let miAñoDeNacimiento = 2006;
let NombreDeMiHermana = "jessica";
let verdadero = true;
let falso = false;
let datoNoDefinido = undefined;
let granNúmero = 4324253425324543258998989584598698596845n;
let nulo = null;
let elSDimbolo = Symbol("Perro");

//4. imprime por consola el tipo de dato 

console.log(typeof miAñoDeNacimiento);
console.log(typeof NombreDeMiHermana);
console.log(typeof datoNoDefinido);
console.log(typeof granNúmero);
console.log(typeof nulo);
console.log(typeof elSDimbolo);
console.log(typeof verdadero);
console.log(typeof falso);

//5. A comtinuación, modifica los valores de las variables por otros del mismo tipo


miAñoDeNacimiento = 2008;
NombreDeMiHermana = "Jasuhara";
verdadero = false
falso = true;
elSDimbolo = Symbol("gato");
granNúmero = BigInt(5903248584329085943028549043285902834);


//6. A continuación, modifica los valores de las variables por o tro tipo de dato


miAñoDeNacimiento = "jsoue";
NombreDeMiHermana = "2207";
verdadero = `h`
falso = 'j'
elSDimbolo = Symbol("2131");
granNúmero = BigInt(7584395);

console.log(typeof miAñoDeNacimiento);
console.log(typeof NombreDeMiHermana);
console.log(typeof datoNoDefinido);
console.log(typeof granNúmero);
console.log(typeof nulo);
console.log(typeof elSDimbolo);
console.log(typeof verdadero);
console.log(typeof falso);


// 7. declara constantes con valores asociados a todos los tipos de datos

const name = "josue david";
const edad = 18;
const peso = 189.98;
const refalse = false;
const reverdadero = true; 
const bignumber = BigInt(7543895743829758934256534275894327895478932);
const simbolo = Symbol("yeaa");
const renodeclarado = undefined;

//8.  A continuacion, modifica los valores de las constantes 
// name = 'josue';
// edad = 56;
// peso =  234.54;
// refalso = true;
// reverdadero = falso;
// bignumber = 398758437285347289572349574329875n;
// simbolo = Symbol("jksjfklsdj");

//comenta las linas que produscan algun tipo de error al ejecutarse