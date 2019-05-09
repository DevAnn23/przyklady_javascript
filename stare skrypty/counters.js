// counterValue = 39;
var display = document.getElementById('display');
var startStopwatch = document.getElementById('startStopwatch');
var stopStopwatch = document.getElementById('stopStopwatch');
var continueStopwatch = document.getElementById('continueStopwatch');
var counter = new stopwatch(display);
var counterON;
var continueCounter;
var init;

startStopwatch.onclick = function() {
    var counterNumber = document.getElementById('counterValue');
    var counterValue = counterNumber.value;
    if (counterON || !(init === null)) {
        clearInterval(counterON);
    }
    
    counter.start(counterValue, display);
   
};
stopStopwatch.onclick = function() {
    counter.stop();
}
continueStopwatch.onclick = function() {
    counter.continue();
}
function stopwatch(display) {
    // var counterNumber = document.getElementById('counterValue');
    // var counterValue = counterNumber.value;
    this.display = display;
    this.counterValue = counterValue;
    // this.counterON = counterON;
    this.start = function (liczba, display) {

        counterON = setInterval(function () {
            this.display.innerHTML = (liczba++);
            continueCounter = (liczba);
        }, 1000);
    };
    this.stop = function () {
        clearInterval(counterON);
        init = null;

    };
    this.continue = function () {
        this.counterValue = display;
           if (init === null) {
             init = this.start(continueCounter, display);
         }
       else {
           return;
       }
    };
};

stopwatch(display);
