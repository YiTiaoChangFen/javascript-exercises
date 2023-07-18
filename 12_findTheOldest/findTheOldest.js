const findTheOldest = function(array) {
    const currYear = 2023;
    let oldestPerson = null;
    let oldestAge = 0;

    for (let people of array) {
        let peopleAge = 0;
        if ("yearOfDeath" in people) {
            peopleAge = people.yearOfDeath - people.yearOfBirth;
        } else {
            peopleAge = currYear - people.yearOfBirth;
        }
        
        if (peopleAge > oldestAge) {
            oldestAge = peopleAge;
            oldestPerson = people;
        }
    }
    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
