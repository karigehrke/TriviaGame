$(document).ready(function () {
    var startNum = 45;
    var intervalId;
    var question1CorrectAnswer = "10";
    var question2CorrectAnswer = "skittles";
    var question3CorrectAnswer = "3.7 Million";
    var question4CorrectAnswer = "1993";

   
    

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
        if ($("#question1") === question1CorrectAnswer){
            $("#question1").html("correct!");
            conosle.log(question1CorrectAnswer);
        }
        else {
            $("#question1").html("The correct answer is: " + question1CorrectAnswer);
        }
        if ($("#question2") === question2CorrectAnswer){
            $("#question2").html("correct!");
        }
        else {
            $("#question2").html("The correct answer is: " + question2CorrectAnswer);
        }
        if ($("#question3") === question3CorrectAnswer){
            $("#question3").html("correct!");
        }
        else {
            $("#question3").html("The correct answer is: " + question3CorrectAnswer);
        }
        if ($("#question4") === question4CorrectAnswer){
            $("#question4").html("correct!");
        }
        else {
            $("#question4").html("The correct answer is: " + question4CorrectAnswer);
        }
    }
}

function stop () {
    clearInterval(intervalId);
}

run();

//create code for getting submit button info and returning correct answers once submit is clicked (on click listener event)


});
//var correctAns = 



//resetFunction(function() {
  //  $("#display").text("45 seconds");
//});

//function for the countdown
//var timer = setInterval(function( {
  //  Math.floor()
//}))