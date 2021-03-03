$(document).ready(function(){
  
  $("#start").click(function(){
     timer = setInterval(countUp, 100);
    $(this).prop('disabled', true);
    $("#stop, #reset").prop('disabled', false);
  });
  $("#stop").click(function(){
    clearInterval(timer);
    $(this).prop('disabled', true);
    $("#start, #reset").prop('disabled', false);
  });
  $("#reset").click(function(){
    msec = 0;
    sec = 0;
    min = 0;
    hour = 0;
    clearInterval(timer);
    $("#clock").html("0:00.00.0");
    $("#start").prop('disabled', false);
    $("#stop, #reset").prop('disabled', true);
    
  });
});
let msec = 0;
let sec = 0;
let min = 0;
let hour = 0;
let timer;
function countUp(){
    msec++;
    if(msec > 9){
      msec = 0;
      sec++;
    }
    if(sec > 59){
      sec = 0;
      min++;
    }
    if(min > 59){
      min = 0;
      hour++;
    }
    return $("#clock").html(hour + ":" + min.toString().padStart(2, 0) + "." + sec.toString().padStart(2, 0) + "." + msec.toString());
  }