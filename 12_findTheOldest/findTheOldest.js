const findTheOldest = function(people) {
    let oldestAge = 0;
    let oldest;
    for (person of people) {
        let lastYear;
        if (person.yearOfDeath) {
            lastYear = person.yearOfDeath;
        } else {
            lastYear = new Date().getFullYear();
        }

        let age = lastYear - person.yearOfBirth;

        if (age > oldestAge) {
            oldest = person;
            oldestAge = age;
        }
    }
    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
