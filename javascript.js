let cards = []


class Card {
  constructor(q, a) {
    this.q = q;
    this.a = a;
    this.y = 0;
    this.n = 0;
  }
}

function addCard() {
  const question = document.getElementById().value;
  const answer = document.getElementById().value;
  const card = new Card(question, answer);
  cards.push(card);
}

function displayCards() {
  
}
