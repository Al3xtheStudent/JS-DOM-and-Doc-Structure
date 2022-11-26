function countDownTimer() {
    //countdownTimer will go from 50 to 0 by 5 sec
    console.log("countdownTimer() started");
    var currTime = 50;
    document.getElementById("countDis").innerHTML = currTime + " sec";

    //45 sec display
    setTimeout(function () {
        currTime = currTime - 5;
        //'currTime' is what will give me my 50 sec value. 'CurrTime = CurrTime -1' is what will take away a variable. Right now I'm going to take away 5.  
        console.log(currTime);
        document.getElementById("countDis").innerHTML = currTime + " sec";
    }, 5000);
    // This bottom value will take away 5 variables every 5 seconds. Goes by millieseconds. 
    // alt + shift + 4 cleans up code. 
    //40 sec display
    setTimeout(function () {
        currTime = currTime - 5;
        console.log(currTime);
        document.getElementById("countDis").innerHTML = currTime + " sec";
    }, 10000);

    //35 sec display
    setTimeout(function () {
        currTime = currTime - 5;
        console.log(currTime);
        document.getElementById("countDis").innerHTML = currTime + " sec";
    }, 15000);

    //30 sec display
    setTimeout(function () {
        currTime = currTime - 5;
        console.log(currTime);
        document.getElementById("countDis").innerHTML = currTime + " sec";
    }, 20000);

    //25 sec Display
    setTimeout(function () {
        currTime = currTime - 5;
        console.log(currTime);
        document.getElementById("countDis").innerHTML = currTime + " sec";
    }, 25000);

    //20 sec Dispaly
    setTimeout(function () {
        currTime = currTime - 5;
        console.log(currTime);
        document.getElementById("countDis").innerHTML = currTime + " sec";
    }, 30000);

    //15 sec display
    setTimeout(function () {
        currTime = currTime - 5;
        console.log(currTime);
        document.getElementById("countDis").innerHTML = currTime + " sec";
    }, 35000);

    //10 sec display 
    setTimeout(function () {
        currTime = currTime - 5;
        console.log(currTime);
        document.getElementById("countDis").innerHTML = currTime + " sec";
    }, 40000);

    //5 sec diaply
    setTimeout(function () {
        currTime = currTime - 5;
        console.log(currTime);
        document.getElementById("countDis").innerHTML = currTime + " sec";
    }, 45000);

    //0 sec display
    setTimeout(function () {
        currTime = currTime - 5;
        console.log(currTime);
        document.getElementById("countDis").innerHTML = "Blastoff";
    }, 50000);

}


function playCraps() {
    // troubleshooting playCraps() has started
    console.log("playCraps() started")

    var die1 = 0; 
    var die2 = 0; 
    //adds the die variables

    die1 = Math.ceil(6 * Math.random());
    die2 = Math.floor(6 * Math.random()) +1;
    //I have two different commands that share the same prupose but one is just cleaner than the other. 'Math Ceil' will just round up the values while 'math floor' will need a variable at the end. 

    console.log(die1);
    console.log(die2);
    //Console log is used when inspecting and troubleshooting. 

    document.getElementById("die1Res").innerHTML = "The result for die 1 is:  " + die1;
    document.getElementById("die2Res").innerHTML = "The result for die 2 is:  "  + die2;
    //The 'document.getElementByID' is used to actually display the die results on the webpage. 

    //Check if craps (7 or 11)
    var sum = die1 + die2;
    if(sum ==7 || sum == 11) {
        console.log("You lose")
        document.getElementById("gameRes").innerHTML = "You did not find victory. Try again and Win!";
    }
    
    //check for win
    else if(die1 % 2 == 0 && die1 == die2){
        console.log("You win")
        document.getElementById("gameRes").innerHTML = "You Won";
    }

    //check for tie
    else{
        console.log("you did not win or lose.")
        document.getElementById("gameRes").innerHTML = "It is a DRAW. Try again and WIN";
    }

}
//This is created to fuffill assignment Efficiency at Mission Control. Will work with loops
 function btrCountdownTimer(){
    console.log("btrCountdownTimer() started");
    var currTime = 50;

    for(var i = 0; i < 11; i++){
        setTimeout(function(){
            //what we do each iteration 
            console.log(currTime);
            document.getElementById("countDis").innerHTML = currTime;
            if(currTime == 0) {
                document.getElementById("countDis").innerHTML = "Blastoff";
            }
            currTime = currTime -5;
        }, i * 5000 )
    }

 }
 
//function chgBtrCountdownTimer() {
    //console.log("chgBtrCountdownTimer started");
    //var currTime = 50;
    //var ogCurrTime = currTime;

    //for(var i = 0; i < 11; i++){
        //setTimeout(function(){
            //what we do each iteration 
            //console.log(currTime);
            //if( currTime ==0){
                //when we finishing counting down
                //document.getElementById("countDis").innerHTML = "Blastoff";
            //}
            //else if(currTime < 0.5 * ogCurrTime){
                //less than halt-time left
                //document.getElementById("countDis").innerHTML = "Warning Less than ½ way to launch, time left =" + currTime + " seconds";
            //}
            //else {
                //at the beginning
                //document.getElementById("countDis").innerHTML = currTime + " seconds";
            //}

          
            
            //currTime = currTime -5;
        //}, i * 5000 )
    //}
//}

function StartFun(){
    console.log("StartFun() started");
    //disable start button
    document.getElementById("startButton").disabled = true;
    //enable stop button
    document.getElementById("stopButton").disabled = false;

    document.getElementById("dataTable").rows["seconds"].innerHTML = "reading data";
    //run update display
   
    timer = setInterval(updateDisplay, time_interval);
}
function StopFun() {
    console.log("StopFun() started");
    //disable stop button
    document.getElementById("stopButton").disabled = true;
    //enable start button 
    document.getElementById("startButton").disabled = false;
    //enable stop button 

    clearInterval(timer);
}

//This is where we are implementing our sound. We create a functionn. Mae sure to add semicolons. 
function playStation(){
    console.log("playStation() started");
    //This is how we have added our sound. 
    mySound = new sound("us-lab-background.mp3");
    mySound.play();
}

//We are going to add the sound with this. One of the few cases we have added something into the parenthesis. 
function sound(srcFile){
    //
    this.sound = document.createElement("audio");
    //This srcFile will be the source that is used. 
    this.sound.src = srcFile; 
    //When we push the button, the sound will be ready to go
    this.sound.setAttribute("preload", "audio");
    //No controls are set
    this.sound.setAttribute ("controls", "none");
    //setup to just play sound and not display anything 
    this.sound.style.display = "none";
    //The appendChild locks in the display that we have set. 
    document.body.appendChild(this.sound);
    this.play = function(){
        this.sound.play();
    }
    this.stop = function(){
        this.sound.pause();
    }

}