//initialize document

//NOT WORKING
//$(document).ready(function() { 


// declare vars

var jalenVal = 0;
var donteVal = 0;
var mikalVal = 0;
var omariVal = 0;

var theirScore = theirScore=Math.floor(Math.random()*101)+19;
var yourScore = "";
var wins = "";
var losses = "";

//set "their score" opponents score to TIE //added direct to variable above THIS IS WORKING!!!
window.onload = function () {

  /*  $("#theirScore").html(theirScore); */

  };


  function initialize() {
    //theirScore=Math.floor(Math.random()*101)+19;

$("#theirScore").html(theirScore);

//set player scores TODO: NOT WORKING WORTH SHIT

    var yourScore=0;
    var players = [$(".jalen"), $(".omari"), $(".donte"), $(".mikal")];
    var button = [jalenBtn, omariBtn, donteBtn, mikalBtn];
   
    // to assign value to each player
    for (var i=0; i < players.length; i++) {
        button[i]=players[i].attr(Math.floor(Math.random()*10)+2);
    };

    //lets just try one. Set Jalen score:

    $(".jalen").on("click", function() {

        // Each time the user clicks the jalen picture the counter goes up by 100.
        jalenVal += 100;
    
        // We then output the number of times the jalen picture is clicked.
        console.log(jalenVal);
    
      });

    $("#theirScore").html(theirScore);
    $("#wins").html(wins);
    $("#losses").html(losses);
    $("#yourScore").html(yourScore);
    console.log(jalenVal);
}

//};

//check
console.log("THEIR SCORE " + "=" + theirScore);
console.log("wins " + "=" + wins);
console.log("losses " + "=" + losses);
console.log("your score " + "=" + yourScore);


//TODO: NOT WORKING BECAUSE DOCUMENT .READY FUNCTION IMPROPER??? UGHH
// });