'use strict';

$(function () {
    var imagesLinks = ['https://via.placeholder.com/350x350/FF0000', 'https://via.placeholder.com/350x350/00FF00', 'https://via.placeholder.com/350x350/0000FF', 'https://via.placeholder.com/350x350/FFFF00', 'https://via.placeholder.com/350x350/FF00FF', 'https://via.placeholder.com/350x350/F05050'];

    var stop = true;

    var heading = $('<h1>Amazing Gallery</h1>');
    heading.css('text-align', 'center');
    $('body').append(heading);

    imagesLinks.forEach(function (src, index) {
        var img = $('<img>').attr('src', src + '/FFF');
        var rand = Math.floor(Math.random() * (500 - 100) + 100) + "px";
        img.css('width', rand);

        console.log(img.width());

        if (img.width() < 200 && stop) {
            img.css('border', '2px solid green');
            stop = false;
        }

        $('body').append(img);
    });
})