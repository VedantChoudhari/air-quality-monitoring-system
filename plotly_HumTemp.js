function plot3_hum_temp(bs_temp, bs_hum, bs_feel) {
  var trace = {
    x: bs_temp,
    y: bs_hum,
    z: bs_feel,

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
      t: 0
    },

    // paper_bgcolor: 'rgb(10,10,10)',
    paper_bgcolor: 'black',

    scene: {
      xaxis: {
        color: 'white',
        title: 'Temperature'
      },
      yaxis: {
        color: 'white',
        title: 'Humidity'
      },
      zaxis: {
        color: 'white',
        title: 'Temperature Feels like'
      }
    },

    // IDK why camera is not working?
    // camera: {
    //   center: { x: 50, y: 0, z: 0 },
    //   eye: { x: 100, y: 105, z: 125 },
    //   up: { x: 1, y: 0, z: 0 }
    // },
  };

  Plotly.newPlot('Div', data, layout);
}


// plot3_hum_temp(bs_feel, bs_temp, bs_hum);
