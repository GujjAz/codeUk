let player = prompt("enter rock (r), paper (p) or scissors (s)")

if (player== "r"){
    alert ("You have chosen ROCK")
}
else if (player== "p"){
    alert ("You have chosen PAPER")
}
else {
    alert ("You have chosen SCISSORS")
}
    
let random = Math.floor(Math.random ()*3) + 1 /*random number between 1 and 3 */
let computer = 0
if (random = 1){
    alert("Computer has chosen ROCK");computer = "r"
}
else if (random = 2){
    alert ("Computer has chosen PAPER");computer = "p"
}
else {
    altert ("Computer has chosen scisssors");computer = "s";
}
if (player == computer){
    alert("Its a DRAW")
}
else if (player = "r"){
    if (computer == "s"){
        alert ("You win! ");
} 
else {
    alert ("You lose :(")
}
}
