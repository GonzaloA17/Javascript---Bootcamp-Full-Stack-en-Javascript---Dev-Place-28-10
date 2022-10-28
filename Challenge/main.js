class Persona {
    nombre;
    apellido;
    numeroID;
    estadoCivil;

    constructor (nombre, apellido, numeroID, estadoCivil){
        this.nombre = nombre;
        this.apellido = apellido;
        this.numeroID = numeroID;
        this.estadoCivil = estadoCivil;
    }
     
    // Getter setter nombre
    getNombre() {
        return nombre;
    }
    setNombre() {
        this.nombre = newNombre;
    }

    // Getter setter nombre

    getApellido() {
        return apellido;
    }
    setApelldio() {
        this.apellido = newApellido;
    }

    // Getter setter nombre
    getnumeroID() {
        return numeroID;
    }
    setnumeroID() {
        this.numeroID = newnumeroID;
    }

    // Getter setter nombre
    getestadoCivil() {
        return estadoCivil;
    }
    setestadoCivil() {
        this.estadoCivil = newestadoCivil;
    }

    //cambio civil
    set cambioEstadocivil(estado){
        this.estadoCivil = estado;
    }
    
}


let profesores = [];
let estu = [];
let personales = [];


let profesor = new profesores ("Douglas" , "DOurmunt", 1, "Casado", 2001, 5, "JavaScript");
profesores.push(profesor);
let Estudiantes = new estu("Gonzalo", "Orgoñez", 17, "soltero", 4);
estu.push(Estudiantes);
let PersonalS = new personales ("Norita", "Gonzalez", 45, "Viuda", "Biblioteca");
personales.push(PersonalS);



//• Imprimir toda la información de cada tipo de individuo.

alert(profesores)
alert(estu)
alert(personales)
