// Load functions when the page loads - does slow it down unfortunately

window.onload = function() {
    setRandomHour();
    setRandomMinutes();
    setDateTime();
    dropdownToggle(); // Have to set to open on login otherwise need to click it twice to open the first time
    blink();
}

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

// Live summary blink

function blink() {
    var blinkText = document.getElementById("blink-text");
    setInterval(function(){
        blinkText.style.visibility = (blinkText.style.visibility == 'hidden' ? 'visible' : 'hidden');
    }, 500);

}

// Date & time

function setDateTime() {

    var days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];

    let today = new Date();
    let day = today.getDay();
    let dayWeek = days[day-1];
    let month = months[today.getMonth()];
    let year = today.getFullYear();
    let minutes = today.getMinutes();

    if (minutes < 10) {
        minutes = "0"+minutes;
    }

    let time = today.getHours() + ":" + minutes;
    let dateTime = dayWeek + ", " + month + " " + day + ", " + year + " - " + time;

    let dateTimeText = document.getElementById("datetime-text");
    dateTimeText.innerHTML = dateTime;

    setInterval(() => {
        
        let today = new Date();
        let day = today.getDay();
        let dayWeek = days[day-1];
        let month = months[today.getMonth()];
        let year = today.getFullYear();
        let minutes = today.getMinutes();
        
        if (minutes < 10) {
            minutes = "0"+minutes;
        }

        let time = today.getHours() + ":" + minutes;
        let dateTime = dayWeek + ", " + month + " " + day + ", " + year + " - " + time;

        let dateTimeText = document.getElementById("datetime-text");
        dateTimeText.innerHTML = dateTime;

    }, 5000);

}

// Scroll to top button

window.onscroll = function() {
    scrollButtonAppear()
};

function scrollButtonAppear() {
    document.getElementById("scroll-to-top-button").style.display = "block";
}

function scrollToTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, Opera
}

// Set random times for when articles were written

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
        var randomMinutes = Math.floor(Math.random() * 60)+1; // Returns random number between 1 and 60
        minutesList[i].innerHTML = randomMinutes+"m";
    }
}