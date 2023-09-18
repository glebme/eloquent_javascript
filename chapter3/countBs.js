function countBs(value) {
    let count = 0;

    for (let i = 0; i < value.length; i++) {
        if (value[i] === 'B') {
            count++;
        }
    }

    return count;
}

console.log(countBs("Bumble Bees Buzzing Belatedly By A Bumbling Bear"));
