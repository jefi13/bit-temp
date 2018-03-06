'use strict';

$(function () {
    var listItems = $('li');

    // Select the first element of the list and give it a bottom border
    $('li:first').addClass('red-bottom-border');

    // Select all list elements and transform their text to uppercase
    listItems.addClass('uppercase');

    // Select active elements of the list and change its font color
    $('li.active').addClass('blue-font-color');

    // Find the middle one and change its background color
    var middleItem = listItems[(listItems.length - 1) / 2];
    middleItem.classList.add('greenish-bg-color');
})