var schedule = [
  {action: '++', time: 2},// ++
  {action: '00', time: 2},// OO
  {action: '++', time: 2},// ++
  {action: 'O', time: 1},// O
  {action: '++', time: 2},// ++
  {action: 'OO', time: 2},// OO
  {action: '++', time: 2},// ++
  {action: '00', time: 2},// 00
  {action: '++', time: 2},// ++
  {action: 'O', time: 1},// O
  {action: '++', time: 2},// ++
  {action: 'O', time: 1},// O
  {action: '++', time: 2},// ++
  {action: 'OO', time: 2}// OO
];

var secondsInMinute = 5;

$(function () {
  $('.step').remove();
  schedule.forEach(function (step) {
    $('.steps').append(`<div class="step">${step.action}</div>`);
  });
});

function disableButton() {
  console.log('disabling button');
  $('.trigger').prop('disabled', true);
}


$('.trigger').click(function () {
  console.log('start to run! and at end do ' + disableButton);
  tickMinutes(1, disableButton);
});


function tickMinutes(minutes, functionAtEnd) {
  //functionAtEnd();
  var counter = minutes * secondsInMinute;

  var now = new Date().getTime();
  var nowAfterTimeslot = now + (counter * 1000);

  tickUntil(now, nowAfterTimeslot, functionAtEnd);
}

function showTime(time) {
  $('.timer').text(time);
}

function beep() {
  $('audio#pop')[0].play();
}

function tickUntil(startTime, timeToStop, functionAtEnd) {
  console.log('tickUntil! ' + functionAtEnd);
  setTimeout(function () {
    var now = new Date().getTime();
    if (now > timeToStop) {
      showTime('Klaar');
      console.log('beep! ' + functionAtEnd);
      beep();
      if (functionAtEnd) {
        console.log('next function');
        functionAtEnd();
      }
    } else {
      tickUntil(startTime, timeToStop, functionAtEnd);
      var timeToShow = (timeToStop - now) / 1000;
      showTime(timeToShow);
    }
  }, 100);
}

/*
1581892251880
1581892251890000
*/
