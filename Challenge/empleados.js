class Empleados extends Persona {

    Incordoparacion; //año de incorporación a la facultad
    despacho; // qué número de despacho tienen asignado

    constructor (Incordoparacion, despacho, nombre, apellido, numeroID, estadoCivil){
        super(nombre, apellido, numeroID, estadoCivil, Incordoparacion, despacho);
        this.Incordoparacion = Incordoparacion;
        this.despacho = despacho;
    }

    

}
// Reasignación de despacho a un empleado.
    
this.despacho = des;
    