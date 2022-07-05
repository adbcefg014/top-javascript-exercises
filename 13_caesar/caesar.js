const caesar = function(string, number) {
    let output = '';
    let num = number;

    // Normalizing shift down to between -25 and 25
    if (num > 25) {
        while (num > 26) {num -=26;}
    } 
    if (num < -25) {
        while (num < -26) {num += 26;}
    }


    for (char of string) {
        if (checkAlpha(char)) {
            code = char.charCodeAt(0);
            outCode = code + num;
            outChar = String.fromCodePoint(outCode);

            // Need to implement a more specific unicode wrapping to perfect the problem; Z wrap to A & z wrap to a
            let outCode1 = outCode;
            let outChar1 = outChar;
            if (!checkAlpha(outChar1)) {
                if (num > 0) {outCode -= 26;}
                else {outCode += 26;}
                
                outChar = String.fromCodePoint(outCode);
            }
            output += outChar;
        } else {
            output += char;
        }
    }

    return output;
};

function checkAlpha(character) {
    const char = character.toUpperCase();
    if (char.toUpperCase() >= 'A' && char.toUpperCase() <= 'Z') {
        return true;
    } else {
        return false;
    }
}

// Do not edit below this line
module.exports = caesar;
