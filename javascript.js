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
  const question  = document.getElementById("question").value;
  const answer    = document.getElementById("answer").value;
  const card      = new Card(question, answer);
  cards.push(card);
}

function getCard() {
  let randomIndex = Math.floor(Math.random() * cards.length);
  return cards[randomIndex];


}
