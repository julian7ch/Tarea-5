var mensaje = "aprendiendo Diseño web :)";
alert(mensaje);


//deslizamineto de imagenes
new Splide( '.splide' ).mount();

document.addEventListener( 'DOMContentLoaded', function () {
  new Splide( '.splide' ).mount();
} );


//bordo imagen ballena cambia de azul a rojo
var bordeBallena = document.getElementById("imagen1");
bordeBallena.addEventListener("click",funcion1);


function funcion1(){
  document.getElementById("imagen1").classList.add("bordeB");  
}
//borde de boton parte infeior cambiar a color verde
var bordeBoton = document.getElementById("boton");
bordeBoton.addEventListener("click",funcion2);

function funcion2(){
  document.getElementById("boton").classList.add("bordeBot");  
}
//sonido ballena
var sound1 = new Howl({
  src: ['asserts/audios/ballena.mp3']
});

var botonball = document.getElementById("sonidoBallena");
botonball.addEventListener("click",function(){sound1.play();
  botonball.className = "inhabilitar";
  botonballsil.className = "habilitar";
 });

var botonballsil = document.getElementById("muteBallena");
botonballsil.addEventListener("click",function(){sound1.pause();
  botonball.className = "habilitar";
  botonballsil.className = "inhabilitar";
})

//sonido Megalodon
var sound2 = new Howl({
  src: ['asserts/audios/megalodon.mp3']
});

var megaudio = document.getElementById("sonidoMega");
megaudio.addEventListener("click",function(){sound2.play();
  megaudio.className = "inhabilitar";
  megasilen.className = "habilitar";
 });

var megasilen = document.getElementById("muteMega");
megasilen.addEventListener("click",function(){sound2.pause();
  megaudio.className = "habilitar";
  megasilen.className = "inhabilitar";
})

//sonido Elefante
var sound3 = new Howl({
  src: ['asserts/audios/elefante.mp3']
});

var eleaudio = document.getElementById("sonidoEle");
eleaudio.addEventListener("click",function(){sound3.play();
  eleaudio.className = "inhabilitar";
  elesilen.className = "habilitar";
 });

var elesilen = document.getElementById("muteEle");
elesilen.addEventListener("click",function(){sound3.pause();
  eleaudio.className = "habilitar";
  elesilen.className = "inhabilitar";
})

gsap.from("#animar", {duration: 5, x: 300, opacity: 0, scale: 1, repeat: 10, repeatDelay: 3});
