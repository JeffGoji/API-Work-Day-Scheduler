//Moment.js used to display today's date and time:
let todayDate = moment().format("dddd, MMM Do YYYY");
$("#currentDay").html(todayDate);

$(document).ready(function () {
  //Event listener for the save function
  $(".saveBtn").on("click", function () {
    //Get descriptions from jQuery
    let text = $(this).siblings(".description").val();
    let time = $(this).parent().attr("id");

    //Save text area to Local Storage:
    localStorage.setItem(time, text);
  });

  //Time tracker feature
  function timeTracker() {
    let currentTime = moment().hour();

    //Looping over the .timeblocks class the rows

    $(".time-block").each(function () {
      let hour = parseInt($(this).attr("id").split("hour")[1]);

      //Checks the time and adds/removes classes for the backgrounds for those classes
      if (hour < currentTime) {
        $(this).removeClass("future");
        $(this).removeClass("present");
        $(this).addClass("past");
      } else if (hour === currentTime) {
        $(this).removeClass("past");
        $(this).removeClass("future");
        $(this).addClass("present");
      } else {
        $(this).removeClass("present");
        $(this).removeClass("past");
        $(this).addClass("future");
      }
    });
  }

  timeTracker();
});
