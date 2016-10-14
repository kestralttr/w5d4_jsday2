// 3 towers (arrays)
// left tower starts with three discs
// discs have different sizes (1,2,3)
// a disc can only go on top of a larger disc
// game is over when all discs are on any tower except for the left one
// player can move one disc at a time


const readline = require('readline');

const reader = readline.createInterface({
  // it's okay if this part is magic; it just says that we want to
  // 1. output the prompt to the standard output (console)
  // 2. read input from the standard input (again, console)

  input: process.stdin,
  output: process.stdout
});

class Game {
  constructor() {
    this.stacks = [[3,2,1],[],[]];
  }

  promptMove() {
    console.log(this.stacks);
    reader.question("Enter stacks (from stack, to stack)", function (answer) {
        let from_stack = answer[0];
        let to_stack = answer[2];
        callback(from_stack, to_stack);
    });
    function callback(from_stack, to_stack) {
      console.log(from_stack);
      console.log(to_stack);
    }
  }

  isValidMove(from_stack_idx, to_stack_idx) {
    if (this.stacks[from_stack_idx][0] === undefined) {
      console.log("invalid move, try again");
      promptMove();
      return;
    }
    if (this.stacks[to_stack_idx][0] === undefined ) {
      move(from_stack_idx, to_stack_idx);
      return;
    }
    if (this.stacks[from_stack_idx][this.stacks[from_stack_idx].length-1] > this.stacks[to_stack_idx][this.stacks[to_stack_idx].length-1] ) {
      console.log("invalid move, try again");
      promptMove();
      return;
    }
    else {
      move(from_stack_idx, to_stack_idx);
    }
  }

}

let g = new Game();
g.promptMove();
