function resetWheel(wheelId, resultContId, resultId) {
  var wheel = document.getElementById(wheelId);
  wheel.style.transition = 'none';
  wheel.style.transform = 'rotate(0deg)';

  document.getElementById(resultId).innerHTML = '';
  document.getElementById(resultContId).style.transition = 'none';
  document.getElementById(resultContId).style.backgroundColor = 'rgba(0, 0, 0, 0)';
}

function showWheel(wheelId, headline) {
  console.log('called, wheelId = ' + wheelId);
  document.getElementById('season01Container').style.display = 'none';
  document.getElementById('season02Container').style.display = 'none';
  document.getElementById('season03Container').style.display = 'none';
  document.getElementById('seasonContainer').style.display = 'none';
  document.getElementById(wheelId).style.display = '';
  document.getElementById('headline').innerHTML = headline;

  resetWheel('seasonWheel', 'seasonResultCont', 'seasonResult', );
  resetWheel('season01Wheel', 'season01Result');
  resetWheel('season02Wheel', 'season02Result');
  resetWheel('season03Wheel', 'season03Result');
}

function spin(wheelId, zoneSize, adjust, prefix, results, resultId, resultContId) {
  const wheel = document.getElementById(wheelId);
  const audio = document.getElementById('spinWheelAudio').play();

  setTimeout(() => {
    var deg = Math.random() * 360;
    var randomSpin = Math.ceil((Math.random() * 10)) * 360;
    var result = 0;
    wheel.style.transition = 'all 3s ease-out';
    wheel.style.transform = `rotate(${deg + 1440}deg)`;

    switch (wheelId) {
      case 'season02Wheel':
      case 'season03Wheel': {
        if (deg >= 340) result = 1;
        if (deg <= 339) result = 2;
        if (deg <= 311) result = 3;
        if (deg <= 283) result = 4;
        if (deg <= 256) result = 5;
        if (deg <= 228) result = 6;
        if (deg <= 200) result = 7;
        if (deg <= 173) result = 8;
        if (deg <= 145) result = 9;
        if (deg <= 117) result = 10;
        if (deg <= 89) result = 11;
        if (deg <= 61) result = 12;
        if (deg <= 34) result = 13;
        if (deg <= 6) result = 1;
        break;
      }

      default: {
        var actualDeg = ((deg + adjust) % 360);
        var resultDeg = Math.floor(actualDeg / zoneSize);
    
        if (resultDeg == results.length) {
          resultDeg = 0;
        }

        result = results[resultDeg];
      }
    }

    // document.getElementById(resultId).innerHTML = prefix + result;
  
      setTimeout(() => {
        setTimeout(() => {
          document.getElementById(resultId).innerHTML = prefix + result;
        }, 100);
        document.getElementById(resultContId).style.transition = 'all 0.1s ease-in';
        document.getElementById(resultContId).style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
      }, 3100);

  }, 400);
  resetWheel(wheelId, resultContId, resultId);
}

function main() {
  showWheel('seasonContainer', 'Season Wheel')
}

main();