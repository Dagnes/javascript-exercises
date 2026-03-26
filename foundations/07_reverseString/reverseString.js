const reverseString = function(string) {

    let reverseStringArray = [];
    reverseStringArray = string.split("");
    reverseStringArray.reverse();

    return reverseStringArray.join("");

};

// Do not edit below this line
module.exports = reverseString;
