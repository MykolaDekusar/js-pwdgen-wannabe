'use strict';

/*OBIETTIVO:
Chiedi all’utente il suo nome,
poi chiedi il suo cognome,
poi chiedi il suo colore preferito
Infine scrivi sulla pagina nomecognomecolorepreferito21

Bonus 1: visualizzate le informazioni anche nella console del browser;
Bonus 2: provate a generare un numero casuale con Javascript;
*/

let currentElement = document.getElementById("password");
let userPassword = currentElement.innerHTML;
const firstName = prompt("Inserisci il tuo nome");
const secondName = prompt("Inserisci il tuo cognome");
const favColor = prompt("Inserisci il tuo colore preferito");
const randomNumber = Math.floor((Math.random() * 10000) + 1);


//main exercise
//userPassword = `${userPassword}${firstName}${secondName}${favColor}21`;

//BONUS 2
userPassword = `${userPassword}${firstName}${secondName}${favColor}${randomNumber}`;

//BONUS 1
console.log("password = " + userPassword);

currentElement.innerHTML = userPassword;


