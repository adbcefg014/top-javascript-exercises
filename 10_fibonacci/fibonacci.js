const fibonacci = function(num) {
    if (num < 0) {return 'OOPS';}
    let numbers = [1, 1];

    // Generate fibonacci numbers to what we need
    while (num > numbers.length){
        const endIndex = numbers.length - 1;
        const newNum = numbers[endIndex] + numbers[endIndex - 1];
        numbers.push(newNum);
    }

    return numbers[num - 1];
};

// Do not edit below this line
module.exports = fibonacci;
