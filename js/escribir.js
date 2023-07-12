const parrafo = document.querySelector("[data-texto]");

const texto =
  "Hola mi nombre es Franco Lujan, soy estudiante de ing.sistemas y desarrollador junior en el area de  front-end.";
let i = 0

  function escribir(){
    parrafo.innerHTML += texto[i]
    i++
    if( i == texto.length ){
        clearInterval(tiempo);
    }
  }

let tiempo = setInterval(escribir, 50)