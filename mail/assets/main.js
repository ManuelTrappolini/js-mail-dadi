console.log('it works');

//Mail
//Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.

//1. inizio definendo una variabile per la mail per il prompt ed un array sul quale controllare le diverse email
//2 stabilisco condizione per cui cercare la mail nell'array con il ciclo for e voglio che il prompt inserendo la mail controlli che ci sia la mail nella lista
const regMail = [ 'mario.rossi@gmail.com', 'paolo.verdi@gmail.com'  ]
let mail = prompt('Inserisci qui la tua mail')


for(let i = 0; i < regMail.length; i++){
    if(regMail[i] === mail ){
        console.log('Benvenuto')
}
else {
    console.log('Reinserisci');
}   
}

