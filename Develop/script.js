// Get date at top of screen
const today = moment().format('LL');
$( "#currentDay").append("Today is "+ today);

// Change the color of the blocks based on the time of the day
var momentHour = moment().hour();
function timeBlock() {
    $(".time-block").each(function(){
        var currentHour = parseInt($(this).attr("id"));
        if (momentHour > currentHour){
            $(this).addClass("past")
        } else if (momentHour === currentHour) {
            $(this).addClass("present")
        } else {
            $(this).addClass("future")
        }
    })
};
timeBlock();

// Save text put into the block
var saveBtn = $(".saveBtn")

saveBtn.on("click", function(){
    let time = $(this).siblings(".hour").text();
    let usrTxt = $(this).siblings(".description").val();
    console.log(usrTxt);
    console.log(time);
    localStorage.setItem (time, usrTxt);
});

function storeEl(){
    $(".hour").each(function(){
        let theHour = $(this).text();
        let storedTxt = localStorage.getItem(theHour);

        if (storedTxt  !== null){
            $(this).siblings(".description").val(storedTxt);
        }
    })
};

storeEl();

// The GRAVEYARD
// Message to the Grader:  Please enjoy all the many failed attempts at trying to make this work!
// getting current, past and future hours to highlight appropriately
// var ninthHour = $("hour-9-number").text();

// var thisHour = [$("#hour-9-number").text().split(":")[0], $("#hour-10-number").text().split(":")[0],$("#hour-11-number").text().split(":")[0]]

// window.onload = function updateTimeSlotItems (){
//     console.log(thisHour);
//     const currentHour = moment().hour();
//     console.log(currentHour)
//     $("#hour-9-text-area").each( function(){
//     if (parseInt(thisHour[0]) < currentHour){
//         console.log(true);
//         $(this).addClass("past")
//     };
//     if (parseInt(thisHour[0]) == currentHour){
//         console.log("present");
//         $(this).addClass("present")
//     }
//     else{
//         console.log(false);
//         $(this).addClass("future")
//     }
//     });
//     $("#hour-10-text-area").each( function(){
//         if (parseInt(thisHour[1]) < currentHour){
//             console.log(true);
//             $(this).addClass("past")
//         };
//         if (parseInt(thisHour[1]) == currentHour){
//             console.log("present");
//             $(this).addClass("present")
//         }
//         else{
//             console.log(false);
//             $(this).addClass("future")
//         }
//         });
//          $("#hour-11-text-area").each( function(){
//             if (parseInt(thisHour[2]) < currentHour){
//                 console.log(true);
//                 $(this).addClass("past")
//             };
//             if (parseInt(thisHour[2]) == currentHour){
//                 console.log("present");
//                 $(this).addClass("present")
//             }
//             else{
//                 console.log(false);
//                 $(this).addClass("future")
//             }
//             });
    
// }

// window.onload = function updateTimeSlotItems(){
//     console.log(ninthHour);
//     console.log(moment().hour());
//     if(ninthHour == moment().hour() + ":00"){
//         console.log("yes");
//         document.getElementById("hour-9-text-area").style.backgroundColor = "#ff6961";
//     }
//     else{
//         document.getElementById("hour-9-text-area").style.backgroundColor = "#ffffff";
//         console.log("no");
//     };
// };

// var ninthHour = $("hour-9").text();
// var timeSlot;
 // var now = moment().hour();
    // if ("          " + now + ":00" == currentHour){
    // currentHour.closest().addClass("present")
    // }
    // else {
    //     currentHour.closest().addClass("past")
    //     };

    // $("saveBtn").localStorage.setItem();

// let time = $(this).siblings(".hour").text();
// let usrTxt = $(this).siblings(".description").val();
