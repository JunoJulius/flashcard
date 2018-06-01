

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

function clearDiv(id) {
  document.getElementById(id).innerHTML = "";
}

function showCards() {
  clearDiv("flashCards");
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
  const container = document.getElementById("flashCards");

  const divFlashcard    = document.createElement("div");
    divFlashcard.setAttribute('id',"flashcard");
    divFlashcard.setAttribute('class', "card");
  const divFlashcardq   = document.createElement("div");
    divFlashcardq.setAttribute('id',"flashcardq");
  const divFlashcarda   = document.createElement("div");
      divFlashcarda.setAttribute('id',"flashcarda");

/// ADD text

  const qtext   = document.createElement("p");
  const q       = document.createTextNode(question);
  qtext.appendChild(q);

  const atext   = document.createElement("p");
  const a       = document.createTextNode(answer);
  atext.appendChild(a);

  // ADD BUTTONS

// show button
  const answerS = document.createElement("input");
    answerS.setAttribute('type', "submit");
    answerS.setAttribute('id', "answerS");
    answerS.setAttribute('onclick', "showAnwser()");
    answerS.setAttribute('value', "Show Answer");

// yes button
  const answerY = document.createElement("input");
    answerY.setAttribute('type', "submit");
    answerY.setAttribute('id', "answery");
    answerY.setAttribute('onclick', "buttonYes()");
    answerY.setAttribute('value', "Yes")
// no button
  const answerN = document.createElement("input");
    answerN.setAttribute('type', "submit");
    answerN.setAttribute('id', "answern");
    answerN.setAttribute('onclick', "buttonNo()");
    answerN.setAttribute('value', "No")

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

    document.getElementById("flashcardq" ).style.display = "none";
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


function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function setColor() {
    var element = document.getElementsByClassName("card");

    var r = getRandomInt(0, 255);
    var g = getRandomInt(0, 255);
    var b = getRandomInt(0, 255);
console.log(element.length);
    element.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
    document.getElementById("flashCard").innerHTML = r + " " + g + " " + b;

};
setColor();
