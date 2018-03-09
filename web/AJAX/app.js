'use strict';

$(function () {
    $(document).keypress((e) => {
        const $inputData = $('#search')[0].value;

        if (e.which === 13) {
            const request = $.ajax('https://api.github.com/search/users?q=' + $inputData + 'in:login');

            request.done((msg) => {
                msg.items.forEach((element, i) => {
                    console.log(msg);

                    const img = $('<img>');
                    const p = $('<p>');
                    const mojDiv = $('<div>');
                    mojDiv.addClass('mojDiv');
                    img[0].src = element.avatar_url;
                    p[0].textContent = element.login;
                    $('div').append(mojDiv);
                    mojDiv.append(img);
                    mojDiv.append(p);
                });

            })
        }
    })

})