var isPalindrome = function (x) {
    if (x < 0) return false;

    let temp = x;
    let result = 0;

    while (temp > 0) {
        result = result * 10 + (temp % 10);
        temp = Math.floor(temp / 10);
    }

    return result === x;
}
