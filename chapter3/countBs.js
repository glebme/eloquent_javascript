function countChar(stringValue, charToCount) {
    let count = 0;

    for (let i = 0; i < stringValue.length; i++) {
        if (stringValue[i] === charToCount) {
            count++;
        }
    }

    return count;
}

function countBs(stringValue) {
    return countChar(stringValue, 'B')
}

console.log(countBs("Bumble Bees Buzzing Belatedly By A Bumbling Bear"));
