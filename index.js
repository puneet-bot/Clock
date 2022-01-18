var h1 = document.getElementsByTagName('h2')[0],
// keeping the element and storing in a variable so that can access whenever required.
    start = document.getElementById('start'),
    stop = document.getElementById('stop'),
    clear = document.getElementById('clear'),
    // Declaring it globally so that can get accurate values whenever required
    seconds = 0, minutes = 0, hours = 0,
    secondArrow=document.getElementById('second'),
    t;

    // The logic for the time is here
function add() {
    // whenever it is called the seconds , mins and hours are calculated note that these values are declared globally.
    //that's why we will be getting accurate results.
    seconds++;
    if (seconds >= 60) {
        seconds = 0;
        minutes++;
        if (minutes >= 60) {
            minutes = 0;
            hours++;
        }
    }
    var sRotation=6*seconds;
    //logic to rotate the dialer
    secondArrow.style.transform=`rotate(${sRotation}deg)`;
    h1.textContent = (hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":" + (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds > 9 ? seconds : "0" + seconds);

    timer();
}
function timer() {
    // this call the above add function after every 1000 milisecond which is exactly 1 sec thus helping me to calculate time.
    t = setTimeout(add, 1000);
    
}


/* Start button */
start.onclick =function(){ 
    stop.style.display='block';
    clear.style.display='block';
    start.style.display='none';
    timer();
}

/* Stop button */
stop.onclick = function() {
    stop.style.display='none';
    clear.style.display='block';
    start.style.display='block';
    clearTimeout(t);
    
}
/* Clear button */
clear.onclick = function() {
    stop.style.display='none';
    clear.style.display='none';
    start.style.display='block';
    clearTimeout(t);
    h1.textContent = "00:00:00";
    secondArrow.style.transform=`rotate(0deg)`;
    seconds = 0; minutes = 0; hours = 0;
    
}
