const cards = document.querySelectorAll('.memory-card');
const memorygame = document.getElementsByClassName('memory-game');
console.log(memorygame);

let firstCard;
let secondCard;
let boardLocked = false;
let isFlipped = false;


function flipCard() {
  if (this == firstCard){
    return;
  }
  if (boardLocked){
    return;
  }

  this.classList.add('flip');
  console.log('flipping');
  
  if (!isFlipped){
    isFlipped = true;
    firstCard = this;
    console.log('assigning fcard');
    return;
  }

  secondCard = this;
  boardLocked = false;
  console.log('assigning scard');
  checkForMatch();

}

function checkForMatch() {
    if (firstCard.classList === secondCard.classList) {
      console.log('found match');
      firstCard.remove();
      secondCard.remove();
    }
    unflipCards();
}

function unflipCards() {
    boardLocked = false;
    setTimeout(() => {
      firstCard.classList.remove('flip');
      secondCard.classList.remove('flip');
      resetBoard();
    }, 1500);
}

function resetBoard() {
  isFlipped, boardLocked = false, false;
  firstCard, secondCard = null, null;
}

(function shuffle() {
    cards.forEach(card => {
      let ramdomPos = Math.floor(Math.random() * 6);
      card.style.order = ramdomPos;
    });
})();

cards.forEach(card => card.addEventListener('click', flipCard));
