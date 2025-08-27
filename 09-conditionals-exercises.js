// if/else/else if/ternaria

añoEscolar= 5;


if (añoEscolar <= 5)
{
    console.log("Estas en primaria");
}else if (añoEscolar <= 10)
{
console.log("Estas en secundaria");
}else
{
    console.log("Usted ya esta en un grado superior");
}

// 1. Imprime por consola tu nombre si una variable toma su valor
    let name = "josue";

    if(name == "josue")
    {
        console.log(`hola, ${name}`);
    }


// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos
    let password = 78567348;

    if (password == 78567348)
    {
        console.log("Bienvenido al sistema");
    }
// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje
let n = 8
if (n == 0)
{
    console.log("tu numero es cero");
}
else if(n >= 1)
{
    console.log("Tu numero es positivo");
}
else if (n < 0 )
{
    console.log("Tu Número es negativo");
}
else {
    console.log("No es numero")
}
// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan
    let age = 17;

    if (age >=  18)
    {
        console.log("Puedes votar")
    }
    else
    {
        console.log("Aun no puedes votar, por que no eres mayor de edad(18)");
    }
// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad 
 age >=18 ? console.log("Eres un adulto"): console.log("Eres un niño");
// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"
    mes = 2;

    if (mes ==12 || mes == 1 || mes == 2)
    {
        console.log("Primavera");
    }
    else if(mes == 6 || mes == 7 || mes == 8)
    {
        console.log("Verano");
    }
    else if(mes == 9 || mes == 10 || mes ==11)
    {
        console.log("Invierno");
    }
    else 
    {
        console.log("Fuera de rango")
    }
// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior
     if (mes == 1 || mes == 3 || mes == 5 || mes == 7 || mes == 8 || mes == 10|| mes ==12)
     {
        console.log("Tu mes tiene 31 dias");
     }
     else if (mes == 2)
     {
        console.log("Tu mes tiene 28 dias");
     }
     else {
        console.log("Tu mes tiene 30 dias");
     }
// switch


// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma

    let saludo = 2;

    switch (saludo)
    {
        case 1:
            console.log("Hola como estas?");
            break
        case 2: 
            console.log("hello, how are you");
            break
        default:

    }

// 9. Usa un switch para hacer de nuevo el ejercicio 6

// 10. Usa un switch para hacer de nuevo el ejercicio 7
switch (mes)
{
    case 1:
        console.log("tu mes tiene 31 dias");
        break
    case 2:
        console.log("tu mes tiene 28 dias");
        break
    case 3:
        console.log("tu mes tiene 31 dias")
        break
    case 4:
        console.log("tu mes tiene 30 dias");
    case 5:
        console.log("tu mes tiene 31 dias");
    case 6:
        console.log("tu mes tiene 28 dias");
        break
    case 7:
        console.log("tu mes tiene 31 dias");
        break
    case 8:
        console.log("tu mes tiene 31 dias");
        break
    case 9: 
        console.log("tu mes tiene 30 dias");
        break
    case 10:
        console.log("tu mes tiene 31 dias");
        break
    case 11:
        console.log("tu mes tiene 30 dias");
        break
    case 12:
          console.log("tu mes tiene 31 dias");
          break
    default:
      console.log("fuera de rango");
        
}