var yourScore = 0;
var bot = 0;

//best out of three modes
function game(choice) {

    if (bot < 2 && yourScore < 2) {
        computerChoice = ["Rock", "Paper", "Scissors"][Math.floor(Math.random() * 3)];
        document.getElementById("choices").innerHTML = "You chose " + choice + ", and the bot chose " + computerChoice + "."
        if (choice == computerChoice) {
            document.getElementById("currentScore").innerHTML = "It was a tie!";
        } else if (["RockScissors", "PaperRock", "ScissorsPaper"].indexOf(choice + computerChoice) != -1) {
            yourScore++;
            document.getElementById("currentScore").innerHTML = "You won!";
            document.getElementById("yourScore").innerHTML = "Your score: " + yourScore.toString();
        } else {
            bot++;
            document.getElementById("currentScore").innerHTML = "The bot won!";
            document.getElementById("bot").innerHTML = "Bot: " + bot.toString();
        }
    }
}