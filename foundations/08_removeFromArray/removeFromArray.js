const removeFromArrayMy = function(array, ...args) {

    let removedArray = array.filter(item => item != args[1]);

    if ( args.length > 2 ) {
        for ( let i = 2; i < args.length; i++) {
            removedArray = removedArray.filter(item => item != args[i]);
        }
        return removedArray;
    } else {
        return removedArray;
    }

};

// A simpler, but more advanced way to do it is to use the 'filter' function,
// which basically does what we did with the forEach above.
const removeFromArray = function(array, ...args) {
    return array.filter(val => !args.includes(val))
}


// Do not edit below this line
module.exports = removeFromArray;
