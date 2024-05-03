function plot2_humidity(bs_hum) {
  // Data for the chart
  xValues = [];
  for (var i = 0; i < bs_hum.length; i++) {
    xValues.push(i + 1);
  }

  // Trace for the chart
  var trace = {
    x: xValues,
    y: bs_hum,
    type: 'scatter',
    mode: 'lines+markers',
    marker: {
      color: 'white'
    },
    line: {
      color: 'lightgreen' // Line color
    }
  };

  // Data array
  var data = [trace];

  var layout = {
    plot_bgcolor: 'black',
    paper_bgcolor: 'black',
    xaxis: {
      color: 'white',
      title: 'Time' // X-axis text color
    },
    yaxis: {
      color: 'white', // Y-axis text color
      title: 'Humidity',
    }

  };



  // Plot the chart
  Plotly.newPlot('hum', data, layout);

}


// plot2_humidity(bs_hum);

