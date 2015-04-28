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

var rockPaperScissors = function( rounds ) {
    // TODO: your solution here
    // Given that we have a number of rounds
    // and there are three possible solutions per round (rock paper scissors)
    // we should randomly decide what the throw is
    // and push it into an array then after doing that for the number of rounds
    // return a result
    var results,
        possibleResults,
        decideResult,
        play;

        results         = [];
        possibleResults = ["rock", "papers", "scissors"];
        decideResult    = function() {
            return possibleResults[Math.floor(Math.random() * possibleResults.length)];
        };
        play            = function( rounds ) {
            var counter = 0;
            while (counter < rounds){
                counter++;
                results.push( decideResult() );
            }
            console.log( results );
            return results;
        };
    play( rounds );
};
