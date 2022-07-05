const sumAll = function(num1, num2) {
    if (typeof(num1) != 'number' || typeof(num2) != 'number') {
        return'ERROR';
    }

    let larger;
    let smaller;
    if (num2 > num1) {
        larger = num2;
        smaller = num1;
    } else {
        larger = num1;
        smaller = num2;
    }
    if (smaller < 0) {
        return 'ERROR';
    }

    let sum = 0;
    for (let i = smaller; i <= larger; i++) {
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
