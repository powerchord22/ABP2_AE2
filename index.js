
/* 1. En  un  conocido  juego  de  azar  con  opciones  pertenecientes  al  conjunto  de  los  números 
mayores a 1 y menores o iguales a 100, existen números que tienen más probabilidad de 
ganar. Esto aplica cuando un número es menor a 15 y mayor a 5, o bien si el número es el 
70 o el 55.  
Requerimiento: 
Realiza  un  algoritmo  y  pieza  de  código  en  JavaScript  tal  que,  ingresado  un  número, 
imprima en pantalla el mensaje “El número ingresado tiene opciones de ganar” en caso de 
que  esté  en  el  rango  antes  indicado,  o  bien  imprima  en  pantalla  el  mensaje  “El  número 
ingresado no es favorable” en caso contrario
 */


function azar(n) {
    if (n <=100 && n > 1) {
    if (n < 15 && n > 5) {
     console.log(`el numero ${n} ingresado tiene opciones de ganar`);
    } else if (n === 50 || n === 70) {
     console.log(`el numero ${n} ingresado tiene opciones de ganar`);
     } else {
       return console.log(`el numero ${n} ingresado NO tiene opciones de ganar`);
     }
    }
  }
   
  azar(55)


//  un  año  es  bisiesto  en  el  calendario  Gregoriano  si  es  divisible  entre  4  y  no  divisible  entre 
// 100, o bien, si es divisible entre 400. 
 
// Requerimiento: 
// Desarrolla  un  algoritmo  que  reciba  un  número  que  represente  a  un  año,  e  indique  si 
// corresponde  a un año  bisiesto o no. Debes validar que  el valor ingresado  sea  un número 
// menor o igual a cero; de no ser así, no se puede realizar operación adicional alguna. 

const esBisiesto = (year) => {
    return (year % 400 === 0) ? true : 
                (year % 100 === 0) ? false : 
                    year % 4 === 0;
  };

  console.log(esBisiesto(2000));


//   Un  partido  de  tenis  se  divide  en  sets.  Para  ganar  un  set,  un  jugador  debe  ganar  6  juegos, 
// pero  además  debe  haber  ganado  por  lo  menos  dos  juegos  más  que  su  rival.  Si  el  set  está 
// empatado a 5 juegos, el ganador es el primero que  llegue  a 7. Si el set está empatado  a 6 
// juegos, el set se define en un último juego, en cuyo caso el resultado final es 7-6. 
 
// Sabiendo  que  el  jugador  A  ha  ganado m  juegos,  y  el jugador  B,  n  juegos,  al  periodista  le  gustaría 
// saber si: 
 
// ● A ganó el set, o 
// ● B ganó el set, o 
// ● el set todavía no termina, o el resultado es inválido (por ejemplo, 8-6 o 7-3). 
 

function setResult(m, n) {
    if (m === 6 && n <= 4) {
      return "A ganó el set";
    } else if (n === 6 && m <= 4) {
      return "B ganó el set";
    } else if (m === 5 && n === 5) {
      return "El set todavía no termina";
    } else if (m === 7 && n === 6) {
      return "A ganó el set";
    } else if (n === 7 && m === 6) {
      return "B ganó el set";
    } else {
      return "Resultado inválido";
    }
  }

  console.log(setResult(6, 4));
 