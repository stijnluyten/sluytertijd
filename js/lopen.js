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

var nextSchedule = [
  {action: '+', time: 1},
  {action: 'O', time: 1},
  {action: '++', time: 2},
  {action: 'OO', time: 2},
  {action: '++++', time: 4},
  {action: 'OOO', time: 3},
  {action: '++++', time: 4},
  {action: 'OOO', time: 3},
  {action: '+++++', time: 5},
  {action: 'OO', time: 2}
];

var soundEffect = new Audio('audio/just-saying.mp3');

var secondsInMinute = 2;


function scheduleWO(index) {
  soundEffect.src = 'audio/just-saying.mp3';
  soundEffect.play();
  soundEffect.pause();
  console.dir(schedule[index]);
  $('#step_' + index).addClass('busy');
  tickMinutes(schedule[index].time, function () {
    $('#step_' + index).removeClass('busy');
    $('#step_' + index).addClass('done');
    $('.trigger').click();
  });
}


$(function () {
  $('.step').remove();
  schedule.forEach(function (step, index) {
    $('.steps').append(`<div id="step_${index}" class="step" onclick="javascript:scheduleWO(${index});">${step.action}</div>`);
  });
  /*
    $('.step').each(function(index, element) {
      console.log('schedule will be: index' + JSON.stringify(schedule[index]));
      $(element).click(function() {
        console.dir(schedule[index]);
        $('#step_' + index).addClass('busy');
        tickMinutes(schedule[index].time, function() {
          $('#step_' + index).removeClass('busy');
          $('#step_' + index).addClass('done');
        });
      });
    });
    */
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
  soundEffect.play();
  // $('audio#pop')[0].play();
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
