function flipCard() {
	document.querySelector('.card').classList.toggle('flipped');
}
document.querySelector('.card').addEventListener('click', flipCard);
let currentQuestionIndex = 0;
let questionAnswer = [
	{
		question: 'Who directed The Last Jedi?',
		answer: 'Rian Johnson',
		hint: 'He directed Looper!',
	},
	{
		question: 'Who was the Padawan of Anakin Skywalker?',
		answer: 'Ashsoka Tano',
		hint: 'she was one of the heroes in Star Wars Rebels!',
	},
	{
		question: 'What planet was Han Solo born on?',
		answer: 'Corelia',
		hint:
			'Think of the first planet that was feautured in Solo, A Star Wars Story',
	},
	{
		question: 'What species does Master Yoda belong to?',
		answer: 'George Lucas and Disney have not decided yet!',
		hint: 'Do you REALLY know?',
	},
	{
		question:
			'What was the last name of Luke Skywalker in the original draft of A New Hope?',
		answer: 'Starkiller',
		hint:
			'The Force Awakens direcotr, JJ Abrams, named their planet destroying weapon after Lukes original last name',
	},
	{
		question:
			'Who was the main adversary of Obi-Wan-Kenobi throughout the majority of his life?',
		answer: 'Darth-Maul',
		hint: 'Duel of the Fates!',
	},
	{
		question:
			'What kind of ship did the Rebel hero, Luke Skywalker fly when he destroyed the first death-star?',
		answer: 'X-Wing',
		hint: 'come on, everyone knows this.',
	},
	{
		question:
			'What was written in the script to prevent leaks for the big twist at the end of Empire Strikes back?',
		answer: 'Obi-Wan killed your father',
		hint: 'Obi-Wan never told you what happened to your father...',
	},
	{
		question: 'What was the birth name of Kylo Ren?',
		answer: 'Ben Solo',
		hint:
			'his parents are the other two war heroes from the original trilogy, named him after a powerful Jedi who helped them in A New Hope!',
	},
	{
		question: 'Who was the Dark Lord that trained Emperor Palpatine?',
		answer: 'Darth Plagueis The Wise',
		hint: 'think opera scene in Revenge of The Sith',
	},
];
console.log(questionAnswer);

const frontOfCard = document.getElementById('frontOfCard');
const backOfCard = document.getElementById('backOfCard');
function getAQuestion() {
	frontOfCard.innerText = questionAnswer[currentQuestionIndex].question;
}

getAQuestion();

// shows hint
const useTheForce = document.querySelector('.hintButton')
useTheForce.addEventListener('click', getAHint)
function getAHint(event) {
   frontOfCard.innerHTML += `<p>${questionAnswer[currentQuestionIndex].hint}</p>`;
   event.target.disabled = true;
}


//shows answer

function getAnAnswer() {
    backOfCard.innerText = questionAnswer[currentQuestionIndex].answer;
}
getAnAnswer()

// shows other peoples answers
function seeCommonAnswers() {}

const moveAhead = document.querySelector('.advanceButton')
moveAhead.addEventListener('click', advanceForward)
function advanceForward() {
    currentQuestionIndex ++ 
    getAQuestion()
    getAnAnswer()
    useTheForce.disabled = false
}

function restartGame() {}

const resetButton = document.querySelector('.restart_game');
resetButton.addEventListener('click', resetTheGame);
function resetTheGame() {
	currentPlayer = 'Jedi';
}
