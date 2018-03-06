/*
  * Source code in sitepoint.com/build-javascript-countdown-timer-no-dependencies/
  * Made some changes, like reloading the page when countdown arrives to 0.
*/
function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);
  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  var days = Math.floor(t / (1000 * 60 * 60 * 24));
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

function initializeClock(id, endtime) {
  var clock = document.getElementById(id);
  clock.style.display = 'inline-block';
  var daysSpan = clock.querySelector('.days');
  var hoursSpan = clock.querySelector('.hours');
  var minutesSpan = clock.querySelector('.minutes');
  var secondsSpan = clock.querySelector('.seconds');

  function updateClock() {
    var t = getTimeRemaining(endtime);

    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  updateClock();
  var timeinterval = setInterval(updateClock, 1000);
}
var lineup = document.getElementById('lineupimg');
var endDate = 'March 9, 2018 14:00:00'
var endMs = Date.parse(endDate);

if(endMs > Date.parse(new Date())){
  initializeClock('clockdiv', endDate);
} else {
  lineup.style.display = 'inline';
}

function updateToLineup() {
  if(endMs == Date.parse(new Date())){
    location.reload();
  } else {
    window.setTimeout(updateToLineup,1000);
  }
}
updateToLineup();