//EJERCICIO 1
//PROMEDIO DE EXAMENES
// let notas = [];
// let acum = 0;
// let promedio;
// function prom() {
//     for (let i = 1; i <= 4; i++) {
//         notas.push(prompt(`Ingrese nota ( ${i} )`));
//     }
//     console.log(notas);
//     for (let j = 0; j < notas.length; j++) {
//         acum = acum + Number.parseFloat(notas[j]);
//         promedio = acum / notas.length;
//     }
// }
// prom();
// alert(`El promedio del alumno es: ${promedio}`);
//EJERCICIO 2
//AREA DE UN RECTANGULO
// let base = prompt("Ingrese la base del rectangulo");
// let altura = prompt("Ingrese la altura del rectangulo");
// function area(b, a){
//     return b * a;
// }
// let rpta = area(base, altura);
// alert(`El área del rectangulo es: ${rpta}`);
//EJERCICIO 3
//AREA DE UN TRIANGULO
// let base = prompt("Ingrese la base del triangulo");
// let altura = prompt("Ingrese la altura del triangulo");
// function area(b, a){
//     return (b * a) / 2;
// }
// let rpta = area(base, altura);
// alert(`El área del triangulo es: ${rpta}`);
//EJERCICIO 4
//AREA DE UNA CIRCUNFERENCIA
// let radio = prompt("Ingrese la radio de la circunferencia");
// const pi = 3.14;
// function area(r){
//     return pi * Math.pow(r, 2);
// }
// let rpta = area(radio);
// alert(`El área de la circunferencia es: ${rpta} cm^2`);
//EJERCICIO 5
//SUELDO DE TRABAJADOR
// const horasDiarias = 8;
// const diasTrabajados = 7;
// let pagoXhora = prompt("Ingrese el monto a pagar por hora trabajada");
// function pago(pago_horas){
//     return (pago_horas * horasDiarias) * diasTrabajados;
// }
// let montoPago = pago(pagoXhora);
// alert(`El pago semanal es: ${montoPago}`);
//EJERCICIO 6
// let montoAcambiar = prompt("Ingrese el monto en soles a cambiar");
// const precio_Dolares = 3.73;
// function convertidor(monto){
//     let dolares = monto / precio_Dolares;
//     return  dolares.toFixed(2);
// }
// let total = convertidor(montoAcambiar);
// alert (`Monto en soles a cambiar:  ${montoAcambiar}, monto en dólares a entregar: ${total}`);
//EJERCICIO 7
// const array = [4, 8, 5, 3];
// function ultimo(arreglo){
//         return arreglo[arreglo.length - 1];
// }
// let rpta = ultimo(array);
// alert(`El elemento final del array es: ${rpta}`);
//EJERCICIO 8
// const myArray = [2, 7, 5, 11];
// let ingreso = prompt("Ingrese un número para añadir al arreglo");
// function agregar(myArreglo, ...num){
//     return myArreglo.push(num);
// }
// agregar(myArray, ingreso);
// alert (myArray);
//EJERCICIO 9
// const myArray = [2, 6, 1, 8];
// let promedio, acum = 0;
// function prom (myArreglo){
//     for(let i = 0; i < myArreglo.length; i++){
//         acum = acum + myArreglo[i];
//     }
//     promedio = acum / myArreglo.length;
// }
// prom(myArray);
// alert(`El promedio es: ${promedio}`)
//EJERCICIO 10
// const myArray = [1, 2, 5, 8, 9, 12, 2, 3];
// let acum = 0;
// function prom (myArreglo){
//     for(let i = 0; i < myArreglo.length; i++){
//         if(myArreglo[i] % 2 == 0){
//             acum = acum + myArreglo[i];
//         }
//     }
// }
// prom(myArray);
// alert(`La suma de todos los pares es: ${Number.parseInt(acum)}`)
//EJERCICIO 11
// const arreglo1 = [2, 5, 2, 3, 7, 2];
// const arreglo2 = [1, 5, 3, 3];
// let arreglo3;
// function booleanoArray(arr1, arr2){
//     arreglo3 = arr1.concat(arr2);
//     if(arreglo3.length >= 10){
//         return true;
//     }else return false;
// }
// let rpta = booleanoArray(arreglo1, arreglo2);
// alert(`Union de arreglos:[ ${arreglo3} ], respuesta en booleano: ${rpta}`);
//EJERCICIO 12
// const arreglo1 = [2, 5, 2];
// const arreglo2 = [1, 5, 3];
// function funcionArray(arr1, arr2) {
//     let arreglo3 = [...arr1,...arr2];
//      let arregloX2 = [];
//     for (let i = 0; i < arreglo3.length; i++) {
//          arregloX2[i] = arreglo3[i] * 2;
//     }
//     return arregloX2;
// }
// let rpta = funcionArray(arreglo1, arreglo2);
// console.log(rpta);
//EJERCICIO 13
// let personas = [
//     { nombre: 'boris', hobby: 'correr', salario: 2000 },
//     { nombre: 'luis', hobby: 'cantar', salario: 1500 },
//     { nombre: 'carmen', hobby: 'cocinar', salario: 800 },
//     { nombre: 'percy', hobby: 'cantar', salario: 1100 },
//     { nombre: 'rosa', hobby: 'leer', salario: 3000 }
// ];
// personas.forEach((element) => console.log(element));

// function monto_salario(data) {
//     //filter
//     let resultado = data.filter((element) => element.salario > 1200);
//     console.log(resultado);
// }
// console.log("Las personas que ganan más de 1200 son:");
// monto_salario(personas);

// function cantar(data) {
//     //find
//     let resultado = data.find((element) => element.hobby === 'cantar');
//     console.log(resultado);
// }
// console.log("La primera persona a la que le gusta cantar es:");
// cantar(personas);

// function leer(data){
//     //some
//     let resultado = data.some((element) => element.hobby === 'leer');
//     console.log(resultado);
// }

// console.log("¿Al menos a una persona le gusta leer?");
// leer(personas);
//EJERCICIO 14
// const horarios =[
//     {dia: 'lunes', nombre: 'maria'},
//     {dia: 'martes', nombre: 'luis'},
//     {dia: 'miercoles', nombre: 'antonia'},
//     {dia: 'jueves', nombre: 'pedro'},
//     {dia: 'viernes', nombre: 'marisa'}
// ];
// let dia_ingresado = prompt("Ingrese el dia a consultar");
// function servicio(data, dia){
//     let resultado = data.filter((element) => element.dia.toLocaleLowerCase() === dia.toLocaleLowerCase());
//     return resultado;
// }
// console.log("Dia ingresado: " + dia_ingresado);
// console.log(servicio(horarios, dia_ingresado));
//EJERCICIO 15
const productos = [
    { nombre: 'teclado', precio: 20 },
    { nombre: 'mouse', precio: 10 },
    { nombre: 'monitor', precio: 200 },
];
let nom_producto = prompt("Ingrese producto a consultar");
function encontrar(data, prod) {
    let obtener_prod = data.filter((element) => element.nombre === prod);
    return obtener_prod;
}
console.log(`El precio del producto ${nom_producto}`)
console.log(encontrar(productos, nom_producto));