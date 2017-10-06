
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
	for (var i=0; i<numBlanks; i++) {
		blanks.push("_"); // .push method adds a new item to an Array.
	}

	//	Change HTML to reflect round conditions.
	document.getElementById("wordToGuess").innerHTML = blanks.join("  ");
	document.getElementById("numGuesses").innerHTML = guessesLeft;
	document.getElementById("winCounter").innerHTML = winCount;
	document.getElementById("lossCounter").innerHTML = lossCount;
	document.getElementById("youWon").innerHTML = " ";
	document.getElementById("wrongGuesses").innerHTML = " ";
	// Testing / Debugging
	console.log(compWord);
	console.log(lettersinWord);
	console.log(numBlanks);
	console.log(blanks);
}

function checkLetters(letter) {
	//Check if letter exists in code at all

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
		guessesLeft--;
	}

	// Testing and Debugging
	document.getElementById("wordToGuess").innerHTML = blanks.join(" ");

}

function roundComplete() {
	console.log("Win Count: " + winCount + " | Loss Count: " + lossCount + " | Guesses Left: " + numGuesses);

	//Update the HTML to reflect the most recent information
	document.getElementById("numGuesses").innerHTML = guessesLeft;
	// document.getElementById("wordToGuess").innerHTML = blanks.join(" ");
	document.getElementById("wrongGuesses").innerHTML = wrongLetters.join("");


	//Check if the User won.
	if (lettersinWord.toString() == blanks.toString()) {
		console.log("run dangit")
		winCount++;
		
		document.getElementById("wordToGuess").innerHTML = blanks.join(" ");
		
		//Update the win Counner in the HTML
		document.getElementById("winCounter").innerHTML = winCount;

		setTimeout(startGame, 1500);
		document.getElementById("youWon").innerHTML = "YOU WON HOMIE!";
	}

	else if (guessesLeft == 0) {
		lossCount++;
		document.getElementById("wordToGuess").innerHTML = blanks;
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








//	pop up picture when you win or lose

// 

