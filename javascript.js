

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
    let tempIndex   = activeCards[randomIndex];
    return cards[tempIndex];
  } else {
    console.log("You're Finished");
  }
}

function getIndexOfCard() {
  let index = cards.length - 1;
  activeCards.push(index);
}

function showCards() {
  let lengte;
  if (activeCards.length > 3) {
    lengte = 4;
  } else {
    lengte = activeCards.length;
  }
 for (let i = 0 ;i < lengte; i++) {
   let card = getCard();
   let question = card.q;
   let answer   = card.a;
   let tries    = card.n;
   console.log(question, answer, tries);



  /// build DIV'S
  const container = document.getElementById("flashcards");

  const divFlashcard    = document.createElement("div");
    divFlashcard.setAttribute('id',"flashcard");
  const divFlashcardq   = document.createElement("div");
    divFlashcardq.setAttribute('id',"flashcardq");
  const divFlashcarda   = document.createElement("div");
      divFlashcarda.setAttribute('id',"flashcarda");

/// ADD text

  const qtext   = document.createElement("p");
  const q       = document.createTextNode(question);
  qtext.appendChild(q);

  const atext   = document.createElement("p");
  const a       = document.createTextNode(question);
  atext.appendChild(a);

  // ADD BUTTONS

  const answerS = document.createElement("input");
    answerY.setAttribute('type', "submit");
    answerY.setAttribute('id', "answerS");
    answerY.setAttribute('onclick', "showAnwser()");

  const answerY = document.createElement("input");
    answerY.setAttribute('type', "submit");
    answerY.setAttribute('id', "answery");
    answerY.setAttribute('onclick', "buttonYes()");

  const answerN = document.createElement("input");
    answerY.setAttribute('type', "submit");
    answerY.setAttribute('id', "answern");
    answerY.setAttribute('onclick', "buttonNo()");

/// Build Everything
    divFlashcardq.appendChild(qtext);
    divFlashcardq.appendChild(answerS);

    divFlashcarda.appendChild(atext);
    divFlashcarda.appendChild(answerY);
    divFlashcarda.appendChild(answerN);

    divFlashcard.appendChild(divFlashcardq);
    divFlashcard.appendChild(divFlashcarda);
    container.appendChild(divFlashcard);
  }
}

function buttonYes() {
  console.log("YES");

}

function buttonNo() {
  console.log("NO");
}

function showAnwser() {

}

////////////////////////////////////

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











// Random background color for flashcard

function ran_col() { //function name
              var color = '#'; // hexadecimal starting symbol
              var letters = ['000000','FF0000','00FF00','0000FF','FFFF00','00FFFF','FF00FF','C0C0C0']; //Set your colors here
              color += letters[Math.floor(Math.random() * letters.length)];
              document.getElementById('flashCard').style.background = color; // Setting the random color on your div element.
          }
