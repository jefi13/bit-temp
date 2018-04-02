'use strict';

function lastIndexOf(arr, search) {
    var lastIndex = -1;

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === search) {
            lastIndex = i;
        }
    }

    return lastIndex;
}

var array = [1, 2, 3, 4, 5, 4, 3, 5, 2, 3];

console.log('Last index of 3: ' + lastIndexOf(array, 3));
console.log('Last index of 1: ' + lastIndexOf(array, 1));
console.log('Last index of 6: ' + lastIndexOf(array, 6));