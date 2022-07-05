const palindromes = function (string) {
    let indexFront = 0;
    let indexBack = string.length;
    if (indexBack > 0) {indexBack--;}
    if (indexFront === indexBack) {return true;}

    entire: while (true) {
        // Get to the alphabetic character at start and end of string
        let charFront;
        let charBack;
        front: while (true) {
            charFront = string[indexFront].toUpperCase();
            if (charFront >= 'A' && charFront <= 'Z') {
                break front;
            } else {
                indexFront++;
            }
        }
        back: while (true) {
            charBack = string[indexBack].toUpperCase();
            if (charBack >= 'A' && charBack <= 'Z') {
                break back;
            } else {
                indexBack--;
            }
        }

        // End check if indexes overlap
        if (indexFront >= indexBack) {
            return true;
        }

        // Check if same character
        if (charFront === charBack) {
            indexFront++;
            indexBack--;
            continue;
        } else {
            return false;
        }
    }
};

// Do not edit below this line
module.exports = palindromes;
