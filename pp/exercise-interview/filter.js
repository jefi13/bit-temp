'use strict';

function filterArray(arr, callback) {
    var filteredArray = [];

    for (var i = 0; i < arr.length; i++) {
        if (callback(arr[i])) {
            filteredArray.push(arr[i]);
        }
    }

    return filteredArray;
}

function isOddNum(num) {
    return num % 2 !== 0;
}

var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(array);
console.log('Odd elements of the given array:');
console.log(filterArray(array, isOddNum));