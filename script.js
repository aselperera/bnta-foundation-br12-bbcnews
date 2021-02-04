/*
$(document).ready(function(){
    var blink = document.getElementById.apply("blink-text");
    setInterval(function(){
        blink.style.display = (blink.style.display == 'none' ? '' : 'none');
    }, 1000);

})(jQuery);
*/

// Temporarily disabled 

/*
window.addEventListener("load", function(){
    var blink = document.getElementById("blink-text");
    setInterval(function(){
        blink.style.display = (blink.style.display == 'none' ? '' : 'none');
    }, 500);

}, false);
*/

// Open top dropdown menu code

function dropdownToggle() {
    var dropdownTop = document.getElementById("dropdown-top");
    if (dropdownTop.style.display == "none") {
        dropdownTop.style.display = "block";
    }
    else {
        dropdownTop.style.display = "none";
    }
}

// Datetime

var today = new Date();
var date = today.getFullYear() + "-" + today.getMonth+1 + today.getDate();
var time = today.getHours() + ":" + today.getMinutes()
var dateTime = date + " " + time;