let canvas=document.getElementById("areaJuego");
let ctx=canvas.getContext("2d");
 
function graficarGato(){
    ctx.fillStyle = "#0b49e8"
    ctx.fillRect(canvas.width/4,canvas.height/4,canvas.width*2/4+50,canvas.height/4);
}
function graficarComida(){
    ctx.fillStyle = "#00ff95ea"
    ctx.fillRect(0,0,100,100);
}
function iniciarJuego(){
    graficarGato();
    graficarComida();
}