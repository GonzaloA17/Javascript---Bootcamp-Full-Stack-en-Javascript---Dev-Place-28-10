class Profesor extends Empleados{
    departamento;//departamento pertenecen (base de datos, java, php, ...)

    constructor(nombre, apellido, numeroID, estadoCivil){
        super (nombre, apellido, numeroID, estadoCivil, departamento)
        this.departamento = this.departamento;
    }
}
//Cambio de departamento de un profesor.
this.departamento = nuevoDpto