/* eslint-disable */

let generatExcuse = () => {
  let quien = ["El perro", "Mi abuela", "El cartero", "Mi pajaro"];
  let accion = ["comio", "orino", "llevo", "defeco"];
  let que = ["mi tarea", "mi celular", "mi auto"];
  let cuando = [
    "antes de la clase",
    "cuando dormia",
    "mientras hacia ejercicio",
    "durante el almuerzo",
    "mientras oraba"
  ];

  let q = Math.floor(Math.random() * quien.length);
  let a = Math.floor(Math.random() * accion.length);
  let qu = Math.floor(Math.random() * que.length);
  let c = Math.floor(Math.random() * cuando.length);

  return (
    quien[q] + " se " + accion[a] + " en " + que[qu] + " justo " + cuando[c]
  );
};
//write your code here
