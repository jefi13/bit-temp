'use strict';

function request(ip) {
    var xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://www.freegeoip.net/xml/' + ip);

    xhr.send();

    xhr.onload = function () {

        var xmlDoc = xhr.responseXML;

        var a = xmlDoc.querySelector("CountryName").textContent;

        var h1 = document.querySelector("#countryName");

        h1.textContent = a;

    }
}

request("82.117.204.106");