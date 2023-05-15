const horas = document.getElementById("horas");
const minutos = document.getElementById("minutos");
const segundos = document.getElementById("segundos");

const relogio = setInterval(function time() {
  let date = new Date();
  let ls_hr = date.getHours();
  let ls_min = date.getMinutes();
  let ls_sec = date.getSeconds();

  if(ls_hr < 10) ls_hr = `0${ls_hr}`;
  if(ls_min < 10) ls_min = `0${ls_min}`;
  if(ls_sec < 10) ls_sec = `0${ls_sec}`;

  horas.textContent = ls_hr;
  minutos.textContent = ls_min;
  segundos.textContent = ls_sec;
});
