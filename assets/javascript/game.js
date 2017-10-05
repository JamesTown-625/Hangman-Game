
//	GLOBAL VARIABLES
// =========================================================================================================
// 	array with words to be guessed as well as other variables to be used in game.  

	var gameWord = ["drpepper", "rootbeer", "coke", "creamsoda", "gingerale", "mountaindew"];
	var compWord = "";
	var lettersinWord = [];
	var numBlanks = 0;
	var blanks = []; // d_ _ _ _ _ _ _
	var wrongLetters = [];

//	Game Counters

	var guessesLeft = 10;
	var wins = 0;
	var losses = 0;

// FUNCTIONS (Reusable blocks of code that I will call upon when needed)
// =========================================================================================================

function startGame () {
	compWord = gameWord[Math.floor(Math.random() * gameWord.length)]; // randomly generate word from gameWord array.
	lettersinWord = compWord.split(""); // .split method splits a string into an array of substrings.
	numBlanks = lettersinWord.length; // specifies number of letters that was randomly generated above, # of blanks required for that word.
	
	// RESET key variables to run each successive round of the game. 
	guessesLeft = 10;
	wrongLetters = [];
	blanks = [];

	//	Populate blanks and Successes with the right number of blanks.
	for (var i=0; i < numBlanks; i++) {
		blanks.push("_"); // .push method adds a new item to an Array.
	}

	//	Change HTML to reflect round conditions.
	

	// Testing / Debugging
	console.log(compWord);
	console.log(lettersinWord);
	console.log(numBlanks);
	console.log(blanks);
}
// MAIN PROCESS 
// =========================================================================================================

startGame();

// //	userGuess variable on keyup event. 
// 	document.onkeyup = function() {
// 		var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
// 			console.log(userGuess);
		

		//	letters already guessed counter, Wins counter, Loses counter, and Remaining Guesses counter.
	// var html = "<h1>Hangman Game!</h1>" +
	// "<h2>Type any key to begin guessing the word! Choose wisely, you only have" + guessesRemaining +  "guesses.</h2>" +
	// 	"<p> Wins: " + wins + "</p>" +
	// 	"<p> Loses: " + losses + "</p>" +
	// 	"<p> Letters already guessed: " + alreadyGuessed + "</p>" +
	// 	"<p> You have " + guessesRemaining + " remaining!</p>";

	// 		document.querySelector('#hangmanGame').innerHTML = html;
	
	// 	}



// 	number of userguesses counter that counts down as userguesses goes up



//	pop up picture when you win or lose

// 

