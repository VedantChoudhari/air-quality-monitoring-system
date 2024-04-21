var app = document.getElementById('app');

var temperature = 0;
var humidity = 0;
var airQuality = 0;

function updateReadings(temp, hum, aq) {
  temperature = temp;
  humidity = hum;
  airQuality = aq;
}

updateReadings(35.3, 87, 170);

render();

// function fetchData() {
//   Simulating data fetching from an API
//   fetch('/api/data')
//     .then((res) => res.json())
//     .then((data) => {
//       temperature = data.temperature;
//       humidity = data.humidity;
//       airQuality = data.airQuality;
//       render();
//     });
// }

function getAirQualityColor() {
  if (airQuality < 20) {
    return '#00ff00'; // Green
  } else if (airQuality < 40) {
    return '#66ff33'; // Light Green
  } else if (airQuality < 60) {
    return '#ffff00'; // Yellow
  } else if (airQuality < 80) {
    return '#ff9900'; // Orange
  } else {
    return '#ff0000'; // Red
  }
}

function render() {
  app.innerHTML = `
          <div class='bg-main'>
            <div class="page light">
              <h1>Environment Monitoring</h1>
              <br/>
              <br/>
              <br/>
              <br/>

              <div class="data">
                <div class="item temperature" style="background-color:#263237">
                  <h2>Temperature</h2>
                  <p class="big-font">${temperature} °C</p>
                </div>
                <div class="item air-quality" style="background-color:#263237">
                  <h2>Air Quality</h2>
                  <div class="air-quality-slider" style="background-color: ${getAirQualityColor()}; width: ${airQuality}%"></div>
                  <!-- <p class="big-font">${airQuality} ppm</p> -->
                  <p class="big-font">${airQuality}</p>
                </div>
                <div class="item humidity" style="background-color:#263237;">
                  <h2>Humidity</h2>
                  <p class="big-font">${humidity} %</p>  
              </div>
    
            </div>
          </div>
      `;
}

// fetchData();
// setInterval(fetchData, 10000);
