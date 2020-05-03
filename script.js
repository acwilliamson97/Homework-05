$("#currentDay").text(moment().format("dddd, MMMM Do"));

function currentTime () {
  var currentHour = parseInt(moment().hours());
  console.log(currentHour)
}
currentTime();

$(".time-block").each(function() {
  var timeblock = parseInt($(this).attr("id"));
  var currentHour = parseInt(moment().hours());
  console.log(currentHour)
  
  if (timeblock < currentHour) {
    $(this).addClass("past");
  } 
  else if (timeblock === currentHour) {
    $(this).removeClass("past");
    $(this).addClass("present");
  } 
  else {
    $(this).removeClass("past");
    $(this).removeClass("present");
    $(this).addClass("future");
  }
});

$(".saveBtn").on("click", function() {
  event.preventDefault();
  console.log("button works!")
  var savedEvent = document.querySelectorAll(".description").value
  console.log (this)
  console.log(savedEvent)
  localStorage.setItem("description", savedEvent);
  localStorage.getItem("description")
});