console.log('Desde ejercicios POO');
//Ejercicio 1
let auto={
    color:'Negro',
    marca:'toyota',
    modelo:2022,
    encendido: false,

    encenderAuto(){
        this.encendido=true;   
        return this.encendido;     
    },

    apagarAuto(){
        this.encendido=false;   
        return this.encendido;
    }
}

console.log(auto);
console.log('encendido='+auto.encendido);
console.log('encendido='+auto.encenderAuto());
console.log('encendido='+auto.encendido);
console.log('encedido luego de apagar='+auto.apagarAuto());

document.write('<br>Color: '+auto.color);
document.write('<br>Marca: '+auto.marca);
document.write('<br>Modelo: '+auto.modelo);
document.write('<br>Esta encendido?: '+auto.encendido); 
//enciendo el auto

auto.encenderAuto();

document.write('<br>Esta encendido?: '+auto.encendido);

//apago el auto

auto.apagarAuto();

document.write('<br>Esta encendido?: '+auto.encendido);


