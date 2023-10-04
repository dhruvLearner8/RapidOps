function updateTime(){
    let currentTimeElement = document.getElementById('currentTime');
    let currentTime = new Date().toLocaleTimeString();
    currentTimeElement.textContent = currentTime;
}

function updateDate(){
    var date1 = new Date();
    let currentDateElement = document.getElementById('currentDate');
    var options = {day:'numeric',month:'short',year:'numeric'}
 
     // let currentDate = date1.toLocalDateString(undefined,options);
     var currentDate = date1.toLocaleDateString(undefined, options);
    currentDateElement.textContent = currentDate;
}

function updateStopWatch(){
    milliSeconds++;
    if(milliSeconds == 1000){
        seconds ++;
        milliSeconds = 0;
        if(seconds == 60){
            minutes++;
            seconds=0;
            if(minutes==60){
                hours++;
                minutes=0;
            }
        }
    }
    hr.textContent = hours;
    min.textContent = minutes;
    sec.textContent = seconds;
    ms.textContent = milliSeconds;
   
    
    
}

var hours =0;
var minutes =0;
var seconds=0 ;
var milliSeconds=0 ;
var intervalId;


var ms = document.getElementById("ms");
var sec= document.getElementById("sec");
var min = document.getElementById("min");
var hr = document.getElementById("hr");

var startButton = document.getElementById("startButton");
var resumeButton = document.getElementById("resumeButton");
resumeButton.disabled = true;

console.log(ms);

var running = false;


function startStopWatch(){
    if(!running){
       intervalId = setInterval(updateStopWatch,1);
       console.log(intervalId);
       running = true;
       startButton.disabled = true;
       resumeButton.disabled = false;
       
    }
}

function pauseStopWatch(){
    if(running){
        clearInterval(intervalId);
        console.log(intervalId);
        running=false;
    }
}

function resumeStopWatch(){
    if(!running){
        var ms1 = document.getElementById("ms");
        var sec1= document.getElementById("sec");
        var min1 = document.getElementById("min");
        var hr1 = document.getElementById("hr");
        console.log(ms1+sec1);
    }
}


function resetStopWatch(){
    clearInterval(intervalId);
    hours=0;
    minutes=0;
    seconds=0;
    milliSeconds=0;
    ms.textContent='00';

    sec.textContent='00';
    min.textContent='00';
    hr.textContent='00';
  
    running=false;
    startButton.disabled = false;
    resumeButton.disabled = true;
}

updateTime();
updateDate();



setInterval(updateTime,1000);




