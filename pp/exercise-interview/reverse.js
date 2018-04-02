'use strict';

function reverseArray(arr) {
    var temp;
    
    for (var i = 0, j = arr.length - 1; i < arr.length / 2; i++, j--) {
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }

    return arr;
}

var array1 = [1, 2, 3, 4, 5, 6];
var array2 = [1, 2, 3, 4, 5, 6, 7];

console.log(array1);
console.log('Reversed array:');
console.log(reverseArray(array1));
console.log();
console.log(array2);
console.log('Reversed array:');
console.log(reverseArray(array2));