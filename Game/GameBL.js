let no_play = 0;
let ladder = 1;
let snake = 2;

RandomDieValue = () => {
    let randomValue = Math.floor((Math.random() * 6) + 1);
    return randomValue;
}

RandomOption = () => {
    let randomDieValue = Math.floor(Math.random() * 3);
    return randomDieValue;
}

gamePlay = () => {
    let playerPosition = 0;
    let numberOnDie;
    console.log(`\nInitial position of Player is : ${playerPosition}\n`);
    numberOnDie = RandomDieValue();
    console.log(`Number on Die is : ${numberOnDie}\n`);
    let option = RandomOption();
    console.log(`The Option is : ${option}\n`);

    switch (option) {
        case ladder:
            playerPosition += numberOnDie;
            break;
        case snake:
            playerPosition -= numberOnDie;
            if (playerPosition < 0) {
                playerPosition = 0
            }
            break;
        default:
            console.log(`That means -- ${no_play} : No Play \n`);
            break;
    }
    console.log(`Now the player position is : ${playerPosition}\n`);
}

module.exports = { gamePlay }