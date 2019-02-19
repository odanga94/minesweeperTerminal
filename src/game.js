import {Board} from './board';
/* To play Minesweeper, we will 
create instances of MInesweeper Game
in the command line. 
For example:
In the command line, navigate to the lib directory
and run 'node'. Run '.load game.js' to load
the contents of this file. Then create a game instance and run the commands
like so:
let game = new Game(3, 3, 3);
game.playMove(0, 1);
game.playMove(1, 2);
When done run '.exit' */

class Game{
    constructor(numberOfRows, numberOfColumns, numberOfBombs){
        this._board = new Board(numberOfRows, numberOfColumns, numberOfBombs);
    }
    get board(){
        return this._board;
    }
    playMove(rowIndex, columnIndex){
        this._board.flipTile(rowIndex, columnIndex);
        if(this._board.playerBoard[rowIndex][columnIndex] === 'B'){
            console.log('Game Over!!!');
            this._board.printPlayerBoard();
        }else if(!this._board.hasSafeTiles()){
            console.log('You have won!!!');
        }else{
            console.log('Current board:');
            this._board.printPlayerBoard();
        }
    }
}