const reverseString = function(input) {
    let characters = [];
    for (char of input) {
        characters += char;
    }

    let output= '';
    for (let i = characters.length; i > 0; i--) {
        output += characters[i - 1];
    }
    return output;
};

// Do not edit below this line
module.exports = reverseString;
