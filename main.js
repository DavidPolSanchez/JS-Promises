var nombre ="David Pol";
var altura="169";
var concatenado= nombre + " " + altura;


var datos= document.getElementById('datos');

 datos.innerHTML = `
    <h1>Soy la caja de datos </h1>
    <h2>mi nombre es ${nombre}</h2>
    <h3>mido: ${altura} cm </h3>
`;

if(altura >=180){
    datos.innerHTML += '<h1>Eres una persona alta</h1>';
}else{
    datos.innerHTML += '<h1>Eres una persona bajita</h1>';
}
for(var i=2000;i<=2023;i++){
    //bloque de instrucciones
    datos.innerHTML +='<h2>estamos en el año '+i;
}

coche.cogerDatos();
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