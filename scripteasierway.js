var timeblock9 = {description: des9.value,};
var hour = moment().format("HH");

$(".saveBtn").on("click", function() {
    var datahour = $(this).attr("data-hour");
    var inputField = $("#" + datahour).val();
    localStorage.setItem(datahour, inputField);
})
var timeslots = [9, 10, 11, 12];
function descriptions () {
    for (var i = 0; i <= hour.length; i++) {
        $("#" + timeslots[i]).val(localStorage.getItem(timeslots[i]))
    }
}
descriptions();