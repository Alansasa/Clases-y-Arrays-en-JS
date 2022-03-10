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

var urlImagenes = [];
urlImagenes ["Cauchin"] = "vaca.png";
urlImagenes ["Pokacho"] = "pollo.png";
urlImagenes ["Tocinauro"] = "cerdo.png";
 
class Pakiman{
    constructor(nombrePakiman, vida, ataque){
        this.imagen = new Image ();
        this.name = nombrePakiman;
        this.life = vida;
        this.attack = ataque;
        this.imagen.src = urlImagenes [this.name];
    }
    insertarImagen(){
        document.body.appendChild(this.imagen);
        document.write("<br /> <strong id = nombrePakiman>" + this.name + "</strong> <br />");
        document.write("Vida: " + this.life + " hp <br />");
        document.write("Ataque: " + this.attack + "<hr />") 
    }

}

var cauchin = new Pakiman("Cauchin", 100, 30);
var pokacho = new Pakiman("Pokacho", 80, 50);
var tocinauro = new Pakiman("Tocinauro", 120, 40);

cauchin.insertarImagen();
pokacho.insertarImagen();
tocinauro.insertarImagen();