// La clase es la definicion de un objeto
/* dentro de las clases hay unas funciones que se disparan en el momento en 
el que se crea un objeto, como "new Image()", y esas funciones que se 
disparan cuando se crea el objeto de llaman contructores, "constructor()"
- Para crear una variable dentro de una clase, se debe hacer dentro de la
 la funcion  "constructor()".
- "this" es un indicador de la instancia en donde estoy */
/*Dentro de una clase para crear un funcion no es necesario agregarle
la palabra reservada "function", ya que se entiende de manera implicita, que
todo bloque de codigo dentro de una clase es una funcion. */
/*Los elementos de un array tendran una pocision determinada, pero siempre
la primer pocision sera la pocision "0". Por ejemplo:
var nombres = ["Alan", "Jose", "Daniel", "Roberto"];
    - Alan es la pocision 0;
    - Jose es la pocision 1;
    - Daniel es la pocision 2;
    -Roberto es la pocision 3;
y asi sucesivamente.
A los arrays se les puede empujar datos, los cuales se agregaran hasta 
el ultimo, y para hacer eso se debe usar una funcion de los arrays
la cual se llama "push".
nombres.push("Luis");
el array ahora quedaria de esta forma:
["Alan", "Jose", "Daniel", "Roberto", "Luis"];
"Luis" ocuparia la pocision 4.
Se pueden crear arrays donde en vez de que las pocisiones 
sean numeros, las pocisiones sean texto, a esto se le llama
"arrays asociativos".
Un array asociativo es un array cuyos índices no son numéricos sinó cadenas 
de texto (claves). En JavaScript no existen realmente arrays asociativos pero 
podemos simularlos creando objetos y accediendo a sus propiedades.*/
/*en html no importa de donde me traiga los archivos, al final del
dia los va a meter todos en el mismo lado, y tambien las clases 
al igual que las funciones, JavaScript primero las lee, y luego las
monta en memoria y luego ahi si empieza a ejecutar el codigo linea 
por linea*/
/*Hay un ciclo especial en JavaScript, y este ciclo solo va a operar
por la cantidad de objetos que hay dentro de un array.
for(var pakimanes in coleccion){
    console.log(pakimanes);
}, "in", itera sobre el indice, y en el caso de hacerle console.log, en la
consola solo mostrara las pocisiones de cada variable del array.

for(var pakimanes of coleccion){
    console.log(pakimanes);
} , "of", itera sobre los objetos, y en este caso, si se le hace 
console.log, en la consola mostrara la instancia u objeto.

El "in" y el "of", pueden servir para recorrer un objeto por dentro,
y en ocasiones para recorrer arrays que no conocemos.

En arrays asociativos funcionaria el "in", para mostrar las claves, 
pero el "of" no, porque como tal no se ha creado un indice (pocisiones)
osea "0, 1, 2", entonces no se le da un indice a JavaScript
para que lo pueda recorrer.

var urlImagenes = [];
urlImagenes ["Cauchin"] = "vaca.png";
urlImagenes ["Pokacho"] = "pollo.png";
urlImagenes ["Tocinauro"] = "cerdo.png";

for(var x in urlImagenes){
    console.log(x);
//EN LA CONSOLA MOSTRARIA LAS CLAVES ("Cauchin", "Pokacho", "Tocinauro")
}
for(var x of urlImagenes){
    console.log(x);
// NO MOSTRARIA NADA EN LA CONSOLA, YA QUE 
LAS CLAVES ("Cauchin", "Pokacho", "Tocinauro"), NO SON "INDICES" Y POR
ENDE JAVASCRIPT NO LOS PUEDE RECORRER;
}

El "in" se lo puedes aplicar a un objeto de un array directamente,
esto para que nos muestre los atributos del mismo.
for(var x in coleccion[0]){
    console.log(x);
//MOSTRARIA ("IMAGEN", "NAME", "LIFE" Y "ATTACK"), QUE SON LOS ATRIBUTOS 
DEL OBJETO
}
*/


var urlImagenes = [];
urlImagenes ["Cauchin"] = "vaca.png";
urlImagenes ["Pokacho"] = "pollo.png";
urlImagenes ["Tocinauro"] = "cerdo.png";
 
var coleccion = [];
coleccion.push(new Pakiman("Cauchin", 100, 30));
coleccion.push(new Pakiman("Pokacho", 80, 50));
coleccion.push(new Pakiman("Tocinauro", 120, 40))

for (var pakimanes of coleccion){
   pakimanes.insertarImagen();
}

