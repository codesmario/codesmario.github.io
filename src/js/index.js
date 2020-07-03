import '../sass/style.scss';

const $ = require('jquery');

$(function() {
    // 
    $("#typed").typed({
        strings: [ "codesmario", "en mantenimiento..."],
        typeSpeed: 30,
        callback: function(){
            // shift();
        }
    });
    // 
});