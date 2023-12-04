const circulo = document.getElementsByClassName('circulo')
const play = document.getElementById('play')
const stop = document.getElementById('stop')
const buttons = document.getElementById('submit')
const titulo = document.getElementById('titulo')
var len = circulo.length;

//Funcionamento ao ligar

const on = function () 
{
    for(var i = 0; i < len; i++)
    {
        circulo[i].removeAttribute("style");
        circulo[i].style.animationPlayState = "running";
        circulo[i].style.WebkitAnimationPlayState = "running";
    }
    
}

//Funcionamento ao Desligar
const off = function(){

titulo.style.animation = "none";

for(var i = 0; i < len; i++){
    circulo[i].style.animation = "none";
    circulo[i].style.background ="black;"
}
}

//Intensidade
function convert(){
    var velocidade = document.getElementById("quantidade").value;
    for(var i = 0; i < len; i++) {
        circulo[i].style.animationDuration = speed + "s";
    }
}

play.addEventListener("click", on);
stop.addEventListener("click", off);
