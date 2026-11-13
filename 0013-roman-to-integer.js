var romanToInt = function (s) {
    let total = 0;

    let romanIntNum = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };

    for (let i = 0; i < s.length; i++) {
        let current = romanIntNum[s[i]];

        if (current < romanIntNum[s[i + 1]]) {
            total += (romanIntNum[s[i + 1]] - current);
            i++;
        } else {
            total += romanIntNum[s[i]];
        }
    }

    return total;
};
