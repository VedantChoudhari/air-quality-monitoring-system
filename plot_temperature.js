function plot2_temperature(bs_temp) {
  // Data for the chart
  xValues = [];
  for (var i = 0; i < bs_temp.length; i++) {
    xValues.push(i + 1);
  }

  // Trace for the chart
  var trace = {
    x: xValues,
    y: bs_temp,
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
      title: 'Temperature',
    },

    // aspectratio: { ratio: 1 }

  };



  // Plot the chart
  Plotly.newPlot('temp', data, layout);

}

// plot2_temperature(bs_temp);

