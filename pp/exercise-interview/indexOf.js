'use strict';

function indexOf(arr, search) {
    var firstIndex = -1;

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === search) {
            return i;
            break;
        }
    }

    return firstIndex;
}

var array = [1, 2, 3, 4, 5, 4, 3, 5, 2, 3];

console.log('First index of 3: ' + indexOf(array, 3));
console.log('First index of 1: ' + indexOf(array, 1));
console.log('First index of 6: ' + indexOf(array, 6));