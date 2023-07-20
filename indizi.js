
/***
 * Giusto quel poco di matematica
 * 
 * Dato il numero di cui calcolare il fattoriale, possiamo effettuale un ciclo che vada
 * all'indietro da quel numero fino a zero e che moltiplichi una certa variabile accumulatore
 * per ogni predecessore incontrato. Alla fine dell'operazione l'accumulatore conterrà il risultato.
 */

/***
 * Media Aritmetica
 * 
 * La media di una sequenza di numeri è data dalla somma di tutti questi numeri
 * diviso la lunghezza della sequenza. Quindi il problema di trovare la media di un array 
 * si riduce, in realtà, a quello di calcolare la somma dei valori di un array. Una
 * volta che abbiamo la somma basta restituire la divisione tra questa e la lunghezza
 * dell'array.
 */

/***
 * Math.Pow
 * 
 * Se questo esercizio risulta difficile, può essere che non si abbia dimestichezza con l'operazione
 * di elevamento a potenza, che è in realtà una cosa semplice:
 * A elevato alla B si ottiene prendendo A e moltiplicandolo per sé stesso, B volte.
 * Es:
 * - pow(2, 2) = 2 * 2 = 4
 * - pow(2, 3) = 2 * 2 * 2 = 8
 * - pow(2, 4) = 2 * 2 * 2 * 2 = 16
 * ...
 */

/***
 * Con Ripetizioni o Senza?
 * 
 * Una possibile strategia (rudimentale ma efficace) potrebbe essere quella di
 * verificare se esiste un elemento dell'array che è uguale a qualcuno dei suoi
 * elementi successori. PER OGNI elemento A dell'array, PER OGNI elemento B successore
 * di A, Se A è uguale a B posso dire immediatamente che l'array CONTIENE DOPPIONI. Se
 * non capita mai che A sia uguale a B allora posso dire che l'array NON CONTIENE DOPPIONI.
 */

/***
 * Che la Sort ti sorrida
 * Il problema dell'ordinamento degli array tormenta gli informatici da quando gli algoritmi esistono.
 * Orde di programmatori si sono cimentate nel trovare l'algoritmo più efficiente(*) per ordinare un
 * array di numeri. A noi va bene anche una soluzione non particolarmente efficente purché sia semplice.
 * Una strategia possibile è quella di visitare OGNI elemento dell'array e, a partire da esso, visitare
 * OGNI suo elemento successivo. PER OGNI elemento successivo, se esso è minore dell'elemento di partenza,
 * li si scambia di posto.
 */