//initialize document

//NOT WORKING - FIXED!!!! was not referencing jQuery in HTML Meta
$(document).ready(function () {


    // get the score to tie



    var theirScore = Math.floor(Math.random() * 101) + 19;
    console.log("THEIR SCORE " + "=" + theirScore);
    $("#compScore").html("Score needed to tie: " + theirScore);

    // get the score for the different NOVA players

    // function initialize() [THIS IS NOT WORKING ]
    var jalenVal = Math.floor(Math.random() * 12) + 1;
    console.log("jalen: " + jalenVal);
    $(".jalen").html(jalenVal);


    var omariVal = Math.floor(Math.random() * 12) + 1;
    console.log("omari: " + omariVal);
    $(".omari").html(omariVal);

    var donteVal = Math.floor(Math.random() * 12) + 1;
    console.log("donte: " + donteVal);
    $(".donte").html(donteVal);

    var mikalVal = Math.floor(Math.random() * 12) + 1;
    console.log("mikal: " + mikalVal);
    $(".mikal").html(mikalVal);


    /* var donteVal = Math.floor(Math.random() * 12) + 1; 
            console.log("donte: " + donteVal); 
            $(".donte").html("<img src=" + "assets/images/donte.jpg" + " value=" + donteVal + ">"); 
    
      var mikalVal =  Math.floor(Math.random() * 12) + 1; 
            console.log("mikal: " + mikalVal); 
            $(".mikal").html("<img src=" + "assets/images/mikal.jpg" + " value=" + mikalVal + ">"); 
      
    var omariVal = Math.floor(Math.random() * 12) + 1; 
            console.log("omari: " + omariVal); 
            $(".omari").html("<img src=" + "assets/images/omari.jpg" + " value=" + omariVal + ">");  ;  
      
      */
    var wins = 0;
    console.log("wins: " + wins);

    var losses = 0;
    console.log("losses: " + losses);

    var score = 0;
    console.log("score: " + score);

    /*	function reset () {
            theirScore = Math.floor(Math.random() * 102) + 19; 
                console.log("theirScore: " + theirScore); 
            $("#compScore").html(theirScore); 
    
            score = 0; 
            $("#yourscore").html(score); 
        
        
      
      
      /* $(".myplayer").click(function (){
       
         //not working, going to try an alert
        /* alert("The paragraph was clicked."); */
    /*	var newScore = score += parseInt($(this).attr("value")); 
            console.log("Your Score: " + newScore); 
        $("#yourScore").html(newScore); */




    $(".jalen").click(function () {

        //trying something new YESSSSSSSSSSSSSSSSS it worked!!!!!!
        /* alert("The paragraph was clicked."); */
        //	$('.jalen').click(function(){
        score = jalenVal += score;

        $('#yourScore').html(score);

    

        $(".donte").click(function () {
            score = score += donteVal;
            $('#yourScore').html(score);

        

            $(".omari").click(function () {
                score = score += omariVal;
                $('#yourScore').html(score);

            

                $(".mikal").click(function () {
                    score = score += mikalVal;
                    $('#yourScore').html(score);


                      


                if (score === theirScore) {
        wins++;
        $("#wins").html(wins);
        console.log("wins= " + wins);
        //reset();

    }

    else if (score > theirScore) {
        losses++;
        $("#losses").html("Losses: " + losses);
        console.log("Losses: " + losses);
       // reset();


    }
   
                  
    console.log("THEIR SCORE " + "=" + theirScore);
    console.log("wins " + "=" + wins);
    console.log("losses " + "=" + losses);
    console.log("your score " + "=" + score);

                
                }


               
              





     /* //set their score opponents score to TIE //added direct to variable above THIS IS WORKING!!! //
     old code 

     */


        /* lets just try one. Set Jalen score: */

       // $(".jalen").on("click", function() {

            // Each time the user clicks the jalen picture the counter goes up by 100.
          //  jalenVal += 100;

            // We then output the number of times the jalen picture is clicked.
           // console.log(jalenVal);

      //    });

      //  $("#theirScore").html(theirScore);




    //check
    // console.log("THEIR SCORE " + "=" + theirScore);



        //TODO: NOT WORKING BECAUSE DOCUMENT .READY FUNCTION IMPROPER??? UGHH

    





                                  