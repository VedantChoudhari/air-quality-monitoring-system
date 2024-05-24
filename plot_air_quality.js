function plot2_air_quality(bs_mq135) {
  // Data for the chart
  xValues = [];
  for (var i = 0; i < bs_mq135.length; i++) {
    xValues.push(i + 1);
  }

  // Trace for the chart
  var trace = {
    x: xValues,
    y: bs_mq135,
    type: 'scatter',
    mode: 'lines+markers',
    marker: {
      color: 'white',
      size: 3
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
      title: 'Air Quality',
    }

  };



  // Plot the chart
  Plotly.newPlot('airquality', data, layout);

}


// plot2_air_quality(bs_mq135);

