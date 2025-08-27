

// 1. Concatena dos cadenas de texto
    let nombre = "Josue David"
    let apellido = "Cinco Rosales"


    console.log("Tu nombre completo es: ", nombre + "", apellido);
// 2. Muestra la longitud de una cadena de texto
console.log(nombre.length);
// 3. Muestra el primer y último carácter de un string
console.log(apellido[12])
// 4. Convierte a mayúsculas y minúsculas un string
console.log(nombre.toUpperCase());
// 5. Crea una cadena de texto en varias líneas
console.log(nombre.toLowerCase());
// 6. Interpola el valor de una variable en un string
let edad = 19
let direccion= "del parque de villa venezuela 6 andenes al sur"

console.log(`Hola, ${nombre} ${apellido}, tu edad es ${edad} años y vives ${direccion}`);
// 7. Reemplaza todos los espacios en blanco de un string por guiones
    
let hola = "Hola mundo"
console.log(hola.replace(" ", "-" ))
// 8. Comprueba si una cadena de texto contiene una palabra concreta
    console.log(hola.indexOf("Hola"));
// 9. Comprueba si dos strings son iguales
let hola2 = "Hola mundo";
if(hola === hola2)
{
    console.log("son iguales"); 
}
// 10. Comprueba si dos strings tienen la misma longitud
if (hola.length == hola2.length)
{
    console.log("Tienen la misma longitud");
}