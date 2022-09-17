const cards = document.querySelectorAll('.memory-card');
const memorygame = document.getElementsByClassName('memory-game');
console.log(memorygame);

let isFlipped = false;
let couple = [];
console.log(couple);

function flipCard() {
  if (isFlipped == false){
    this.classList.add('flip');
    console.log('flipping');
    isFlipped = true;
    couple.push(this);
    console.log(couple);
    return;
  }
  if(isFlipped){
    return;
  }
  
  this.classList.add('flip');
  console.log('flipping');
  couple.push(this);
  console.log(couple);
  isFlipped = false;
  checkForMatch();

}

function checkForMatch() {
    //if () {
  
    //}
    unflipCards();
}

function unflipCards() {
    setTimeout(() => {
      //.classList.remove('flip');
      //secondCard.classList.remove('flip');
      resetBoard();
    }, 1500);
}

function resetBoard() {
  isFlipped = false;
}
/////////////////////////////////////////////////////////////////////////////////
//this will be executed on DOM load
(function shuffle() {
    cards.forEach(card => {
      let ramdomPosition = Math.floor(Math.random() * 6);
      card.style.order = ramdomPosition;
    });
})();

cards.forEach(card => card.addEventListener('click', flipCard));
