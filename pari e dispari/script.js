// PARI E DISPARI
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

// Consigli del giorno
// 1. Scriviamo sempre in italiano i passaggi che vogliamo fare
// 2. Scriviamo sempre solo un pezzetto di codice alla volta, se funziona allora andiamo avanti.

// Domande da  farsi quando si crea una funzione:
// 1. Come dovrebbe chiamarsi?
// 2. Ho bisogno di parametri?
// 3. Devo restituire un valore?
// 4. Se sì, di che tipo?

const userChoise = prompt("Scegli pari o dispari");
//se userChoise è diverso dalle stringhe "Pari" o "dispari" chiedo di inserire correttamente la scelta
// if (userChoise !== "pari" || userChoise !== "dispari") {
//   alert("Inserisci una scelta corretta!");
// }
const userNumber = parseInt(prompt("Inserisci un numero da 1 a 5"));
console.log(userChoise);
console.log(userNumber);

/**
 * Funzione che genera un numero casuale
 * @param {number} max il massimo numero del range
 * @param {number} min il minimo numero del range
 * @returns {number} numero casuale nel range
 */
function generateRandomNumber(max, min) {
  const randomNumber = Math.floor(Math.random() * (max - min - 1) * min);
  return randomNumber;
}
const pcNumber = generateRandomNumber(5, 1);

console.log(pcNumber);

const sum = userNumber + pcNumber;
console.log(sum);

/**
 * Funzione che controlla se un numero è pari o dispari
 * @param {number} a il numero di cui bisogna valutare se è pari o dispari
 * @returns {boolean}
 */
function pariDispari(a) {
  const result = a % 2 === 0 ? "pari" : "dispari";
  return result;
}

const pariOrDispari = pariDispari(sum);
console.log(pariOrDispari);

//se userChoise è uguale al risultato della funzione pariDispari (salvato nella variabile PariOrDispari)
// vince l'utente

if (userChoise === pariOrDispari) {
  alert("user won");
  //altrimenti vince il pc
} else {
  alert("pc won");
}
