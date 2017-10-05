
//	GLOBAL VARIABLES
// =========================================================================================================
// 	array with words to be guessed as well as other variables to be used in game.  

	var gameWord = ["drpepper", "rootbeer", "coke", "creamsoda", "gingerale", "mountaindew"];
	var compWord = ""; // blank array to hold the word
	var lettersinWord = []; //
	var numBlanks = 0; 
	var blanks = []; // holds blanks and successful guesses
	var wrongLetters = [];

//	Game Counters

	var guessesLeft = 10;
	var winCount = 0;
	var lossCount = 0;

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
	document.getElementById("wordToGuess").innerHTML = blanks.join("  ");
	document.getElementById("numGuesses").innerHTML = guessesLeft;
	document.getElementById("winCounter").innerHTML = winCount;
	document.getElementById("lossCounter").innerHTML = lossCount;
	// Testing / Debugging
	console.log(compWord);
	console.log(lettersinWord);
	console.log(numBlanks);
	console.log(blanks);
}

function checkLetters(letter) {
	//Check if letter if letter exists in code at all

	var isLetterInWord = false;
	for (var i=0; i<numBlanks; i++) {
		if(compWord[i] == letter) {
			isLetterInWord = true;

		}
	}

	// Check where in the word the Letter exists, then populate the blanks array.
	if(isLetterInWord) {
		for (var i=0; i<numBlanks; i++) {
			if(compWord[i] == letter) {
				blanks[i] = letter;
			}
		}
	}
	//letter wasn't found
	else {
		wrongLetters.push(letter);
		guessesLeft--
	}

	// Testing and Debugging
	console.log(blanks);

}

function roundComplete() {
	console.log("Win Count: " + winCount + " | Loss Count: " + " | Guesses Left: " + numGuesses);

	//Update the HTML to reflect the most recent information
	document.getElementById("numGuesses").innerHTML = guessesLeft;
	document.getElementById("wordToGuess").innerHTML = blanks.join(" ");
	document.getElementById("wrongGuesses").innerHTML = wrongLetters.join(" ");


	//Check if the User won.
	if (lettersinWord.toString() == blanks.toString()) {
		winCount++;
		alert("You Won!");

		//Update the win Counter in the HTML
		document.getElementById("winCounter").innerHTML = winCount;


		startGame();
	}

	else if (guessesLeft == 0) {
		lossCount++;
		alert("You Lost!");

		//Update the HTML
		document.getElementById("lossCounter").innerHTML = lossCount;

		startGame();
	}
}


// MAIN PROCESS 
// =========================================================================================================

startGame(); // Have to call this in order for the startGame function to work.

// Register Key Clicks
document.onkeyup = function(event) {
	var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
	checkLetters(letterGuessed);
	roundComplete();

	//Testing and Debugging
	console.log(letterGuessed);

} 



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

