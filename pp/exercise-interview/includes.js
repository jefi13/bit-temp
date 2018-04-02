'use strict';

function includes(arr, search) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === search) {
            return true;
            break;
        }
    }

    return false;
}

var array = ['wolf', 'owl', 'tiger'];

console.log(array);
console.log('Given array includes \'wolf\'?');
console.log(includes(array, 'wolf'));
console.log('Given array includes \'owl\'?');
console.log(includes(array, 'owl'));
console.log('Given array includes \'lion\'?');
console.log(includes(array, 'lion'));