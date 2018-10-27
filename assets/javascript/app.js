$(document).ready(function () {

var startNum = 45;
var intervalId;


function run() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
}

//decrement function
function decrement() {
    startNum--;
    $("#display").html(startNum + " seconds");

    //when timer = 0
    if (startNum === 0) {
        stop();
        alert("Time's Up!!");
        //Alert here that time is up? switch backgrounds/show answers?
        $()
    }
}

function stop () {
    clearInterval(intervalId);
}

run();

});

var userAns = [];
//var correctAns = 



//resetFunction(function() {
  //  $("#display").text("45 seconds");
//});

//function for the countdown
//var timer = setInterval(function( {
  //  Math.floor()
//}))