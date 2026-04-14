let canvas = document.getElementById("areaJuego");
let ctx = canvas.getContext("2d");

let gatoX = canvas.width / 4; 
let gatoY = canvas.height / 4;
let comidaX = 0;
let comidaY = 0;
let comidaAncho = 100;
let comidaAlto = 100;
let puntos = 0

let gatoAncho = canvas.width / 4;
let gatoAlgrgo = canvas.height / 8 + 50;

let tiempoRestante = 10;
let intervaloTiempo;

function limpiarCanva() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function graficarGato() {
    ctx.fillStyle = "#0b49e8";
    ctx.fillRect(gatoX, gatoY, canvas.height / 4, canvas.width / 4);
}

function graficarComida() {
    ctx.fillStyle = "#00ff95ea";
    ctx.fillRect(comidaX, comidaY, comidaAncho, comidaAlto);
}

function moverIzquierda() {
    gatoX -= 10;

    limpiarCanva();     
    graficarComida();  
    graficarGato();   
    
    detectarColision();
}


function moverDerecha() {
    gatoX += 10;

    limpiarCanva();     
    graficarComida();  
    graficarGato();   
    
    detectarColision();
}

function moverArriba() {
    gatoY -= 10;

    limpiarCanva();     
    graficarComida();  
    graficarGato();   

    detectarColision(); 
}

function moverAbajo() {
    gatoY += 10;

    limpiarCanva();     
    graficarComida();  
    graficarGato();   
    
    detectarColision();
}


function detectarColision() {

    let gatoAncho = canvas.width * 2 / 4 + 50;
    let gatoAlto = canvas.height / 4;

    if (
        gatoX < comidaX + comidaAncho &&
        gatoX + gatoAncho > comidaX &&
        gatoY < comidaY + comidaAlto &&
        gatoY + gatoAlto > comidaY
    ) {
       puntos++;
       mostrarEnSpan("puntos", puntos);
       comidaX = generarAleatorio(0, canvas.width - comidaAncho);
       comidaY = generarAleatorio(0, canvas.height - comidaAlto);
        alert("¡El gato atrapó la comida!"+ puntos);
        limpiarCanva();
        graficarComida();
        graficarGato();
    }
}

function iniciarJuego() {
    
    graficarGato();
    graficarComida();
}
