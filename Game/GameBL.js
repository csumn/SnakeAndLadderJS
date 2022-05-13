let no_play = 0;
let ladder = 1;
let snake = 2;
let winningPosition = 100;

RandomDieValue = () => {
    let randomValue = Math.floor((Math.random() * 6) + 1);
    return randomValue;
}

RandomOption = () => {
    let randomDieValue = Math.floor(Math.random() * 3);
    return randomDieValue;
}

gamePlay = () => {
    let count = 0;
    let playerPosition = 0;
    let numberOnDie;
    console.log(`\nInitial position of Player is : ${playerPosition}\n`);

    while (playerPosition < winningPosition) {
        numberOnDie = RandomDieValue();
        console.log(`\n------------------------------------------\n`);
        console.log(`Number on Die is : ${numberOnDie}\n`);
        let option = RandomOption();
        count++;
        switch (option) {
            case ladder:
                console.log(`The Option is -- ${ladder} -- Ladder\n`);
                playerPosition += numberOnDie;
                if (playerPosition > winningPosition) {
                    console.log(`Current position is moving above ${winningPosition}... Please roll the die again !!!!!\n`);
                    playerPosition -= numberOnDie;
                }
                break;
            case snake:
                console.log(`The Option is -- ${snake} -- Snake\n`);
                playerPosition -= numberOnDie;
                if (playerPosition < 0) {
                    playerPosition = 0
                }
                break;
            default:
                console.log(`The Option is -- ${no_play} -- that means  No Play \n`);
                break;
        }
        console.log(`Now the player position is : ${playerPosition}\n`);
    }
    console.log(`Player Rolled ${count} time for winning the game\n`);
    console.log(`\n*******          Player Won           *******\n`);
}

module.exports = { gamePlay }