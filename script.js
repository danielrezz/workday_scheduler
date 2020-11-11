// Setting the current date and time

function currentTime() {
var now = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
$("#currentDay").text(now);
}

currentTime();
setInterval(function(){
   currentTime();
},1000);

