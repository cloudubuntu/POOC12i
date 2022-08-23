// console.log('hola mundo');

// //notacion literal de un objeto

// let persona={
//     nombre: '',
//     edad: '',
//     sexo: '',
//     altura: '',
//     peso: '',
//     estadoCivil: '',
//     nacionalidad:''
// }
// console.log(persona);
// persona.nombre='Sergio';
// persona.edad='33';
// console.log("objeto persona");
// console.log(persona);

// let persona2={
//     nombre: 'Sebastian',
//     edad:23,
//     sexo:'femenino',
//     altura:'1,70',
//     peso:'85',
//     estadoCivil:'soltero',
//     nacionalidad:'yankee'
// }

// console.log('obejto persona2');
// console.log(persona2);

// let persona3={
//     nombre:"Nicolas",
//     edad:40,
//     sexo:'indefinido',
//     altura:'1.60',
//     peso:'55',
//     estadoCivil:'goberano',
//     nacionalidad:'indefinido'
// }

// console.log('objeto persona3');
// console.log(persona3);

// console.log('la edad del obj persona 3 es:'+persona3.edad);
// console.log('el nombre del obj persona 3 es:'+persona3.nombre);

// let persona4={
//     nombre:'Alan',
//     edad:34,
//     sexo:'masculino',
//     altura:'1,70',
//     peso:'ni idea',
//     estadoCivil:'soltero',
//     nacionalidad:'argentino',

//     saludar(){
//         console.log('Hola soy '+ this.nombre);
//     },

//     comer(){
//         console.log('Estoy comiendo algo');
//     },
//     saludar2(){
//         return 'Hola soy '+this.nombre
//     }
// }

// console.log(persona4);
// persona4.saludar()
// console.log(persona4.saludar2());

//funcion constructora

function Auto(brand, color, type, year){
    this.brand= brand;
    this.color=color;
    this.type=type;
    this.year=year;
    this.encender=function(){
        console.log('El auto esta encendido');
    };
    this.apagar=function(){
        console.log('El auto esta apagado');
    };
}


let newCar= new Auto('toyota', 'black', 'sedan', '2022');

console.log(newCar);

let newCar2= new Auto('toyota', 'black', 'sedan', '2022');

console.log(newCar.brand==newCar2.brand);

let newCar3={
    brand: 'fiat',
    color:'red',
    type:'coupe',
    year:'2022'
}
newCar.encender()
newCar.apagar()
 newCar3.encender=function(){
     console.log('newCar3 ahora esta encendido');
 }

newCar3.encender()
newCar2.encender()
console.log(newCar3.xx);
newCar3.model='toro';
console.log(newCar3);

//Clases

class Persona{
    constructor(nuevoNombre, nuevaEdad, nuevoSexo){
        this.nombre=nuevoNombre,
        this.edad=nuevaEdad,
        this.sexo=nuevoSexo
    }

    dormir(){
        return this.nombre + ' esta durmiendo'
    }

    despertar(){
        return this.nombre + ' ahora esta despierto'
    }

    comer(){
        return this.nombre + ' esta comiendo'
    }
    
}


let personaClase=new Persona('Nicolas','34','Masculino')

console.log(personaClase);

console.log(personaClase.dormir());
console.log(personaClase.despertar());

let alan=new Persona('Alan', '34', 'Masculino')

console.log(alan);

console.log(alan.comer());


