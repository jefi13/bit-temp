let arrays = [[1,2,3], [4,5], [6]];

var newarr = arrays.reduce((previous, current) => previous.concat(...current));

console.log((newarr));
