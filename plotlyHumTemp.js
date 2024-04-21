var x_data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var y_data = [30, 45, 55, 70, 80, 85, 90, 95, 100, 100]; // Humidity (%)
var z_data = [15, 20, 25, 18, 23, 27, 20, 22, 25, 24]; // Temperature (°C)

var trace = {
  x: x_data,
  y: y_data,
  z: z_data,
  mode: 'markers',
  marker: {
    color: 'rgb(23, 190, 207)',
    size: 12,
    line: {
      color: 'rgba(217, 217, 217, 0.14)',
      width: 0.5
    },
    opacity: 0.8
  },
  type: 'scatter3d'
};

var data = [trace];
var layout = {
  // title: '3D Scatter plot of Temperature vs Humidity',
  autosize: false,
  width: 700,
  height: 500,
  margin: {
    l: 0,
    r: 0,
    b: 0,
    t: 65
  },
  paper_bgcolor: 'rgb(10,10,10)',
  scene: {
    xaxis: {
      color: 'white'
    },
    yaxis: {
      color: 'white'
    },
    zaxis: {
      color: 'white'
    }
  },
  camera: {
    up: { x: 10, y: 10, z: 0 },
    center: { x: 0, y: 0, z: 0 },
    eye: { x: 5, y: 5, z: 1 }
  },

};

Plotly.newPlot('Div', data, layout);
