'use strict';

const mainModule = ((data, ui) => {
    $(() => {
        $.get('url')
            .done((response) => {
                console.log(response);
                
            })

            .fail((err) => {
                console.log(err);
                
            })
        }
    })
})(dataModule, uiModule);