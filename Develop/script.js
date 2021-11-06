// Get date at top of screen
const today = moment().format('LL');
$( "#currentDay").append("Today is "+ today);

// getting current, past and future hours to highlight appropriately
var ninthHour = $("hour-9-number").text();


window.onload = function updateTimeSlotItems(){
    console.log(ninthHour);
    if(ninthHour = moment().hour() + ":00"){
        console.log("yes")
    }
    else{
        console.log("no")
    }

    // var now = moment().hour();
    // if ("          " + now + ":00" == currentHour){
    // currentHour.closest().addClass("present")
    // }
    // else {
    //     currentHour.closest().addClass("past")
    //     };
};

// var ninthHour = $("hour-9").text();
// var timeSlot;

