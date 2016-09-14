/**
 * Hockey is the game. Make it happen.
 *
 * If you want to turn it into some other sport, have at it.
 *
 * Anyway, I have given you a basic HTML structure for a 
 * BATTLE OF THE SPORTS GAME THING between these two rivals, and you
 * should make the page do what it needs to do, using your knowledge
 * of JS, HTML, CSS, and... sports.
 *
 * Here's what this 'game' should do:
 * 
 * 1. Clicking a "SHOOT" button attempt to score against the opposing team.
 *   - shots have a random chance of succeeding or failing
 *   - number of shots taken should increase every click on the "SHOOT" button
 *   - number of hits obviously only increases when the shot is successful
 * 
 * 2. Clicking the "RESET" button resets all the shot and score counters and
 * adds 1 to the number of resets
 *
 * 3. Any time a team shoots and scores change the background color of
 *    page to that teams color
 *
 * OPTIONAL STUFF:
 * - add logos of the two rivals below their name
 * - make the page just look better
 * - play a sound when someone clicks the "Shoot" button. You'll need to read about the <audio> element
 *   and how to use it in JS. You will also need to download a sound bite
 */

var numShots = 0;
var numGoals = 0;
var numShotsTeamTwo = 0;
var numGoalsTeamTwo = 0;
var randomNumber = 0;
var randomNumberTeamTwo = 0;
var numreset = 0;

$(function(){
    $("#teamone-shoot").click(function(){
        randomNumber = Math.floor((Math.random() * 11) + 1);
        
       if (randomNumber == 10){
           numShots++;
           $("#teamone-numshots").html(numShots);
           numGoals++;
           $("#teamone-numhits").html(numGoals);
           $("html").css("background-color", "red");
       }else{
           numShots++;
           $("#teamone-numshots").html(numShots);
       };
   });
})




$(function(){
    $("#teamtwo-shoot").click(function(){
        randomNumberTeamTwo = Math.floor((Math.random() * 11) + 1);
        
       if (randomNumberTeamTwo == 10){
           numShotsTeamTwo++;
           $("#teamtwo-numshots").html(numShotsTeamTwo);
           numGoalsTeamTwo++;
           $("#teamtwo-numhits").html(numGoalsTeamTwo);  
           $("html").css("background-color", "blue");    
       }else{
           numShotsTeamTwo++;
           $("#teamtwo-numshots").html(numShotsTeamTwo);
       };
   });
})


$("#reset").click(function(){
	numShotsTeamTwo = 0;
    numShots = 0;
    numGoals = 0;
    numGoalsTeamTwo = 0;
    numreset++;
    $("#teamtwo-numshots").html(numShotsTeamTwo);
    $("#teamtwo-numhits").html(numGoalsTeamTwo);
    $("#teamone-numhits").html(numGoals);
    $("#teamone-numshots").html(numShots);
    $("#num-resets").html(numreset);
    $("html").css("background-color", "white");

   });