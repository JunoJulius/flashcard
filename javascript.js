

let cards = [];
let activeCards =[];

class Card {
  constructor(q, a) {
    this.q = q;
    this.a = a;
    this.y = 0;
    this.n = 0;
  }
}

function addCard() {
  const question  = document.getElementById("question").value;
  const answer    = document.getElementById("answer").value;
  const card      = new Card(question, answer);
  cards.push(card);
  getIndexOfCard();
}

function getCard() {
  if (activeCards.length > 0) {
    let randomIndex = Math.floor(Math.random() * activeCards.length);
    console.log(`Random ${randomIndex}`);
    let tempIndex   = activeCards[randomIndex];
    return cards[tempIndex];
  } else {
    console.log("You're Finished");
  }
  // let randomIndex = Math.floor(Math.random() * cards.length);
  // if (cards[randomIndex].y) {
  //   getCard();
  // } else if (!cards[randomIndex].y) {
  //   return cards[randomIndex];
  //   console.log(getCard)
  // } else {
  //   console.log("DONE!");
  // }
}

function addIndexToActiveCards(i) {
    activeCards.push(i);
}

function getIndexOfCard() {
  let index = cards.length - 1;
  activeCards.push(index);
  console.log(index);
}

function makeTestCards() {
  for (let i = 0; i < 12; i++) {
    const question  = `Question ${i}`;
    const answer    = `Answer ${i}`;
    const card      = new Card(question, answer);
    cards.push(card);
    getIndexOfCard();
  }
}

makeTestCards();
