let nombre = prompt ("ingresa tu nombre")
alert("bienvenido/a "+ nombre)

let pregunta = prompt("¿te gustaría saber cuantos años temdrias en 33 años?")
let edad;
let resultado;

while (pregunta == "si"){
    edad = parseInt(prompt("¿Cual es tu edad actual?"))
    resultado = 33 + edad
    alert("En 33 años tendras " + resultado + "años")
    pregunta = prompt ("¿Deseas calcular otra edad?")
}
