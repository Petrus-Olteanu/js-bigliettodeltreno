/*Biglietto del Treno
Attraverso l'uso del prompt e delle condizioni, realizzare un programma che: 
chieda all’utente il numero di chilometri da percorrere e l’età del passeggero; sulla base di queste informazioni il programma dovrà calcolare il prezzo totale del viaggio.

Nota Bene: 
Il prezzo del biglietto ha un costo di 0.21€ per km da percorrere.
Se il passeggerò è minorenne, il prezzo del biglietto sarà scontato del 20%.
Se l'età del passeggerò è un valore maggiore o uguale di 65, il prezzo del biglietto sarà scontato del 40%.
Se il valore inserito nel prompt non è un valore numerico, dovrà essere restituito a video il seguente messaggio: "il valore inserito non è un numero. Riprova"

Il risultato dovrà essere stampato a video nel documento.*/

//Dichiarazione variabili
let numk = parseInt(prompt("Inserisci numero di kilometri:"));
let eta = parseInt(prompt("inserisci età:"));
const prezzob = 0.21;

//Controllo per vedere se il numero inserito è un numero
if (isNaN(numk) || isNaN(eta)) alert("il valore inserito non è un numero. Riprova");
else {
  const sconto = eta < 18 ? 0.8 : eta >= 65 ? 0.6 : 1;
  document.getElementById("output").innerText =
    "Numero kilometri: " + numk +
    "\nEtà passeggero: " + eta +
    "\nSconto applicato: " + Math.ceil((1 - sconto) * 100) + "%" +
    "\nCosto biglietto: " + numk * prezzob * sconto;
}