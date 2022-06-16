// Code your solutions in this file
function writeCards(newNames, event) {
  let myCards = []
    for (let i = 0; i < newNames.length; i++) {
      myCards.push(`Thank you, ${newNames[i]}, for the wonderful ${event} gift!`);
    }
return myCards;
}



function countDown(myNumbers) {
  while (myNumbers > 0 ) {
    console.log(myNumbers);
    myNumbers -= 1;
  }
  console.log(myNumbers);
}