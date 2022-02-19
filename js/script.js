var enterTime = function() {
    // First validate the parameters: start time, end time, and activity.
    var startTime = getStartTime();
    var endTime = getEndTime();
    var valid = validateTimes(startTime, endTime);
    if (!valid) {
        alert("Invalid time interval!");
        return;
    }
    // Now add the activity text to the proper times
    var text = document.querySelector('.activity-input').value;

    var time = startTime;
    while (time < endTime) {
        var timeString = '._' + String(time);
        document.querySelector(timeString).innerHTML = text
        if ((time % 100) == 0) {
            time += 30;
        }
        else time += 70;
    }
};

document.querySelector('.enter-time-btn').addEventListener('click', enterTime)

function validateTimes(startTime, endTime) {

    return startTime < endTime;
}

function getStartTime() {
    var select = document.querySelector('.start-time-value');
    return parseInt(select.options[select.selectedIndex].value);
}

function getEndTime() {
    var select = document.querySelector('.end-time-value');
    return parseInt(select.options[select.selectedIndex].value);
}