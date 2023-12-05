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

function mostrarAviso() {
    document.getElementById('aviso').style.display = 'block';
  }
  
  function redirecionar() {
    document.getElementById('linkHamburgueria').click();
  }
  
  function fecharAviso() {
    document.getElementById('aviso').style.display = 'none';
  }
  
  function mudarCursor(element) {
    element.style.cursor = "pointer";
  }
  
  function restaurarCursor(element) {
    element.style.cursor = "auto";
  }

  document.getElementById('textoHamburgueria').addEventListener('click', () => {
    document.getElementById('textoHamburgueria').style.animation = 'none';
  });
  
  window.onload = function () {
    document.getElementById('textoHamburgueria').style.animation = 'changeColor 5s infinite';
  };

  document.getElementById('textoHamburgueria').addEventListener('click', () => {
    document.getElementById('textoHamburgueria').style.animation = 'none';
  });
  
  window.onload = function () {
    document.getElementById('textoHamburgueria').style.animation = 'changeColor 5s infinite';
  };

  
