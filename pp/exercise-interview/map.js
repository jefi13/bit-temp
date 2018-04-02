'use strict';

function mapArray(arr, callback) {
    var mappedArr = [];

    for (var i = 0; i < arr.length; i++) {
        mappedArr.push(callback(arr[i]));
    }

    return mappedArr;
}

function multipleWith5(num) {
    return num * 5;
}

var array = [1, 2, 3, 4, 5];

console.log(array);
console.log('Given array multiplied with 5:');
console.log(mapArray(array, multipleWith5));