// PALIDROMA
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

// Consigli del giorno
// 1. Scriviamo sempre in italiano i passaggi che vogliamo fare
// 2. Scriviamo sempre solo un pezzetto di codice alla volta, se funziona allora andiamo avanti.

// Domande da  farsi quando si crea una funzione:
// 1. Come dovrebbe chiamarsi?
// 2. Ho bisogno di parametri?
// 3. Devo restituire un valore?
// 4. Se sì, di che tipo?

let userWord = prompt("Inserisci una parola");
console.log("La parola inserita è:  " + userWord);

/**
 * Funzione che fa l'inverso di una stringa
 * @param {string} a stringa da invertitr
 * @returns {string} stringa da restituire
 */
function inverseString(a) {
  let reverseWord = "";
  for (let i = a.length - 1; i >= 0; i--) {
    //concatenazione strighe
    reverseWord = reverseWord + a[i];
  }
  return reverseWord;
}

const outputText = inverseString(userWord);
console.log("La parola invertita è:  " + outputText);

/**
 * Funzione che confronta se due elementi sono uguali in valore e tipo
 * @param {*} a primo elemento
 * @param {*} b secondo elemento
 * @returns {boolean} restituisce vero se sono uguali altrimenti falso
 */
function isEqual(a, b) {
  const elementEqual = a === b ? true : false;
  return elementEqual;
}

const palindromaWord = isEqual(userWord, outputText);
if (palindromaWord === true) {
  alert("La parola è palindroma");
} else {
  alert("La parola non è palindroma");
}
console.log(isEqual(userWord, outputText));
