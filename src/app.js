/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let quien = ["the dog", "my granma", "his turtle", "my bird"];
  let que = ["eat", "pissed", "crushed", "broked"];
  let cuando = [
    "before the class",
    "right in time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  function generarRandom(totalExcusas) {
    return Math.floor(Math.random() * totalExcusas);
  }
  //Genero el sujeto de la excusa
  let posicionSujeto = generarRandom(quien.length);
  let sujeto = quien[posicionSujeto];

  //Genero el que paso
  let posicionQue = generarRandom(que.length);
  let quePaso = que[posicionQue];

  //Genero el cuando paso
  let posicionCuando = generarRandom(cuando.length);
  let cuandoPaso = cuando[posicionQue];

  let parrafo = document.getElementById("excuse");
  parrafo.innerHTML = sujeto + " " + quePaso + " " + cuandoPaso;
};
