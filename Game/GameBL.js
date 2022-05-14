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
    let countOne = 0;
    let countTwo = 0;
    let playerOneposition = 0;
    let playerTwoPosition = 0;

    console.log(`\nInitial position of Player 1 is : ${playerOneposition}`);
    console.log(`Initial position of Player 2 is : ${playerTwoPosition}\n`);

    let isPlayerOneTurn = 1;

    while (playerOneposition < winningPosition && playerTwoPosition < winningPosition) {

        switch (isPlayerOneTurn) {
            case 1:
                let numberOnDie = RandomDieValue();
                console.log(`\n------------------------------------------\n`);
                console.log(`Player 1 :-> Number on Die is : ${numberOnDie}\n`);
                let option = RandomOption();
                countOne++;
                switch (option) {
                    case ladder:
                        console.log(`The Option is -- ${ladder} -- Ladder\n`);
                        playerOneposition += numberOnDie;
                        if (playerOneposition > winningPosition) {
                            console.log(`Current position is moving above ${winningPosition}... Please roll the die again !!!!!\n`);
                            playerOneposition -= numberOnDie;
                        }
                        break;
                    case snake:
                        console.log(`The Option is -- ${snake} -- Snake\n`);
                        playerOneposition -= numberOnDie;
                        if (playerOneposition < 0) {
                            playerOneposition = 0
                        }
                        break;
                    default:
                        console.log(`The Option is -- ${no_play} -- that means  No Play \n`);
                        break;
                }
                console.log(`Now the player position is : ${playerOneposition}\n`);
                if (playerOneposition == winningPosition) {
                    console.log(`Player One Rolled ${countOne} time for winning the game\n`);
                    console.log(`\n*******          Player One Won the Game        *******\n`);
                } else {
                    isPlayerOneTurn = 0;
                }
                break;
            case 0:
                let numberOnDie2 = RandomDieValue();
                console.log(`\n------------------------------------------\n`);
                console.log(`Player 2 :-> Number on Die is : ${numberOnDie2}\n`);
                let option2 = RandomOption();
                countTwo++;
                switch (option2) {
                    case ladder:
                        console.log(`The Option is -- ${ladder} -- Ladder\n`);
                        playerTwoPosition += numberOnDie2;
                        if (playerTwoPosition > winningPosition) {
                            console.log(`Current position is moving above ${winningPosition}... Please roll the die again !!!!!\n`);
                            playerTwoPosition -= numberOnDie2;
                        }
                        break;
                    case snake:
                        console.log(`The Option is -- ${snake} -- Snake\n`);
                        playerTwoPosition -= numberOnDie2;
                        if (playerTwoPosition < 0) {
                            playerTwoPosition = 0
                        }
                        break;
                    default:
                        console.log(`The Option is -- ${no_play} -- that means  No Play \n`);
                        break;
                }
                console.log(`Now the player position is : ${playerTwoPosition}\n`);
                if (playerTwoPosition == winningPosition) {
                    console.log(`Player Two Rolled ${countTwo} time for winning the game\n`);
                    console.log(`\n*******          Player Two Won the Game        *******\n`);
                } else {
                    isPlayerOneTurn = 1;
                }
        }
    }
}



module.exports = { gamePlay }