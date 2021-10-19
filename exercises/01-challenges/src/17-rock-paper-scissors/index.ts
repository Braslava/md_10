/**
 * Abigail and Benson are playing Rock, Paper, Scissors.
 * Each game is represented by an array of length 2, 
 * where the first element represents what Abigail played and the second element represents what Benson played.
 * Given a sequence of games, determine who wins the most number of matches and output the winners name. If they tie, output "Tie!".
 * R stands for Rock
 * P stands for Paper
 * S stands for Scissors
 */

function rockPaperScissors(games: string[][]) {
    const abigailWins: string[][] = [['R', 'S'], ['P', 'R'], ['S', 'P']];
    const bensonWins: string[][] = [['S', 'R'], ['R', 'P'], ['P', 'S']];
    let abigailScore: number = 0;
    let bensonScore: number = 0;

    games.forEach(game => {
        if (game[0] !== game[1]) {
            if ((game[0] === 'R' && game[1] === 'S') || (game[0] === 'P' && game[1] === 'R') || (game[0] === 'S' && game[1] === 'P')) {
                abigailScore++;
            }
            else {
                bensonScore++;
            }
        }
    });

    if (abigailScore > bensonScore) {
        return 'Abigail';
    }
    if (bensonScore > abigailScore) {
        return 'Benson';
    } else {
        return 'Tie!';
    }
}

/*  games.forEach(game => {
     if(abigailWins.includes(game)) {
          abigailScore++; 
     }
     if(bensonWins.includes(game)) {
          bensonScore++; 
     }
  });  
} */

export { rockPaperScissors };