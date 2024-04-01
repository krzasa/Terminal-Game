const prompt = require('prompt-sync')();

let user1 = ""
let user2 = ""

const userCall = () => {    // creating a function for asking the name of the players 
 user1 = prompt('What is your name Player 1? ');          // create variable for player 1 from user prompt
console.log(`Your name is ${user1}`);


  user2 = prompt('What is your name Player 2? ');  // create variable for player 2 prompt 
console.log(`Your name is ${user2}`);

}

userCall()
 
let userSym1 = ""
let userSym2 = ""


const userSymCall = () => {                     // this is the function to let users pick their symbols 

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

// ---
// ---
// ---

// x--
// -o-
// --x

