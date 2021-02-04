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

function setDateTime() {

    let today = new Date();
    let date = today.getDay() + "-" + today.getMonth() + "-" + today.getFullYear(); 
    let time = today.getHours() + ":" + today.getMinutes();
    let dateTime = date + " " + time;

    let dateTimeText = document.getElementById("datetime-text");
    dateTimeText.innerHTML = dateTime;

    setInterval(() => {
        
        let today = new Date();
        let date = today.getDay() + "-" + today.getMonth() + "-" + today.getFullYear(); 
        let time = today.getHours() + ":" + today.getMinutes();
        let dateTime = date + " " + time;

        let dateTimeText = document.getElementById("datetime-text");
        dateTimeText.innerHTML = dateTime;

    }, 10000);

}

// Scroll to top button

window.onscroll = function() {scrollButtonAppear()};

function scrollButtonAppear() {
    document.getElementById("scroll-top-button").style.display = "block";
}

function scrollToTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, Opera
}

// Set random hours for when articles were written

window.onload = function() {
    setRandomHour();
    setRandomMinutes();
}

function setRandomHour() {
    var hoursList = document.getElementsByClassName("random-hour");

    for (let i = 0; i < hoursList.length; i++) {
        var randomHour = Math.floor(Math.random() * 9)+1; // Returns random number between 1 and 9
        hoursList[i].innerHTML = randomHour+"h";
    }
}

function setRandomMinutes() {
    var minutesList = document.getElementsByClassName("random-minutes");

    for (let i = 0; i < minutesList.length; i++) {
        var randomMinutes = Math.floor(Math.random() * 60)+1; // Returns random number between 1 and 9
        minutesList[i].innerHTML = randomMinutes+"m";
    }
}