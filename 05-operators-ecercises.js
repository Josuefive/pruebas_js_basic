// 1. Crea una variable para cada operación aritmética
    let suma = 3 + 2;
    let resta =  3 - 3;
    let multiplicacion = 3 * 3;
    let divicion = 9 / 9;
    let residuo = 10 % 5;
    let alcuadrado = 5**2;
console.log(alcuadrado);

// 2. Crea una variable para cada tipo de operación de asignación,
//    que haga uso de las variables utilizadas para las operaciones aritméticas
let suma2 = 3;
suma2 +=suma;

let resta2 =1 ;
resta2 -=resta;

let multiplicacion2=5;
multiplicacion2 * multiplicacion;

let divicion2 = 5
divicion2 /= divicion
console.log(suma);

let residuo2 = 4;
residuo2 %= residuo;

let alcuadrado2 = 1;
alcuadrado2 **=alcuadrado
// console.log(alcuadrado);

// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación
console.log(suma > resta );
console.log(resta2 == 1);
console.log(divicion2 === 5);
console.log(divicion == 1);
console.log(divicion2  <= suma);

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación
console.log(suma < divicion2);;
console.log(divicion2 === "5");
console.log(divicion === "");
console.log(suma  + 5 > 10 );
console.log(divicion**3 > 20);
// 5. Utiliza el operador lógico and
if (suma >= divicion2 &&  suma > resta);
{
   console.log("suma es menor que division y es de tipo numero"); 
}
// 6. Utiliza el operador lógico or
if (resta < 2 || resta >= 0)
{
    console.log(true);
}

// 7. Combina ambos operadores lógicos
    if (typeof(resta ===Number)|| division > 0 && typeof(divicion===Number) ){

        console.log(true)
    }
// 8. Añade alguna negación
    console.log(suma != suma);
// 9. Utiliza el operador ternario
    const estasAcostado = false
    estasAcostado ? console.log("ZZZZ"): console.log("Ayudame a levantar unas cosas")
// 10. Combina operadores aritméticos, de comparáción y lógicas
    const impuesto = 0.15;
    let subtotal = 78.53;
    let total=0;
    let contraseña= 78567348;
    if ( typeof(contraseña) === "number" && typeof(subtotal)=== "number" )
    {      total +=subtotal;
        console.log("subtotal", subtotal);
            let iva = subtotal * impuesto;
            console.log(" iva :", iva);
            total+=iva
            console.log("Su total con impuestos es: ", total);  
   }

        