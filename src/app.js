/* eslint-disable */

window.onload = function() {
  //write your c<ode here
  document.getElementById("miDominio").innerHTML = generarDominio();
};

const generarDominio = () => {
  let pronombre = ["el", "la", "los"];
  let sustantivo = ["pez", "ballena"];
  let adjetivo = ["grande", "pequeño", "gordo"];
  let dominio = [".com", ".es", ".org"];

  array2 = " ";
  for (let i = 0; i < pronombre.length; i++) {
    for (let j = 0; j < sustantivo.length; j++) {
      for (let k = 0; k < adjetivo.length; k++) {
        for (let l = 0; l < dominio.length; l++) {
          array2 +=
            pronombre[i] + sustantivo[j] + adjetivo[k] + dominio[l] + "<br>";
        }
      }
    }
  }
  return array2;
};
