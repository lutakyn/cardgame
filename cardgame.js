function CardGame(decks, players) {
  // get a random number
    const match = () => Math.random() <= (1 / 4 + 1 / 13 - 1 / 52);
  // track scores
    const scores = new Array(players).fill(0);
    var stack = 1, best = 0, cards = decks * 52 - 1;
 // There is a 1 in 4 odds that suits will match and 1 in 13 that the values will match. 
  //The odds of a match is the sum of (1 / 13 + 1 / 4)
    function play() {
        cards --;
        if (match()) {
            best = Math.max(scores[Math.random() * players | 0] += stack + 1, best);
            stack = 0;
            cards --;
        }
        stack ++;
    }    
    return Object.freeze({
        play,
        get gameOver() { return cards <= 0 },
        bestScore: () => { 
            1 === scores.reduce((c, pts)=> c + (pts === best ? 1 : 0), 0)? best: "Draw"; 
        },
    });
}
const game = CardGame(2, 2); 
while (!game.gameOver) { game.play() }
const result = game.bestScore();
