'use strict';

function reduceArray(arr, acc = 0) {
    for (var i = 0; i < arr.length; i++) {
        acc += arr[i];
    }

    return acc;
}

var array = [1, 2, 3, 4, 5]
var accumulator = 7;

console.log(array);
console.log('Reduced array:');
console.log(reduceArray(array));
console.log('Reduced array with given accumulator ' + accumulator + ':');
console.log(reduceArray(array, accumulator));