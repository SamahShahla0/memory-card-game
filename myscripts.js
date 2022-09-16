const cards = document.querySelectorAll('.memory-card');
//setting a flag value for this card div to false, the flag variable indicates if its flipped or not
let hasFlippedCard = false;
let lockBoard = false;
let firstCard ;
let secondCard ;

function flipCard() {
    if (lockBoard) return;
    if (this === firstCard) return;
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
    if (this === firstCard) return;
}

function unflipCards() {
    lockBoard = true;
    setTimeout(() => {
      firstCard.classList.remove('flip');
      secondCard.classList.remove('flip');
      resetBoard();
    }, 1300);
}

function resetBoard() {
    hasFlippedCard, lockBoard = false, false;
    firstCard, secondCard = null, null;
}

(function shuffle() {
    cards.forEach(card => {
      let ramdomPos = Math.floor(Math.random() * 6);
      card.style.order = ramdomPos;
    });
})();

cards.forEach(card => card.addEventListener('click', flipCard));
