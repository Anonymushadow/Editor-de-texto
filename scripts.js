let texto = document.querySelector(".texto");
let cambios = document.querySelector(".cambios");

cambios.addEventListener("click", ()=>{
  let color = document.querySelector(".color");
  let tamaño = document.querySelector(".tamaño");
  let espaciado = document.querySelector(".espaciado");
  let negrita = document.querySelector(".negrita");
  let italica = document.querySelector(".italica");
  let subrayado = document.querySelector(".subrayado");
  let izquierda = document.querySelector(".izquierda");
  let centro = document.querySelector(".centro");
  let derecha = document.querySelector(".derecha");
  texto.style.color = color.value;
  texto.style.fontSize = `${tamaño.value}px`;
  texto.style.letterSpacing = `${espaciado.value}px`;
  if (negrita.checked) {
    texto.style.fontWeight = "bold";
  }else{
    texto.style.fontWeight = "normal";
  }

  if (italica.checked) {
    texto.style.fontStyle = "italic";
  }else{
    texto.style.fontStyle = "normal";
  }

  if (subrayado.checked) {
    texto.style.textDecoration = "underline";
  }else{
    texto.style.textDecoration = "none";
  }    

  let select = document.querySelector('.alineado');
  let alinear = select.options[select.selectedIndex];
    texto.style.textAlign = alinear.value;
})

