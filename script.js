$(document).ready(function () {

var saveBtn9 = document.getElementById("saveBtn9");
var saveBtn10 = document.getElementById("saveBtn10");
var saveBtn11 = document.getElementById("saveBtn11");
var saveBtn12 = document.getElementById("saveBtn12");
var saveBtn13 = document.getElementById("saveBtn13");
var saveBtn14 = document.getElementById("saveBtn14");
var saveBtn15 = document.getElementById("saveBtn15");
var saveBtn16 = document.getElementById("saveBtn16");
var saveBtn17 = document.getElementById("saveBtn17");

var des9 = document.getElementById("des9");
var des10 = document.getElementById("des10");
var des11 = document.getElementById("des11");
var des12 = document.getElementById("des12");
var des13 = document.getElementById("des13");
var des14 = document.getElementById("des14");
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

// Retrieving from localStorage
renderNotes9();
renderNotes10();
renderNotes11();
renderNotes12();
renderNotes13();
renderNotes14();
renderNotes15();
renderNotes16();
renderNotes17();

function renderNotes9() {
    var des9Note = JSON.parse(localStorage.getItem("timeblock9"));
    des9.textContent = des9Note.description;
    }
function renderNotes10() {
    var des10Note = JSON.parse(localStorage.getItem("timeblock10"));
    des10.textContent = des10Note.description;
    }
function renderNotes11() {
    var des11Note = JSON.parse(localStorage.getItem("timeblock11"));
    des11.textContent = des11Note.description;
    }
function renderNotes12() {
    var des12Note = JSON.parse(localStorage.getItem("timeblock12"));
    des12.textContent = des12Note.description;
    }
function renderNotes13() {
    var des13Note = JSON.parse(localStorage.getItem("timeblock13"));
    des13.textContent = des13Note.description;
    }
function renderNotes14() {
    var des14Note = JSON.parse(localStorage.getItem("timeblock14"));
    des14.textContent = des14Note.description;
    }
function renderNotes15() {
    var des15Note = JSON.parse(localStorage.getItem("timeblock15"));
    des15.textContent = des15Note.description;
    }
function renderNotes16() {
    var des16Note = JSON.parse(localStorage.getItem("timeblock16"));
    des16.textContent = des16Note.description;
    }
function renderNotes17() {
    var des17Note = JSON.parse(localStorage.getItem("timeblock17"));
    des17.textContent = des17Note.description;
    }


// Saving to localStorage

saveBtn9.addEventListener("click", function(event) {
    event.preventDefault();

    var timeblock9 = {
        description: des9.value,
    };

    if (des9.value === "") {
        alert("Please enter a valid event before saving.");
    } else {
        saveBtn9.style.backgroundColor = "#4caf50";
        localStorage.setItem("timeblock9", JSON.stringify(timeblock9));
    }
});

saveBtn10.addEventListener("click", function(event) {
    event.preventDefault();

        var timeblock10 = {
            description: des10.value,
        };

        if (des10.value === "") {
            alert("Please enter a valid input before saving.");
        } else {
            saveBtn10.style.backgroundColor = "#4caf50";
            localStorage.setItem("timeblock10", JSON.stringify(timeblock10));
            
        }

});

saveBtn11.addEventListener("click", function(event) {
    event.preventDefault();

        var timeblock11 = {
            description: des11.value,
        };

        if (des11.value === "") {
            alert("Please enter a valid input before saving.");
        } else {
            saveBtn11.style.backgroundColor = "#4caf50";
            localStorage.setItem("timeblock11", JSON.stringify(timeblock11));
            localStorage.getItem(timeblock11);
        }

});

saveBtn12.addEventListener("click", function(event) {
    event.preventDefault();

        var timeblock12 = {
            description: des12.value,
        };

        if (des12.value === "") {
            alert("Please enter a valid input before saving.");
        } else {
            saveBtn12.style.backgroundColor = "#4caf50";
            localStorage.setItem("timeblock12", JSON.stringify(timeblock12));
            localStorage.getItem(timeblock12);
        }

});

saveBtn13.addEventListener("click", function(event) {
    event.preventDefault();

        var timeblock13 = {
            description: des13.value,
        };

        if (des13.value === "") {
            alert("Please enter a valid input before saving.");
        } else {
            saveBtn13.style.backgroundColor = "#4caf50";
            localStorage.setItem("timeblock13", JSON.stringify(timeblock13));
            localStorage.getItem(timeblock13);
        }

});

saveBtn14.addEventListener("click", function(event) {
    event.preventDefault();

        var timeblock14 = {
            description: des14.value,
        };

        if (des14.value === "") {
            alert("Please enter a valid input before saving.");
        } else {
            saveBtn14.style.backgroundColor = "#4caf50";
            localStorage.setItem("timeblock14", JSON.stringify(timeblock14));
            localStorage.getItem(timeblock14);
        }

});

saveBtn15.addEventListener("click", function(event) {
    event.preventDefault();

        var timeblock15 = {
            description: des15.value,
        };

        if (des15.value === "") {
            alert("Please enter a valid input before saving.");
        } else {
            saveBtn15.style.backgroundColor = "#4caf50";
            localStorage.setItem("timeblock15", JSON.stringify(timeblock15));
            localStorage.getItem(timeblock15);
        }

});

saveBtn16.addEventListener("click", function(event) {
    event.preventDefault();

        var timeblock16 = {
            description: des16.value,
        };

        if (des16.value === "") {
            alert("Please enter a valid input before saving.");
        } else {
            saveBtn16.style.backgroundColor = "#4caf50";
            localStorage.setItem("timeblock16", JSON.stringify(timeblock16));
            localStorage.getItem(timeblock16);
        }

});

saveBtn17.addEventListener("click", function(event) {
    event.preventDefault();

        var timeblock17 = {
            description: des17.value,
        };

        if (des17.value === "") {
            alert("Please enter a valid input before saving.");
        } else {
            saveBtn17.style.backgroundColor = "#4caf50";
            localStorage.setItem("timeblock17", JSON.stringify(timeblock17));
            localStorage.getItem(timeblock17);
        }

});


});
