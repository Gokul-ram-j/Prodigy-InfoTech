var hr = 0;
var min = 0;
var sec = 0;
var count = 0;

var prev_hr = 0;
var prev_min = 0;
var prev_sec = 0;
var prev_count = 0;

var diff_hr = 0;
var diff_min = 0;
var diff_sec = 0;
var diff_count = 0;


var timer = false;
var lapCounter = 1;
clearLap()

function $id(id) {
    return document.getElementById(id);
}

function start() {

      if (!timer){
          timer = true;
      document.querySelector("#start").innerHTML = '<i class="far fa-pause-circle"></i> Pause';
          stopwatch();
      }
      else
      {
          timer=false;
          document.querySelector("#start").innerHTML = '<i class="far fa-play-circle"></i> Start';
      }
    
}


function reset() {
    document.querySelector("#record-container").style.display = "none";
    timer = false;
    document.querySelector("#start").innerHTML = '<i class="far fa-play-circle"></i> Start';

    hr = 0;
    min = 0;
    sec = 0;
    count = 0;

    document.querySelector("#hr").innerHTML = "00";
    document.querySelector("#min").innerHTML = "00";
    document.querySelector("#sec").innerHTML = "00";
    document.querySelector("#count").innerHTML = "00";

    document.querySelector("#record-table-body").innerHTML = "";
    lapCounter = 1;

}

let timeoutId;
function stopwatch() {
    clearTimeout(timeoutId);

    if (timer == true)
        count = count + 1;

    if (count == 99) {
        sec = sec + 1;
        count = 0;
    }
    if (sec == 59) {
        min = min + 1;
        sec = 0;
    }
    if (min == 59) {
        hr = hr + 1;
        min = 0;
        sec = 0;
    }

    var hrString = hr;
    var minString = min;
    var secString = sec;
    var countString = count;

    if (hr < 10) {
        hrString = "0" + hrString;
    }
    if (min < 10) {
        minString = "0" + minString;
    }
    if (sec < 10) {
        secString = "0" + secString;
    }
    if (count < 10) {
        countString = "0" + countString;
    }
    document.querySelector("#hr").innerHTML = hrString;
    document.querySelector("#min").innerHTML = minString;
    document.querySelector("#sec").innerHTML = secString;
    document.querySelector("#count").innerHTML = countString;
    timeoutId = setTimeout("stopwatch()", 10);
}


// to get difference of time between last lap and now
function getdiff(){
  diff_hr = hr - prev_hr;
  diff_min = min - prev_min;
  if (diff_min < 0){
    diff_min += 60;
    diff_hr -= 1;
  }
  diff_sec = sec- prev_sec;
  if (diff_sec < 0){
    diff_sec += 60;
    diff_min -= 1;
  }
  diff_count = count - prev_count;
  if (diff_count < 0){
    diff_count += 100;
    diff_sec -= 1;
  }

  prev_count = count;
  prev_sec = sec;
  prev_min = min;
  prev_hr = hr;
}


function lap() {
    
    if(timer){
        //displaying record container div
        document.querySelector("#record-container").style.display = "block";
        
        // calling getting difference function
        getdiff();

        var lap_time = $id("hr").innerHTML + ":" 
        + document.querySelector("#min").innerHTML + ":" 
        + document.querySelector("#sec").innerHTML + ":" 
        + document.querySelector("#count").innerHTML;
        
        const table = document.querySelector("#record-table-body");
        const row = table.insertRow(0);
        const no_cell = row.insertCell(0);
        const time_cell = row.insertCell(1);
        const diff_cell = row.insertCell(2);
        
        no_cell.innerHTML = lapCounter;
        time_cell.innerHTML = lap_time;



        var hrString = diff_hr;
        var minString = diff_min;
        var secString = diff_sec;
        var countString = diff_count;
    
        if ( diff_hr < 10) {
            hrString = "0" + hrString;
        }
        if (diff_min < 10) {
            minString = "0" + minString;
        }
        if (diff_sec < 10) {
            secString = "0" + secString;
        }
        if (diff_count < 10) {
            countString = "0" + countString;
        }
        diff_cell.innerHTML = hrString+ ":" 
        + minString+ ":" 
        + secString + ":" 
        + countString;
        
        lapCounter++;
    }
}

function clearLap() {
    //hiding record container div
    document.querySelector("#record-container").style.display = "none";
    
    
    document.querySelector('#record-table-body').innerHTML = '';
    lapCounter=1;
}