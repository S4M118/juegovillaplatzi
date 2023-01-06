var vp = document.getElementById("villa");
var papel = vp.getContext("2d");
var mapa = "tile.png";
var teclas = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39
};

var xvaca = 150;
var yvaca = 150;


console.log(teclas)

document.addEventListener("keyup", movimientoTeclado);


var fondo = {
    url:"tile.png",
    cargaOk: false
}
var vaca = {
    url:"vaca.png",
    cargaOk: false
};
var cerdo = {
    url: "cerdo.png",
    cargaOk: false
}
var pollo = {
    url: "pollo.png",
    cargaOk: false
}

var cantidad = aleatorio(1, 2);

fondo.objeto = new Image(); 
fondo.objeto.src = fondo.url;
fondo.objeto.addEventListener("load", cargarFondo);

vaca.objeto = new Image();
vaca.objeto.src = vaca.url;
vaca.objeto.addEventListener("load", cargarVaca);

cerdo.objeto = new Image();
cerdo.objeto.src = cerdo.url;
cerdo.objeto.addEventListener("load", cargarCerdo);

pollo.objeto = new Image();
pollo.objeto.src = pollo.url;
pollo.objeto.addEventListener("load", cargarPollo);

function cargarFondo() {
    fondo.cargaOk = true;
    dibujar()
}
function cargarVaca() {
    vaca.cargaOk = true;
    dibujar()
    movimientoTeclado(vaca)
}
function cargarCerdo() {
    cerdo.cargaOk = true;
    dibujar()
}
function cargarPollo() {
    pollo.cargaOk = true;
    dibujar()
}

function dibujar() {
    if(fondo.cargaOk) {
        papel.drawImage(fondo.objeto, 0, 0)
    }
    if(vaca.cargaOk) {
        console.log(cantidad)
        // for(var v=0; v<cantidad; v ++) {
            // var x = aleatorio(0, 7)
            // var y = aleatorio(0, 7)
            // var x = x * 60;
            // var y = y * 60;
        papel.drawImage(vaca.objeto, xvaca, yvaca)
        
    }
    if(cerdo.cargaOk) {
        console.log(cantidad)
        for(var c=0; c<cantidad; c ++) {
            var x = aleatorio(0, 7)
            var y = aleatorio(0, 7)
            var x = x * 60;
            var y = y * 60;
            papel.drawImage(cerdo.objeto, x, y)
        }
    }
    if(pollo.cargaOk) {
        console.log(cantidad)
        for(var p=0; p<cantidad; p ++) {
            var x = aleatorio(0, 7)
            var y = aleatorio(0, 7)
            var x = x * 60;
            var y = y * 60;
            papel.drawImage(pollo.objeto, x, y)
        }
    }
}


function aleatorio (min, max) {
    var resultado;
    resultado = Math.floor(Math.random() * (max - min + 1)) + min;
    return resultado;
} 

var colorcito = "blue";
var movimiento = 15;

function movimientoTeclado(evento) { 
     switch(evento.keyCode) {
         case teclas.UP:
            moverLinea(yvaca - movimiento, papel);
             yvaca = yvaca - movimiento;
            break;
         case teclas.DOWN:
            moverLinea(yvaca + movimiento, papel);
             yvaca = yvaca + movimiento;
             break;
         case teclas.LEFT:
            moverLinea(xvaca - movimiento, papel);
             xvaca = xvaca - movimiento;
             break;
        case teclas.RIGHT:
             moverLinea(xvaca + movimiento, papel);
             xvaca = xvaca + movimiento;
             break;
     }
     dibujar(vaca.cargaOk)
}

function moverLinea (xfinal, yfinal) {
    papel.beginPath();
    papel.strokeStyle = "blue";
    papel.lineWidth = 3;
    papel.moveTo(xvaca, yvaca);
    papel.lineTo(xfinal, yfinal);
    papel.stroke();
    papel.closePath();
    console.log(moverLinea)
}
