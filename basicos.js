/********************************************************CADENAS DE TEXTO*****************************************************************/ 

let nombre = "Juan";
let nombre2 = 'juanS';
let apellido = new String("CARDONA LOPEZ HENAO TABAREZ,DOS");
let apellido2 = new String("cardona lopez henao tabarez,dos")

console.log (nombre,nombre2, apellido);

//propiedades

console.log(

    nombre.length,
    nombre2.length,
    apellido.length,

//minusculas
    
nombre.toLowerCase(),
    //mayudculas
    nombre2.toUpperCase(),
    //coincidencias
    apellido.includes("R"),
    //split genera un arreglo de una cadena de texto con algun tipo de separador

    apellido.split(" ")
);
/********************************************************TEMPLATE STRING*****************************************************************/ 
//INTERPOLACION
 // se llama acento arabe es para hacer la interpolacion de una variable
let dos= `mostrando ${apellido2}`;
apellido2.split("");
console.log(dos);
console.log(apellido2);


/********************************************************NUMEROS*****************************************************************/ 

let a = 2 ;
let b = new Number(1);
let c = 3.22;
//esto determina la cantidad de decimales que tendra un valor 
console.log(c.toFixed(3));

//esto devuelve solo la parte entera de un valor
console.log(parseInt(c));
//esto devuelve solo la parte flotante o decimal de un valor
console.log(parseFloat(c));

/********************************************************FUNCIONES*****************************************************************/ 
//FUNCION DE CLARATIVA

 function numeros(){

    console.log("unoi");
    console.log("unoi");

 }
 numeros();

 function detalle(){
    return 'retornando el valor asignando la funcion a una variable';

 }
 let mostrarDetalle=detalle();

 console.log(mostrarDetalle);


 //funcion que recibe y devuelve parametros y le colocamos valores por defecto desconocido y 0
 function saludo (nombre= "desconocido", apellido = "desconocido", edad =0){
     
     console.log(`nombre ${nombre} apellido ${apellido} edad ${edad}` );

 }
 saludo("JUAN", "CARDONA" , 30);

 //funcion expresada o anonima

const expresada = function(){       //function expresada =() =>{}
 console.log("funcion anonima")
 }
 expresada();

 const expresada2 = () =>{
    console.log("arrow function");
 }
 expresada2();


 /********************************************************ARREGLOS*****************************************************************/ 

//estudiar metodos y propiedades de los arreglos
 const arrglo1 = ["juan" ,"luis"];
 console.log(arrglo1);
 console.log(arrglo1[0]);

 //otra foprma de declarar un arrglo

 const arreglo2 = Array.of("carlos", "julio",2,4,5);
 console.log(arreglo2);

 const arreglo3 = Array(3).fill("Miguél Ángel Cardona Marín");
 console.log(arreglo3);


 /********************************************************OBJETOS*****************************************************************/ 
let letras = new String("hello")

console.log(letras);


const ingeniero = {
    nombre: "sebas",
    edad : 30,
    empresa: "jsoltions",
    pasatiempo:["pc", "GYM"],

    //funcion anonima
    trabajo: () =>{

        console.log(`Soporte Cuatro milpas`);
    
    },
    //funcion de forma normal 
    jsolution:function(){
        console.log(`el nombre de mi empresa es:${this.empresa}`);
    },

    redes: {
        facebookm: "sebast0625@hotmail.com",
        twitter: "sebithas0625"

    }



}

console.log("twitter " + ingeniero.redes.twitter),
console.log(ingeniero.pasatiempo[0]);

console.log(ingeniero.nombre);
ingeniero.jsolution();

ingeniero.trabajo();

//metodos de los objetos
//permite listar todas las lleves del objeto

console.log(Object.keys(ingeniero));
console.log(Object.values(ingeniero));
console.log(ingeniero.hasOwnProperty("nombre"));

/********************************************************TIPOS DE OPERADORES*************************************************************/ 
//ARITYMETICOS + - * % / EL MODULO DEVUELVE EL RESIDUO

/********************************************************CICLOS*************************************************************/
///ya casi no se usan
 /*let contador = 0 ;

 while(contador <= 10){

    console.log( "WHILE" + contador);
     contador++;
 }

do{
    console.log("do while " + contador);
    contador++;
}
while(contador <10);

*/

//for 
let num = [10,20,30,40];
for( let i=0 ;i<=num.length; i++){
    console.log(num[i]);
}

//forin para recorrer los atrbutos de un  objeto(ingeniero)

for (const datos in ingeniero) {
    console.log(datos)
}

//forof
let palabra= "sebastian";

for (const caracter of palabra) {
    console.log(caracter);

}


/********************************************************manejo de errores*************************************************************/









