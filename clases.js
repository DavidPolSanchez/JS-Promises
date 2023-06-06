class Coche{
    constructor(modelo,velocidad,antiguedad){
        this.modelo=modelo;
        this.velocidad=velocidad;
        this.antiguedad=antiguedad;
    }
   aumentarVelocidad(){
     this.velocidad += 1;
   }
   reducirVelocidad(){
    this.velocidad -= 1;
  }

}
class Autobus extends Coche{
    constructor(modelo,velocidad,antiguedad){
        super(modelo,velocidad,antiguedad);
        this.altura=2;
    }
    mostrarAltura(){
        return 'la altura del bus es :'+this.altura;
    }
}


var autobus1 = new Autobus('jumpy',150,2000)
var coche1 = new Coche('Kia Ceed',200,2023);

console.log(autobus1);
console.log(autobus1.mostrarAltura());

coche1.aumentarVelocidad();
coche1.aumentarVelocidad();
coche1.aumentarVelocidad();

document.write('<h1>'+coche1.velocidad+'</h1>');
console.log(coche1);