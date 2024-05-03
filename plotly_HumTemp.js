function plot3_hum_temp(bs_feel, bs_temp, bs_hum) {
  var trace = {
    x: bs_feel,
    y: bs_temp,
    z: bs_hum,
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
    // autosize: false,
    // width: 800,
    // height: 500,
    margin: {
      l: 0,
      r: 0,
      b: 0,
      t: 65
    },
    // paper_bgcolor: 'rgb(10,10,10)',
    paper_bgcolor: 'black',
    scene: {
      xaxis: {
        color: 'white',
        title: 'Feel temp'
      },
      yaxis: {
        color: 'white',
        title: 'Temp'
      },
      zaxis: {
        color: 'white',
        title: 'Humidity'
      }
    },
    camera: {
      up: { x: 10, y: 10, z: 0 },
      center: { x: 0, y: 0, z: 0 },
      eye: { x: 5, y: 5, z: 1 }
    },

  };

  Plotly.newPlot('Div', data, layout);

}


// plot3_hum_temp(bs_feel, bs_temp, bs_hum);
