const cards = document.querySelectorAll('.memory-card');

sessionStorage.setItem("score", 0);
let score = parseInt(sessionStorage.getItem('score'));
sessionStorage.setItem("flips", 0);
let flips = parseInt(sessionStorage.getItem('flips'));

let couple = [];

const scoreh2 = document.createElement('h2');
scoreh2.innerText = `Score: ${sessionStorage.getItem('score')} , Flips: ${sessionStorage.getItem('flips')}`;
scoreh2.style.textAlign = "center"; scoreh2.style.marginBottom = "10px"; scoreh2.style.fontSize = "36px"; 
const referenceNode = document.querySelector('#welcome');
referenceNode.after(scoreh2);
//document.body.appendChild(scoreh2);

function flipCard() {
  this.classList.add('flip');
  flips = flips + 1;
  sessionStorage['flips'] = flips;
  scoreh2.innerText = `Score: ${sessionStorage.getItem('score')} , Flips: ${sessionStorage.getItem('flips')}`;
  couple.push(this);
  if (couple.length == 2){
    checkForMatch(couple);
    couple = [];
    return;
  }

  /*const gameDiv = document.querySelector('game-div'); 
  console.log(gameDiv);*/ 
  //document.gameDiv.appendChild(scoreDiv); 

  
}

function checkForMatch(couple) {
  
    if (couple[0].classList.value === couple[1].classList.value) {
      score = score + 1;
      sessionStorage['score'] = score;
      scoreh2.innerText = `Score: ${sessionStorage.getItem('score')} , Flips: ${sessionStorage.getItem('flips')}`;
      setTimeout(() => {
        couple[0].remove();
        couple[1].remove();
      }, 1500); 
    }
    else{
      unflipCards(couple);
    }
}

function unflipCards(couple) {
    setTimeout(() => {
      couple[0].classList.remove('flip');
      couple[1].classList.remove('flip');
    }, 1000);
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
