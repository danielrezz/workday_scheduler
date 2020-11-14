$(document).ready(function () {

var saveBtn9 = document.getElementById("saveBtn9");
var saveBtn10 = document.getElementById("saveBtn10");

var des9 = document.getElementById("des9");
var des10 = document.getElementById("des10");
var des11 = document.getElementById("des11");
var des12 = document.getElementById("des12");
var des13 = document.getElementById("des13");
var des14= document.getElementById("des14");
var des15 = document.getElementById("des15");
var des16 = document.getElementById("des16");
var des17 = document.getElementById("des17");

// Setting the current date and time
function currentTime() {
var now = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
$("#currentDay").text(now);
}

currentTime();
setInterval(function(){
   currentTime();
},1000);


saveBtn9.addEventListener("click", function(event) {
    event.preventDefault();
    saveBtn9.style.backgroundColor = "#4caf50";

    var timeblock9 = {
        description: des9.value,
    };

    localStorage.setItem("timeblock9", JSON.stringify(timeblock9));
});

saveBtn10.addEventListener("click", function(event2) {
        event2.preventDefault();

    
        var timeblock10 = {
            description: des10.value,
        };


    localStorage.setItem("timeblock10", JSON.stringify(timeblock10));

    // localStorage.getItem("des9");

});












});
