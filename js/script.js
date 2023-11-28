//Acceder a los elementos de un Array

document.write("<h3>ELEMENTOS DE UN ARRAY</h3>")

const numbers = [1, 2, 3, 4, 5]

document.write("El Array es: "+numbers+"<br>")

document.write("El Array en su primera posicion es: "+numbers[0]+"<br>")

document.write("El Array en la posicion dos: "+numbers[2]+"<br>")

//usar variables para acceder a los elementos de un array.

let index = 4

document.write("la variable index corresponde a: "+numbers[index]+"<br>")

//Modificar los elementos de un Array

numbers[0] = 10
numbers[2] = 30

document.write("El Array modificado es: "+numbers+"<br>")

//Longitud de una array
document.write("<h3>LA LONGITUD DE UNA ARRAY</h3>")

const frutas = ["manzana", "pera", "plátano", "fresa"]

document.write("El array de frutas es: "+frutas+"<br>")
document.write("El array de frutas tiene una logintud de: "+frutas.length+"<br>")