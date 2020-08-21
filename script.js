let currentDayElement = document.getElementById('currentDay');
let today = (moment().format('LLLL'));
currentDayElement.textContent = today;
$('.col-md-2').css('color', 'red')
$('.display-3').css('color', 'blue')

// creating the color of the blocks depending on the time of the day
function callTime(hour) {
    if (hour < today) {
        return "past";
    } else if (hour > today) {
        return "future";
    } else if (hour === today) {
        return "present";
    }


}


$(".row").each(function (index) {
    var timeIndex = index + 9;
    var savedData = localStorage.getItem("num" + timeIndex);
    var time = callTime(timeIndex);
    $(this).children("input").val(savedData);
    $(this).children("input").addClass(time);

});

// Click Event handler
$(".saveBtn").click(function () {
    console.log(this, "this");
    let inputUser = $(this).siblings(".user-input").val();
    let timeBlock = $(this).siblings(".user-input").attr("id");
    localStorage.setItem(inputUser, timeBlock);


}); 
