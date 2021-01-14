function writeCards(nameArr, event) {
    let thankYouMessage = [];
    for (let i = 0; i < nameArr.length; i++) {
    thankYouMessage.push( `Thank you, ${nameArr[i]}, for the wonderful ${event} gift!`)
    };
    return thankYouMessage
}

function countDown(num) {
    while (num > 0) {
        console.log(num);
        num -= 1;
    }
    console.log(num);
}

