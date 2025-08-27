// 1. Crea un array que almacene cinco animales
let Myarray = [];

 Myarray = ["gato", "Perro", "Conejo", "Oveja", "Elefante"];


 console.log(Myarray);

// 2. Añade dos más. Uno al principio y otro al final
    Myarray.push("Delfín");

     console.log(Myarray);

     Myarray.unshift("Rata");

      console.log(Myarray);
// 3. Elimina el que se encuentra en tercera posición
    Myarray.splice(5, 1);


    console.log(Myarray);
// 4. Crea un set que almacene cinco libros
    let libreria = new Set(["The beginning after the end", "Pinocho", "Harry Potter", "Fuego y hielo", "Mushoku tensei"]);

    console.log(libreria);
// 5. Añade dos más. Uno de ellos repetido
    libreria.add("don cojote de la mancha");
    libreria.add("Cien años de soledad");
    libreria.add("Mushoku tensei")
    console.log(libreria);
// 6. Elimina uno concreto a tu elección
    libreria.delete("Harry Potter");
    console.log(libreria);
// 7. Crea un mapa que asocie el número del mes a su nombre
    let formulario = new Map([
        [8, "Josue David cinco Rosales"]

    ]);

    console.log(formulario.keys())
console.log(formulario.values())
console.log(formulario.entries())



// 8. Comprueba si el mes número 5 existe en el map e imprime su valor
    console.log(formulario.has(5));
// 9. Añade al mapa una clave con un array que almacene los meses de verano
    formulario.set(11, "verano");
    formulario.set(12, "verano");
    formulario.set(1, "verano");
    formulario.set(2, "verano");

    console.log(formulario);
// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map

    console.log(libreria)
    let myarray = Array.from(libreria);
    console.log(myarray)

    let librerias = new Map ([
        [1, myarray]
    ])

    console.log(librerias)