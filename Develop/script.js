const today = moment().format('LL');
$( "#currentDay").append("Today is "+ today);

var timeSlot;

window.onload = function updateTimeSlotItems(){
    var now = moment().hour()
    console.log (now)
};