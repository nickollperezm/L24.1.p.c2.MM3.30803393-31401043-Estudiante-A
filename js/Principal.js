/*
El promedio de notas resulta de dividir el acumulado de notas entre la cantidad de materias.
Se tiene de todo estudiante su nombre, acumulado notas y cantidad materias.
Un estudiante becado recibe una beca mensual de $30 si su promedio de notas es superior a
15, ó recibe $20 si es al menos 10; si el promedio es menor de 10, no recibe beca.
Diseñe las clases Cl_estudiante y Cl_becado, usando herencia, de manera que procese un
estudiante y reporte el monto de la beca, o si no le corresponde beca.
*/

import Cl_beca from "./Cl_beca.js";
import Cl_becado from "./Cl_becado.js";

let beca = new Cl_beca();
let becado = new Cl_becado("Mary", 132, 8);
let becado2 = new Cl_becado("Alirio", 315, 35);
beca.procesarEstudiante(becado);
beca.procesarEstudiante(becado2);

let salida = document.getElementById("salida");
salida.innerHTML = `
    Nombre del estudiante: ${becado.nombre}
    <br>Acumulado de notas: ${becado.notas}
    <br>Cantidad de materias: ${becado.materias}
    <br>Nota promedio: ${becado.promedio()}
    <br>${becado.beca()}
    <br>
    <br>Nombre del estudiante: ${becado2.nombre}
    <br>Acumulado de notas: ${becado2.notas}
    <br>Cantidad de materias: ${becado2.materias}
    <br>Nota promedio: ${becado2.promedio()}
    <br>${becado2.beca()}
`;