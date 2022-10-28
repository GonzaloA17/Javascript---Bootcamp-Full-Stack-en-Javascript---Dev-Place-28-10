class PersonalS extends Empleados{
    seccion;//(biblioteca, decanato, secretaría, ...).


    constructor (nombre, apellido, numeroID, estadoCivil, seccion){
        super(nombre, apellido, numeroID, estadoCivil, seccion);
        this.seccion = seccion ;
    }


}

//Traslado de sección de un empleado del personal de servicio.

this.seccion = newSection;