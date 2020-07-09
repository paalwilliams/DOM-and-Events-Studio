// Write your JavaScript code here.
// Remember to pay attention to page loading!

window.onload = function (event) {
  let takeOff = document.getElementById('takeoff');
  let flightStatus = document.getElementById('flightStatus');
  let shuttleBackground = document.getElementById('shuttleBackground');
  let shuttleHeight = document.getElementById('spaceShuttleHeight');
  let land = document.getElementById('landing');
  let abort = document.getElementById('missionAbort');
  let up = document.getElementById('btnup');
  let down = document.getElementById('btndown');
  let left = document.getElementById('btnleft');
  let right = document.getElementById('btnright');
  let shuttle = document.getElementById('rocket');

  takeOff.addEventListener('click', function () {
    if (confirm('Confirm the shuttle is ready for takeoff.')) {
      flightStatus.innerHTML = 'Shuttle in flight.';
      shuttleBackground.style.backgroundColor = 'blue';
      shuttleHeight.innerText = 10000;
    }
  });

  land.addEventListener('click', function () {
    alert('The shuttle is landing. Landing gear engaged');
    flightStatus.innerHTML = 'The Shuttle has landed';
    shuttleBackground.style.backgroundColor = 'green';
    shuttleHeight.innerText = 0;
    shuttle.style.margin = 0;
  });

  abort.addEventListener('click', function () {
    if (confirm('Confirm that you want to abort the mission.')) {
      flightStatus.innerHTML = 'Mission aborted.';
      shuttleBackground.style.backgroundColor = 'green';
      shuttleHeight.innerText = 0;
      shuttle.style.margin = 0;
    }
  });

  up.addEventListener('click', function () {
    if (flightStatus.innerHTML == 'Shuttle in flight.') {
      shuttleHeight.innerText = Number(shuttleHeight.innerText) + 10000;
    } else {
      alert('Shuttle not in flight. Please take off first.');
    }
  });

  down.addEventListener('click', function () {
    if (shuttleHeight.innerText == 10000) {
      alert('Shuttle too low. Please ascend first.');
    } else if (flightStatus.innerHTML != 'Shuttle in flight.') {
      alert('Shuttle not in flight. Please take off first.');
    } else {
      shuttleHeight.innerText = Number(shuttleHeight.innerText) - 10000;
    }
  });

  left.addEventListener('click', function () {
    if (flightStatus.innerHTML != 'Shuttle in flight.') {
      alert('Shuttle not in flight. Please take off first.');
    } else {
      let pPos = shuttle.style.marginLeft.indexOf('p');
      let posNum = Number(shuttle.style.marginLeft.slice(0, pPos));
      posNum -= 10;
      shuttle.style.marginLeft = posNum + 'px';
    }
  });

  right.addEventListener('click', function () {
    if (flightStatus.innerHTML != 'Shuttle in flight.') {
      alert('Shuttle not in flight. Please take off first.');
    } else {
      let pPos = shuttle.style.marginLeft.indexOf('p');
      let posNum = Number(shuttle.style.marginLeft.slice(0, pPos));
      posNum += 10;
      shuttle.style.marginLeft = posNum + 'px';
    }
  });
};
