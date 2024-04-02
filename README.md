# Tic Tac Toe

1. First we get users' names with the prompt functions.

```
const userCall = () => {    // creating a function for asking the name of the players 
 user1 = prompt('What is your name Player 1? ');          // create variable for player 1 from user prompt
console.log(`Your name is ${user1}`);


  user2 = prompt('What is your name Player 2? ');  // create variable for player 2 prompt 
console.log(`Your name is ${user2}`);

}
```

2. Then we get users to pick 'X' or 'O'.

```
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
```

3. We set up the symbol picking feature to go off of what the first user picks. 

We set up a game board with 3 arrays for 3 rows of squares to play tic tac.
 
 Each spot on the board is represented by a number.

 We started a pick square function for player 1 to make his selection on the board. we used 3 conditional statements to determine where the selection will be placed.

 We set up the player turn loop to have the game run, each player is asked to pick a spot on the board and place their symbol on the board.

* a dd a randomizer to figure out who who goes first *

3. We added a randomizer to randomly decide whether 'X' or 'O' goes first.

```
const randomizer = () => { // this is the function to determine who goes first
    turn = Math.floor(Math.random() * 2) ;
   
    }

```

4. We added a function to check if there was a winner and which player it was after each key entry. 

```
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
```