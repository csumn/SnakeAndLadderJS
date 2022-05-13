
RandomDieValue = () => {
    let randomValue = Math.floor((Math.random() * 6) + 1);
    return randomValue;
}

gamePlay = () => {
    let playerPosition = 0;
    let numberOnDie;
    console.log(`\nInitial position of Player is : ${playerPosition}\n`);
    numberOnDie = RandomDieValue();
    console.log(`Number on Die is : ${numberOnDie}\n`);
}

module.exports = { gamePlay }