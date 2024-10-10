export default class Cl_estudiante {
    constructor(nombre, notas, materias) {
        this.nombre = nombre;
        this.notas = notas;
        this.materias = materias;
    }
    set nombre(nombre) {
        this._nombre = nombre;
    }
    get nombre() {
        return this._nombre;
    }
    set notas(notas) {
        this._notas = notas;
    }
    get notas() {
        return this._notas;
    }
    set materias(materias) {
        this._materias = materias;
    }
    get materias() {
        return this._materias;
    }
    promedio() {
        return (this.notas / this.materias).toFixed(2);
    }
}