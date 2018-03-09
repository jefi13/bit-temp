var uiModule = (() => {
    const $inputData = $('#search')[0].value;

    const img = $('<img>');
    const p = $('<p>');
    const mojDiv = $('<div>');

    function printUsers(request){
        mojDiv.addClass('mojDiv');
        // img[0].src = element.avatar_url;
        // p[0].textContent = element.login;
        $('div').append(mojDiv);
        mojDiv.append(img);
        mojDiv.append(p);
    }

    return {
        $inputData: $inputData,
        printUsers: printUsers
    }
})();