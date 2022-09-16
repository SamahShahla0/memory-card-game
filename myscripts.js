const cards = document.querySelectorAll('.memory-card');

function flipCard() {
    //setting a flag value for this card div to false, the flag variable indicates if its flipped or not
    let hasFlippedCard = false;
    let firstCard;
    let secondCard;

    //adding the flip class to the card
    this.classList.add('flip');
    //checking if the card is not flipped 
    if (!hasFlippedCard) {
        //changing the value of the flag 
        hasFlippedCard = true;
        //assigning this card to firstcard variable
        firstCard = this;
        return;
   }
   
   secondCard = this;
   hasFlippedCard = false;

   checkForMatch();
}
function checkForMatch() {
    if (firstCard.dataset.framework === secondCard.dataset.framework) {
      disableCards();
      return;
    }
    unflipCards();
}

function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
}

function unflipCards() {
    setTimeout(() => {
      firstCard.classList.remove('flip');
      secondCard.classList.remove('flip');
    }, 1500);
}

cards.forEach(card => card.addEventListener('click', flipCard));
