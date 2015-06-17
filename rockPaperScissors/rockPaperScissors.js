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


var rockPaperScissors = function (rounds) {
    // TODO: your solution here
    rounds = rounds || 3;
    var result = [];
    var rpsArray = ['paper', 'rock', 'scissors'];
    var recurse = function(combination) {
        if (combination.length === rounds) {
            result.push(combination);
            return;
        }

        for(var i = 0; i < rpsArray.length; i++) {
            recurse(combination.concat(rpsArray[i]));
        }
    console.log(combination);
    };

    recurse([]);


};
// rockPaperScissors(4)
rockPaperScissors(4);
