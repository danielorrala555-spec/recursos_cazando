let canvas = document.getElementById("areaJuego");
let ctx = canvas.getContext("2d");

let gatoX = canvas.width / 4; 

function limpiarCanva() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function graficarGato() {
    ctx.fillStyle = "#0b49e8";
    ctx.fillRect(gatoX, canvas.height / 4, canvas.width * 2 / 4 + 50, canvas.height / 4);
}

function graficarComida() {
    ctx.fillStyle = "#00ff95ea";
    ctx.fillRect(0, 0, 100, 100);
}

function moverIzquierda() {
    gatoX -= 10;

    limpiarCanva();     
    graficarComida();  
    graficarGato();    
}

function iniciarJuego() {
    graficarGato();
    graficarComida();
};
