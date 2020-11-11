// Setting the current date and time

function currentTime() {
var now = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
$("#currentDay").text(now);
}

currentTime();
setInterval(function(){
   currentTime();
},1000);

// appending all hours of time blocks 
var hour = document.createElement("span");
var description = document.createElement("textarea");
var saveBtn = document.createElement("button");
// var row = document.createElement("div");
var container = document.getElementById("container");

var timeblockList = [
    {
        hour: "9am",
        description: "",
        saveBtn: "&#xf0c7;"
    },
    {
        hour: "10am",
        description: "",
        saveBtn: "&#xf0c7;"
    },
    {
        hour: "11am",
        description: "",
        saveBtn: "&#xf0c7;"
    },
    {
        hour: "12pm",
        description: "",
        saveBtn: "&#xf0c7;"
    },
    {
        hour: "1pm",
        description: "",
        saveBtn: "&#xf0c7;"
    },
    {
        hour: "2pm",
        description: "",
        saveBtn: "&#xf0c7;"
    },
    {
        hour: "3pm",
        description: "",
        saveBtn: "&#xf0c7;"
    },
    {
        hour: "4pm",
        description: "",
        saveBtn: "&#xf0c7;"
    },
    {
        hour: "5pm",
        description: "",
        saveBtn: "&#xf0c7;"
    },
]

function renderTimeblocks() {

    hour.setAttribute("class", "hour");
    description.setAttribute("class", "description");

    for (var i = 0; i < timeblockList.length; i++) {
        var timeblock = timeblockList[i];

        var div = document.createElement("div");
        div.appendChild(hour);
        div.innerText = timeblock;
        container.appendChild(div);
    }
}

renderTimeblocks();