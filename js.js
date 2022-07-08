document.addEventListener("keydown", moverCabeza);
const personaje = document.getElementById("personaje");

function moverCabeza(e) {
  let horizontalValue = getComputedStyle(personaje, null)
    .getPropertyValue("left")
    .slice(0, -2);
  let verticalValue = getComputedStyle(personaje , null)
    .getPropertyValue("top")
    .slice(0, -2);
  let tamaño = getComputedStyle(personaje, null)
    .getPropertyValue("height")
    .slice(0, -2);
    let filtro = getComputedStyle(personaje, null)
    .getPropertyValue("filter")
    .slice(0 ,-2);
    filtro = Number(filtro);
    verticalValue = Number(verticalValue);
  horizontalValue = Number(horizontalValue);
  tamaño = Number(tamaño);

  if (e.keyCode === 68) {
    personaje.style.left = horizontalValue + 10 + "px";
  } else if (e.keyCode === 65) {
    personaje.style.left = horizontalValue - 10 + "px";
  } else if (e.keyCode === 87) {
    personaje.style.top = verticalValue - 10 + "px";
  } else if (e.keyCode === 83) {
    personaje.style.top = verticalValue + 10 + "px";
  } else if(e.keyCode === 70) {
    personaje.style.height = tamaño + 50 + "px";
  } else if (e.keyCode === 67 ){
    personaje.style.height = tamaño - 50 +"px";
  } else if (e.keyCode === 69){
    personaje.style.filter = filtro + blur + "(1)";
  }
}




