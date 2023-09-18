function isEven(value) {
    if (value === 0) {
        return true;
    } else if (value === 1) {
        return false;
    } else {
        return isEven(value > 0 ? value - 2 : value + 2);
    }
}

console.log(isEven(50), isEven(75), isEven(-1), isEven(-2));
