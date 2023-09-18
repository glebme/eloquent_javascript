function min (value1, value2) {
    if (value1 === value2) {
        return value1;
    }

    return value1 < value2 ? value1 : value2;
}

console.log(min(1,2), min(0, 0), min(1, -1))
