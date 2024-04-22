let responses = [
    "Yes - definitely.",
    "It is decidedly so.",
    "Without a doubt.",
    "Reply hazy, try again.",
    "Ask again later.",
    "Better not tell you now",
    "My sources say no.",
    "Outlook not so good.",
    "Very doubtful."
  ];

console.log(responses[1]); 
let question = "Will it rain tomorrow?";
let randomIndex = Math.floor(Math.random() * responses.length);
let response = responses[randomIndex];

console.log(`Question: ${question}`);
console.log(`Magic 8 Ball: ${response}`);
/*///////////////////////////////////////////////////////////////////////////////////////////////////////////////*/
/*///////////////////////////////////////////////////////////////////////////////////////////////////////////////*/
let player = [0, 1, 2];
let myQuestion1 = "It's a tie";
let myQuestion2 = "The player won!";
let myQuestion3 = "The computer won!";
let randomOptionIndex = Math.floor(Math.random() * player.length);
let playerChoice = player[randomOptionIndex];
let computerChoiceIndex = Math.floor(Math.random() * player.length);
let computerChoice = player[computerChoiceIndex];

console.log(`Phrase: ${myQuestion1}`);

if (playerChoice === computerChoice) {
    console.log("It's a tie");
} else if (
    (playerChoice === 0 && computerChoice === 2) || (playerChoice === 1 && computerChoice === 0) || (playerChoice === 2 && computerChoice === 1)
) {
    console.log(`Player picked: ${playerChoice}, Computer picked: ${computerChoice}`);
    console.log(`Phrase: ${myQuestion2}`);
} else {
    console.log(`Player picked: ${playerChoice}, Computer picked: ${computerChoice}`);
    console.log(`Phrase: ${myQuestion3}`);
}



// Write code below 💖

/*  let  aqi = 151;

if (aqi < 50 ) {
  console.log("good");
}
else if (aqi > 51 && aqi < 100) {
  console.log("moderate");
}
else if (aqi > 101 || aqi < 200) {
  console.log("unhealthy");
}
else if (aqi > 201 && aqi < 300) {
  console.log("hazardous");
}  */
/*///////////////////////////////////////////////////////////////////////////////////////////////////////////////*/
/*///////////////////////////////////////////////////////////////////////////////////////////////////////////////*/


let randomNumber = Math.floor(Math.random() * 10);

while (randomNumber != 7) {
  console.log("Duck 🦆");
  randomNumber = Math.floor(Math.random() * 10);
}

console.log("Goose! 🦢");
























