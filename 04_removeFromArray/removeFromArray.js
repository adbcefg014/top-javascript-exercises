const removeFromArray = function(array, ...removeElements) {
    let output = [];
    let removes = Array.from(removeElements);

    for (let remove of removes) {
        if (output.length === 0) {
            output = removeElement(array, remove);
        } else {
            output = removeElement(output, remove);
        }
    }
    
    return output;
};

function removeElement (array, remove) {
    let output = [];
    for (let element of array) {
        if (Array.isArray(element)) {
            output.push(removeElement(element, remove));
        }

        if (element !== remove) {
            output.push(element);
        }
    }
    return output;
}


// Do not edit below this line
module.exports = removeFromArray;
