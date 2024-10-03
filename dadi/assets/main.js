console.log('ciao');

//Gioco dei dadi
//Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.
//Prima di partire a scrivere codice poniamoci qualche domanda: Che ci sia un array da qualche parte? Se dobbiamo confrontare qualcosa che "cosa" ci serve?

//1. Uso la funziona math.random per generare numeri casuali da 1 a 6, assegno a min il numero 1 e max il numero 6, dopodiche con math.floor arrontondo il numero delle variabili senno' stamperebbe numero decimale

let min = 1
let max = 6
const randomNumbersUser = Math.floor(Math.random() * (max - min + 1)) + min
const randomNumbersCpu = Math.floor(Math.random() * (max - min + 1)) + min
//2. Uso la condizione if con la quale se il numero del randomNumbersUser > randomNumbersCpu vince il giocatore e si stampa in console il messagio user wins
if(randomNumbersUser > randomNumbersCpu){
    console.log(randomNumbersUser);
    console.log(randomNumbersCpu);
    console.log('User wins');
    alert('Complimenti, hai Vinto!');
}
//3. Uso la condizione else if con la quale se il numero del randomNumbersUser < randomNumbersCpu  vince la cpu e si stampa in console il messagio cpu wins
else if(randomNumbersUser < randomNumbersCpu){
    console.log(randomNumbersUser);
    console.log(randomNumbersCpu);
    console.log('Cpu wins');
    alert('Che peccato, hai Perso...')
}
//3. Uso la condizione else per il pareggio
else{
    console.log(randomNumbersUser);
    console.log(randomNumbersCpu);
    console.log("It's a tie");
    alert("E' un Pareggio!")
}