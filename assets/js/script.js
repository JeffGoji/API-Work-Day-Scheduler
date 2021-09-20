"use strict";

//Moment.js used to display today's date and time:
var dateNow = moment().format("dddd, MMM Do YYYY");
$("#currentDay").html(todayDate);

$(document).ready(function () {
  //Event listener for the save function
  $(".saveBtn").on("click", function () {
    //Get descriptions from jQuery
    let text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    //Save text area to Local Storage:
    localStorage.setItem(time, text);
  });
});
