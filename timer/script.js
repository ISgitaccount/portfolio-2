'use strict';

let deadline = '12/31/2022';
//let time = document.querySelector('.time');

function getTimeRemaining(endtime){
  let t = Date.parse(endtime) - Date.parse(new Date());
  let seconds = Math.floor( (t/1000) % 60 );
  let minutes = Math.floor( (t/1000/60) % 60 );
  let hours = Math.floor( (t/(1000*60*60)) % 24 );
  let days = Math.floor( t/(1000*60*60*24) );
  return {
   'total': t,
   'days': days,
   'hours': hours,
   'minutes': minutes,
   'seconds': seconds
  };
}


//function initializeClock(id, endtime){
//  let clock = document.getElementByClassName(id);
//  let timeinterval = setInterval(function(){
//   let t = getTimeRemaining(endtime);
//   clock.innerHTML = 'days: ' + t.days + '
//' +
//    'hours: '+ t.hours + '
//' +
//    'minutes: ' + t.minutes + '
//' +
//    'seconds: ' + t.seconds;
//   if(t.total<=0){
//    clearInterval(timeinterval);
//   }
//  },1000);
//}


//initializeClock('time', deadline);

let sec = document.querySelector('div.count div.time div.seconds div.value');
let minutes = document.querySelector('div.count div.time div.minutes div.value');
let hours = document.querySelector('div.count div.time div.hours div.value');
let days = document.querySelector('div.count div.time div.days div.value');


function time(endtime) {

    let timeinterval = setInterval(function(){
    let t = getTimeRemaining(endtime);
    
    sec.innerHTML = getTimeRemaining(deadline).seconds;
    minutes.innerHTML = getTimeRemaining(deadline).minutes;
    hours.innerHTML = getTimeRemaining(deadline).hours;
    days.innerHTML = getTimeRemaining(deadline).days;
    
    if(t.total<=0){
    clearInterval(timeinterval);
    }
    }, 1000);
}

time(deadline);