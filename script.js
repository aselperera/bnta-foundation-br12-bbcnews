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

// Retrieve weather

/*
function getWeather() {
    var xhttp = new XMLHttpRequest();
    document.getElementById("weather-button").innerHTML = this.responseText;

    const api_host = "https://www.metaweather.com/44418/";
    xhttp.open("GET", "https://cors-anywhere.herokuapp.com/" + api_host, true);
    xhttp.send();
    
}
*/

function weatherBalloon( cityID ) {
    var key = '02fda04ac7b274cbed337f6b2945734b';
    fetch('https://api.openweathermap.org/data/2.5/weather?id=' + cityID+ '&appid=' + key)  
    .then(function(resp) { return resp.json() }) // Convert data to json
    .then(function(data) {
      console.log(data);
    })
    .catch(function() {
      // catch any errors
    });
}
  
window.onload = function() {
    weatherBalloon( 6167865 );
}

window.addEventListener("load", () => {
    let lat;
    let long;

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;
        })
    }
});