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