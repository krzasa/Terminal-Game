const prompt = require('prompt-sync')();

let user1 = ""
let user2 = ""

let userSym1 = ""
let userSym2 = ""
let turn = 0;
let digits = [1,2,3,4,5,6,7,8,9]

const userCall = () => {  // creating a function for asking the name of the players 
    
    user1 = prompt('What is your name Player 1? '); // create variable for player 1 from user prompt
    console.log(`Your name is ${user1}`);

    user2 = prompt('What is your name Player 2? ');  // create variable for player 2 prompt 
    console.log(`Your name is ${user2}`);

}

userCall() 


const randomizer = () => { // this is the function to determine who goes first
    turn = Math.floor(Math.random() * 2) ;
   
    }

const checkWinner = () => { 

    if (
        (topRow[0]=== "X" && topRow[1]=== "X" && topRow[2]=== "X")  // check for 3 in a row for first row
        ||
        (midRow[0]=== "X" && midRow[1]=== "X" && midRow[2]=== "X")  //  check for 3 in a row for 2nd row
        ||
        (bottomRow[0]=== "X" && bottomRow[1]=== "X" && bottomRow[2]=== "X")  // check for 3 in a row for 3rd row
        || 
        (topRow[0]=== "X" && midRow[0]=== "X" && bottomRow[0]=== "X")//check left column
        ||
        (topRow[1]=== "X" && midRow[1]=== "X" && bottomRow[1]=== "X")//check middle column
        ||
        (topRow[2]=== "X" && midRow[2]=== "X" && bottomRow[2]=== "X")//check right column
        ||
        (bottomRow[0]=== "X" && midRow[1]=== "X" && topRow[2]=== "X")// check diag left to right from the bottom
        ||
        (topRow[0]=== "X" && midRow[1]=== "X" && bottomRow[2]=== "X")//check diag left to right from the top
        ) { 
            console.log("X is the winner. "); 
    } else if (
        (topRow[0]=== "O" && topRow[1]=== "O" && topRow[2]=== "O")  // check for 3 in a row for first row
        ||
        (midRow[0]=== "O" && midRow[1]=== "O" && midRow[2]=== "O")  //  check for 3 in a row for 2nd row
        ||
        (bottomRow[0]=== "O" && bottomRow[1]=== "O" && bottomRow[2]=== "O")  // check for 3 in a row for 3rd row
        || 
        (topRow[0]=== "O" && midRow[0]=== "O" && bottomRow[0]=== "O")//check left column
        ||
        (topRow[1]=== "O" && midRow[1]=== "O" && bottomRow[1]=== "O")//check middle column
        ||
        (topRow[2]=== "O" && midRow[2]=== "O" && bottomRow[2]=== "O")//check right column
        ||
        (bottomRow[0]=== "O" && midRow[1]=== "O" && topRow[2]=== "O")// check diag left to right from the bottom
        ||
        (topRow[0]=== "O" && midRow[1]=== "O" && bottomRow[2]=== "O")//check diag left to right from the top
        ) {
            console.log("O is the winner. ");
    }

}    


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

userSymCall()

const topRow = [1, 2, 3]
const midRow = [4, 5, 6]
const bottomRow = [7, 8, 9]

// This shows the gameboard
const showGameBoard = () => {
    console.log(...topRow); 
    console.log(...midRow);
    console.log(...bottomRow);
}

showGameBoard()

// This is the feature for picking the square
randomizer()
const selectedNumbers = []

const pickSquare = () => {
   
    let choice 
    
    if (turn === 0){
        while (!selectedNumbers.includes(choice) && digits.includes(choice))  //While thhe users choice is not in the selectedNumbers array
         {
           return choice = prompt("Player 1, please pick an unused square by entering a number from 1 to 9: ")
            //User will be asked for a position
        }
        

        if (choice >= 1 && choice <=3){
            topRow[choice - 1] = 'X'
            
        }
        if (choice >= 4 && choice <= 6){
            midRow[choice - 4] = 'X'
        }
        if (choice >= 7 && choice <= 9){
            bottomRow[choice - 7] = 'X'
        }
        
        selectedNumbers.push(choice)
        showGameBoard()
        checkWinner()
        turn = 1;
    }
    else if (turn === 1){
        while (!selectedNumbers.includes(choice)  && digits.includes(choice))  //While thhe users choice is not in the selectedNumbers array
         {
             return choice = prompt("Player 2, please pick an unused square by entering a number from 1 to 9: ")
            //User will be asked for a position
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
        
        selectedNumbers.push(choice)
        
        showGameBoard()
        checkWinner()
        turn = 0;
    }
    
}

pickSquare()

const playGame = () => {   // this is the loop for the player to take turns 
 while( selectedNumbers.length < 9){
    pickSquare()
    
 }   
}

playGame()

// const topRow = [1, 2, 3]
// const midRow = [4, 5, 6]
// const bottomRow = [7, 8, 9]

