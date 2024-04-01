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
    console.log(topRow);
    console.log(midRow);
    console.log(bottomRow);
}

showGameBoard()

// This is the feature for picking the square
const pickSquare = () => {
    let turn = 0;
    let choice 
    const takenTurns = []
    if (turn === 0){
        choice = prompt("Player 1, please pick an unused square by entering a number from 1 to 9: ")
        if (choice >= 1 && choice <=3){
            topRow[choice - 1] = 'X'
        }
        if (choice >= 4 && choice <= 6){
            midRow[choice - 4] = 'X'
        }
        if (choice >= 7 && choice <= 9){
            bottomRow[choice - 7] = 'X'
        }
        turn = 1;
        showGameBoard()
    }
    if (turn === 1){
        choice = prompt("Player 2, please pick an unused square by entering a number from 1 to 9: ")
        if (choice >= 1 && choice <=3){
            topRow[choice - 1] = 'O'
        }
        if (choice >= 4 && choice <= 6){
            midRow[choice - 4] = 'O'
        }
        if (choice >= 7 && choice <= 9){
            bottomRow[choice - 7] = 'O'
        }
        turn = 0;
        showGameBoard()
    }
}

// pickSquare()

const playGame = () => {
 for(let i = 0; i < 9; i++){
    pickSquare()
 }   
}

playGame()