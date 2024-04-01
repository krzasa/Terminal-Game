const prompt = require('prompt-sync')();

let user1 = ""
let user2 = ""

let userSym1 = ""
let userSym2 = ""

const userCall = () => {  // creating a function for asking the name of the players 
    
    user1 = prompt('What is your name Player 1? '); // create variable for player 1 from user prompt
    console.log(`Your name is ${user1}`);

    user2 = prompt('What is your name Player 2? ');  // create variable for player 2 prompt 
    console.log(`Your name is ${user2}`);

}

// userCall() 


const userSymCall = () => { // this is the function to let users pick their symbols 

    userSym1 = prompt(`What is your Symbol ${user1}? X or O? `);

    if (userSym1 === "X" || userSym1 === "x" ) {  // checks to see if user inputed lower or uppercase X
        userSym1 = "X"
        userSym2 = "O"
        console.log(`${user1} is ${userSym1} and ${user2} is ${userSym2}` )
    } else if ( userSym1 === "O" ||  userSym1 === "o" ) {  // checks to see if user inputed lower or uppercase O
        userSym1 = "O"
        userSym2 = "X"
        console.log(`${user1} is ${userSym1} and ${user2} is ${userSym2}`  )
    } else {
        console.log(" You did not put in a valid response");
    }
}

// userSymCall()

const topRow = [1, 2, 3]
const midRow = [4, 5, 6]
const bottomRow = [7, 8, 9]

// This shows the gameboard
const showGameBoard = () => {
    console.log(...topRow);
    console.log(...midRow);
    console.log(...bottomRow);
}

console.clear()
showGameBoard()
const takenTurns = []
const stringDigits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
let isWinner = false;
let Winner;
let turn = 0;

// This is the feature for picking the square
const pickSquare = () => {
    if (turn === 0){
        let choice; 
        while(!stringDigits.includes(choice)){
            if (choice === 'exit') {
                console.clear()
                process.exit()
            }
            choice = prompt("X, please pick an unused square by entering a number from 1 to 9: ")
        }
        while(takenTurns.includes(choice)){
            choice = prompt("Sorry X, that number has already been taken, please choose another number from 1 to 9: ")
        }
        if (choice >= 1 && choice <=3){
            topRow[choice - 1] = 'X'
        } else if (choice >= 4 && choice <= 6){
            midRow[choice - 4] = 'X'
        } else {
            bottomRow[choice - 7] = 'X'
        } 
        console.clear()
        showGameBoard()
        checkWinner()
        turn = 1;
        takenTurns.push(choice)
    } else if (turn === 1){
        let choice; 
        while(!stringDigits.includes(choice)){
            if (choice === 'exit') {
                console.clear()
                process.exit()
            }
            choice = prompt("0, please pick an unused square by entering a number from 1 to 9: ")
        }
        while(takenTurns.includes(choice)){
            choice = prompt("Sorry 0, that number has already been taken, please choose another number from 1 to 9: ")
        }
        if (choice >= 1 && choice <=3){
            topRow[choice - 1] = 'O'
        }
        if (choice >= 4 && choice <= 6){
            midRow[choice - 4] = 'O'
        }
        if (choice >= 7 && choice <= 9){
            bottomRow[choice - 7] = 'O'
        }
        console.clear()
        showGameBoard()
        checkWinner()
        turn = 0;
        takenTurns.push(choice)
    }
}

const checkWinner = () => {
    if (
        topRow.every(x => x === 'X') 
        || midRow.every(x => x === 'X') 
        || bottomRow.every(x => x === 'X')
        || (topRow[0] === 'X' && midRow[0] === 'X' && bottomRow[0] === 'X') // left column
        || (topRow[1] === 'X' && midRow[1] === 'X' && bottomRow[1] === 'X') // middle column
        || (topRow[2] === 'X' && midRow[2] === 'X' && bottomRow[2] === 'X') // right column
        || (topRow[0] === 'X' && midRow[1] === 'X' && bottomRow[2] === 'X') // diagonal
        || (topRow[2] === 'X' && midRow[1] === 'X' && bottomRow[0] === 'X') // diagonal
    ){
        console.log('X is the winner');
        process.exit()
    } else if (
        topRow.every(x => x === 'O') 
        || midRow.every(x => x === 'O') 
        || bottomRow.every(x => x === 'O')
        || (topRow[0] === 'O' && midRow[0] === 'O' && bottomRow[0] === 'O') // left column
        || (topRow[1] === 'O' && midRow[1] === 'O' && bottomRow[1] === 'O') // middle column
        || (topRow[2] === 'O' && midRow[2] === 'O' && bottomRow[2] === 'O') // right column
        || (topRow[0] === 'O' && midRow[1] === 'O' && bottomRow[2] === 'O') // diagonal
        || (topRow[2] === 'O' && midRow[1] === 'O' && bottomRow[0] === 'O') // diagonal
    ){
        console.log('O is the winner');
        process.exit()
    }
}
// pickSquare()

const playGame = () => {
    while (isWinner === false && takenTurns.length < 9){
        pickSquare()
    }
    console.log("Looks like there was no winner.");
}

playGame()