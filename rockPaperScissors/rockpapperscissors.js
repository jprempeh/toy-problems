var throws = ['rock', 'paper', 'scissors'];
var rockPaperScissors = function (round) {
	var solutions = [];
	var combination = [];

		for(var i = 0; i < throws.length; i++) {
			for(var j = 0; j < throws.length; j++) {
				for(var k = 0; k < throws.length; k++) {
					combination = [throws[i], throws[j], throws[k]];
					solutions.push(combination);
				}
			}
		}
		console.log(solutions);
	};

rockPaperScissors(3);

/*
 * Write a function that generates every sequence of throws a single
 * player could throw over a three-round game of rock-paper-scissors.
 *
 * Your output should look something like:
 *   [["rock", "rock", "rock"],
 *    ["rock", "rock", "paper"],
 *    ["rock", "rock", "scissors"],
 *    ["rock", "paper", "rock"],
 ...etc...
 ]
 *
 * Extra credit:
 *   - Make your function return answers for any number of rounds.
 * Example:
 * rockPaperScissors(5); // => [['rock', 'rock', 'rock', 'rock', 'rock'], etc...]
 *
 */