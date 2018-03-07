'use strict';

$(function(){
    var $body = $('body');
    var $btn = $('input');
    var $player = $('img');

    $body.on('click', move);
    $btn.on('click', stop);

    function move (event) {
        var $positionX = event.clientX;
        var $positionY = event.clientY;

        $player.offset(
            {
                'left': $positionX - $player.width() / 2, 
                'top': positionY - $player.height() / 2
            }
        );
    }

    function stop() {
        $btn[0].value = 'Stopped';
        $body.remove('click', move);
    }

})