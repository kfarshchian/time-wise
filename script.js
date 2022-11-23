var timeDisplayEl = $('#time-display');


function displayTime() {
  var rightNow = dayjs().format('MMM DD, YYYY [at] hh:mm');
  timeDisplayEl.text(rightNow);
}

var hour = dayjs().hour();
console.log(hour);

function background () {
  $(".backgroundColor").each(function () {
    var timeTest = parseInt($(this).attr("id"));
    hour = parseInt(hour);
  if(hour > timeTest){
    $(this).addClass("past");
  }
  else if(hour < timeTest){
    $(this).addClass("future");
  }
  else {
    $(this).addClass("present");
  }


});
}
displayTime()
background()
console.log(timeTest);
console.log(hour);
  // THEN I am presented with time blocks for standard business hours
  // WHEN I view the time blocks for that day
  // THEN each time block is color-coded to indicate whether it is in the past, present, or future

  // WHEN I click into a time block
  // THEN I can enter an event
  // WHEN I click the save button for that time block

  // THEN the text for that event is saved in local storage
  // WHEN I refresh the page
  // THEN the saved events persist



  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.