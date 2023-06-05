var nombre ="David Pol";
var altura="169";
var concatenado= nombre + " " + altura;

var datos= document.getElementById('datos');

if(altura >=180){
    datos.innerHTML += '<h1>Eres una persona alta</h1>';
}else{
    datos.innerHTML += '<h1>Eres una persona bajita</h1>';
}

for(var i=2000;i<=2023;i++){
    //bloque de instrucciones
    datos.innerHTML +='<h2>estamos en el año '+i;
}


//functions
function muestraMiNombre(nombre,altura){
    var datos = `
        <h1>Soy la caja de datos </h1>
        <h2>mi nombre es ${nombre}</h2>
        <h3>mido: ${altura} cm </h3>
    `;
    return datos;

}
function imprimir(){
    var datos= document.getElementById('datos');
    datos.innerHTML = muestraMiNombre("david",169);
}

imprimir("david",169);


//Arrays
var nombres =["david","Pol","Sanchez"]
/*
for(var i=0;i<nombres.length;i++){
    
    document.write(nombres[i]+'</br>')
}*/
nombres.forEach((nombre)=>{
    document.write(nombre+'</br>')
})

//objectos
var coche={
    modelo:"Kia Ceed",
    maxima: 500,
    antiguedad:2023,
    mostrarDatos(){
        //ver desde consola 
        console.log(this.modelo,this.maxima,this.antiguedad);
    },
    propiedad1:"valor aleatorio"
}
document.write("<h1>"+coche.modelo+"</h1>");
coche.mostrarDatos();

console.log(coche);

var saludar = new Promise((resolve, reject) => {

    setTimeout(()=>{
         let saludo = "hello aparezco cuando menos se me espera " ;
         if (saludo){
            resolve(saludo);

         }else{
            reject("no hay saludo que valga");
         }
    },2000);
});