'use strict';

$(function(){

    $('body').on('click', removeBorder);

    function removeBorder () {
        var $imgWithBorder = $('.selected').removeClass();

        var $middle = parseInt($imgWithBorder.parent().next().children().length / 2);
        console.log($middle);
        
       var $middleElement = $imgWithBorder.parent().next().children()[$middle];
       $($middleElement).addClass('selected');
        
    }


})