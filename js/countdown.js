var MILLISECONDS_TO_SECONDS = 0.001;
var SECONDS_IN_DAY = 86400;
var SECONDS_IN_HOUR = 3600;
var SECONDS_IN_MINUTE = 60;

var TARGET_DATE = new Date(2015, 6, 9, 13, 0, 0, 0);

function secondPassed()
{
	var currentDate = Date.now();
	var difference = TARGET_DATE - currentDate;

	var seconds = difference * MILLISECONDS_TO_SECONDS;

	// var minutes = Math.round((seconds - 30)/60);
	// var remainingSeconds = seconds % 60;
	// if (remainingSeconds < 10)
	// {
	// 	remainingSeconds = "0" + remainingSeconds;
	// }
	// document.getElementById('countdown').innerHTML = minutes + ":" + remainingSeconds;

	var days = Math.floor(seconds/SECONDS_IN_DAY);
	seconds -= days * SECONDS_IN_DAY;

	var hours = Math.floor(seconds/SECONDS_IN_HOUR);
	seconds -= hours * SECONDS_IN_HOUR;

	var minutes = Math.floor(seconds/SECONDS_IN_MINUTE);
	seconds -= minutes * SECONDS_IN_MINUTE;
	seconds = Math.floor(seconds);

	document.getElementById('countdown').innerHTML = days + " Days and " + hours + ":" + minutes + ":" + seconds;
}

secondPassed();
var countdownTimer = setInterval('secondPassed()', 1000);
