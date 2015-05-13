/*

In England the currency is made up of pound, £, and pence, p, and there are eight coins in general circulation:

1p piece
2p piece
5p piece
10p piece
20p piece
50p piece
1 euro (100p)
2 euro (200p)

It is possible to make £2 in the following way:

1 * £1 + 1 * 50p + 2 * 20p + 1 * 5p + 1 * 2p + 3 * 1p
How many different ways can £2 be made using any number of coins?

example usage of `makeChange`:

// aka, there's only one way to make 1p. that's with a single 1p piece
makeChange(1) === 1
// aka, there's only two ways to make 2p. that's with two, 1p pieces or with a single 2p piece
makeChange(2) === 2
*/

var makeChange = function(total){

    var currency = [1, 2, 5, 10, 20, 50, 100, 200];

    var currentTotal,
        results;

    for (var i = 0; i < currency.length; i++) {
        // total was 2
        if (currency[i] > total) {
            break;
        } else if (currency[i] === total) {
            results.push(currency[i]);
        } else {
            // if the currency piece is less than the total, determine the maximum amount of that piece that you can use
            // to make it equal or close to the equal and push that value
            // by default, by starting with 1 pence, you can make one pence * by the total to equal the total
            if (currency[i] === 1) {
                results.push(total / currency[i]);
            } else if (currency[i] === 2) {
                results.push(total / currency[i]);
            }
        }
    }

    // it seems like you could take the maximum coin that you could use for the total, select one of those coins
    // and then recurse downward into the next denomination
    // you will need a recursive function
    // also it seems like upon taking the maximum coin, you could automatically calculate all the possible ways to
    // make that maximum coin using the coins below it
    // for example with (6) you have (1 5p + 1p) and 5p can be broken down into (2 2p +1 1p) or (5 1p)

    return results.length;


};


def countChange(money: Int, coins: List[Int]): Int = {
    def reduce(money: Int, coins: List[Int], accCounter: Int): Int = {
    if(money == 0) accCounter + 1
    else if(money < 0 || coins.isEmpty) accCounter
    else reduce(money - coins.head, coins, accCounter) + reduce(money, coins.tail, accCounter)
}

if(money <= 0 || coins.isEmpty) 0
else reduce(money, coins, 0)
}