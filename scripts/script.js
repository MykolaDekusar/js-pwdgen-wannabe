'use strict';

/*OBIETTIVO:
Chiedi all’utente il suo nome,
poi chiedi il suo cognome,
poi chiedi il suo colore preferito
Infine scrivi sulla pagina nomecognomecolorepreferito21

Bonus 1: visualizzate le informazioni anche nella console del browser;
Bonus 2: provate a generare un numero casuale con Javascript;
*/

const currentElement = document.getElementById("password"); //assegno un valore costante preso dall'elemento span dentro index.html
const firstName = prompt("Inserisci il tuo nome"); //chiedo il nome e lo assegno alla costante firstName 
const secondName = prompt("Inserisci il tuo cognome"); //chiedo il cognome e lo assegno alla costante secondName
const favColor = prompt("Inserisci il tuo colore preferito"); //chiedo il colore preferito e lo assegno alla costante favColor
const randomNumber = Math.floor((Math.random() * 10000) + 1); //creo una costante di numero casuale che varia da 1 a 10000 inclusi
let userPassword = currentElement.innerHTML;  //assegno un valore variabile in formato stringa

//main exercise    assegno alla stringa userPassword un insieme di stringhe
//userPassword = `${userPassword}${firstName}${secondName}${favColor}21`;

//BONUS 2                     //sostituisco il 21 con il numero intero casuale 
userPassword = `${userPassword}${firstName}${secondName}${favColor}${randomNumber}`; //interpolazione

//BONUS 1 riporto nella console la stringa password = e la stringa composta di userPassword
console.log("password = " + userPassword);

//vado a modificare l'html interno del tag che ha l'id:password
currentElement.innerHTML = userPassword;


