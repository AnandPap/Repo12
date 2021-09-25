var contacts = [
    {
        "firstName": "John",
        "lastName": "Doe",
        "number": "12365495208",
        "likes": ["C", "C++", "C#"]
    },
    {
        "firstName": "Jane",
        "lastName": "Doe",
        "number": "4568295761",
        "likes": ["Python", "Swift", "R"]
    },
    {
        "firstName": "Richard",
        "lastName": "Roe",
        "number": "6938257149",
        "likes": ["React", "Angular", "Vue"]
    },
    {
        "firstName": "Jane",
        "lastName": "Roe",
        "number": "unknown",
        "likes": ["JavaScript", "Node", "HTML & CSS"]
    }
];

function lookUpProfile(name, prop) {
    // Only change code below this line
    var i;
    var j = 0;
    for (i = 0; i < 4; i++) {
        if (name == contacts[i].firstName && contacts[i].hasOwnProperty(prop) == true) {
            return contacts[i][prop];
        }
        if (name != contacts[i].firstName) {
            j++;
        }
    }
    if (j == 4) {
        return "No such contact";
    } else {
        return "No such property";
    }
    // Only change code above this line
}

console.log(lookUpProfile("Jane", "lastName")); // Change this line
module.exports = lookUpProfile;