let currentQuestionIndex = 0;
let questionAnswer = [
  {
    question: 'Who directed The Last Jedi?',
    answer:
      'Rian Johnson directed The Last Jedi, it is widely accepted across almost all of pop culture that he made the most divisive Star-Wars film!',
    hint: 'He directed Looper!',
  },
  {
    question: 'Who was the Padawan of Anakin Skywalker?',
    answer:
      'Ashsoka Tano was his padawan, the dual lightsaber, Torguta, FORMER Jedi!',
    hint: 'she was one of the heroes in Star Wars Rebels!',
  },
  {
    question: 'What planet was Han Solo born on?',
    answer:
      'Corelia is where he was born and raised, criminal underwold, and Emperial ship building planet!',
    hint:
      'Think of the first planet that was feautured in Solo, A Star Wars Story',
  },
  {
    question: 'What species does Master Yoda belong to?',
    answer:
      'George Lucas and Disney have not decided yet, though it is widely speculated that every member of his species is force-sensitve',
    hint: 'Do you REALLY know?',
  },
  {
    question:
      'What was the last name of Luke Skywalker in the original draft of A New Hope?',
    answer:
      'his original last name was Starkiller, it is assumed that he changed the name to sound less aggressive, do you know the original name of Star-Wars, episode 6?',
    hint:
      'The Force Awakens direcotr, JJ Abrams, named their planet destroying weapon after Lukes original last name',
  },
  {
    question:
      'Who was the main adversary of Obi-Wan-Kenobi throughout the majority of his life?',
    answer:
      'Darth-Maul is his lifelong rival, ruler of Mandalore,wielder of the dark-saber, and the once apprentice to Palpatine!',
    hint: 'Duel of the Fates!',
  },
  {
    question:
      'What kind of ship did the Rebel hero, Luke Skywalker fly when he destroyed the first death-star?',
    answer:
      'The X-Wing, one of the most popular air crafts in all of science fiction! ',
    hint: 'come on, everyone knows this.',
  },
  {
    question:
      'What was written in the script to prevent leaks for the big twist at the end of Empire Strikes back?',
    answer:
      'Obi-Wan killed your father, the only people who knew about this line outside of the production team were Mark Hamill and James Earl Jones, to prevent leaks!',
    hint: 'Obi-Wan never told you what happened to your father...',
  },
  {
    question: 'What was the birth name of Kylo Ren?',
    answer:
      'Ben Solo, widely known across the galaxy as Kylo Ren, this character struggled with the dark side because his parents were Rebel heroes, and his grandpa was Vader.',
    hint:
      'his parents are the other two war heroes from the original trilogy, named him after a powerful Jedi who helped them in A New Hope!',
  },
  {
    question: 'Who was the Dark Lord that trained Emperor Palpatine?',
    answer:
      'Darth Plagueis The Wise, he died at the hands of his apprentice while searching for the key to eternal life',
    hint: 'think opera scene in Revenge of The Sith',
  },
];

document.querySelector('.card').addEventListener('click', flipCard);
function flipCard() {
  document.querySelector('.card').classList.toggle('flipped');
}

const frontOfCard = document.getElementById('frontOfCard');
const backOfCard = document.getElementById('backOfCard');
function getAQuestion() {
	// Hou comment: when the player is on the last question, this check prevents the user from trying to access the next question, which does not exist
	if(currentQuestionIndex < questionAnswer.length) {
  	frontOfCard.innerText = questionAnswer[currentQuestionIndex].question;
	}
}
getAQuestion();

// shows hint
const useTheForce = document.querySelector('.hintButton');
useTheForce.addEventListener('click', getAHint);
function getAHint(event) {
	// Hou comment: when the player is on the last question, this check prevents the user from trying to access the next question, which does not exist
	if(currentQuestionIndex < questionAnswer.length) {
		frontOfCard.innerHTML += `<p>${questionAnswer[currentQuestionIndex].hint}</p>`;
		event.target.disabled = true;
	}
}

//shows answer
function getAnAnswer() {
	// Hou comment: when the player is on the last question, this check prevents the user from trying to access the next question, which does not exist
	if(currentQuestionIndex < questionAnswer.length) {
  	backOfCard.innerText = questionAnswer[currentQuestionIndex].answer;
	}
}
getAnAnswer();

// shows other peoples answers
const moveAhead = document.querySelector('.advanceButton');
moveAhead.addEventListener('click', advanceForward);
function advanceForward() {
  currentQuestionIndex++;
  getAQuestion();
  getAnAnswer();
  flipCard();
  useTheForce.disabled = false;
}

const resetButton = document.querySelector('.restart-button');
resetButton.addEventListener('click', resetTheGame);
function resetTheGame() {
  currentQuestionIndex = 0;
  getAQuestion();
  getAnAnswer();
}
