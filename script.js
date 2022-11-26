//Where we are adding the time and date into the page
var timeDisplayEl = $('#time-display');

//pulling the time and date from dayjs
function displayTime() {
  var rightNow = dayjs().format('MMM DD, YYYY [at] hh:mm');
  timeDisplayEl.text(rightNow);
}
//getting the hour in military time from dayjs
var hour = dayjs().hour();

//comparing the military from dayjs hour vs the hour ID 
function background () {
  $(".backgroundColor").each(function () {
    var timeOfDay = parseInt($(this).attr("id"));
    hour = parseInt(hour);
  if(hour > timeOfDay){
    $(this).addClass("past");
  }
  else if(hour < timeOfDay){
    $(this).addClass("future");
  }
  else {
    $(this).addClass("present");
  }
});
}

//calling functions 
displayTime()
background()

//adding save button
var saveButton = document.getElementById("save");

//save button works dynamically so one button does not save all buttons.
$(".saveBtn").on("click", function (){
  var text = $(this).siblings(".description").val();
  var events = $(this).parent().attr("id");
  localStorage.setItem(events, text);
});
//save the text to storage and make stay on refresh
$("#hour-9").children(".description").val(localStorage.getItem('hour-9'));
$("#hour-10").children(".description").val(localStorage.getItem('hour-10'));
$("#hour-11").children(".description").val(localStorage.getItem('hour-11'));
$("#hour-12").children(".description").val(localStorage.getItem('hour-12'));
$("#hour-1").children(".description").val(localStorage.getItem('hour-1'));
$("#hour-2").children(".description").val(localStorage.getItem('hour-2'));
$("#hour-3").children(".description").val(localStorage.getItem('hour-3'));
$("#hour-4").children(".description").val(localStorage.getItem('hour-4'));
$("#hour-5").children(".description").val(localStorage.getItem('hour-5'));
$("#hour-6").children(".description").val(localStorage.getItem('hour-6'));

