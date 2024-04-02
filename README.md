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

3. We added a randomizer to randomly decide whether 'X' or 'O' goes first.

```
const randomizer = () => { // this is the function to determine who goes first
    turn = Math.floor(Math.random() * 2) ;
   
    }

```

3. We set up the symbol picking feature to go off of what the first user picks. 

We set up a game board with 3 arrays for 3 rows of squares to play tic tac.
 
 Each spot on the board is represented by a number.

 We started a pick square function for player 1 to make his selection on the board. we used 3 conditional statements to determine where the selection will be placed.

 We set up the player turn loop to have the game run, each player is asked to pick a spot on the board and place their symbol on the board.

* a dd a randomizer to figure out who who goes first *