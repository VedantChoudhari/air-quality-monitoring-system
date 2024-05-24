function plot2_feels_like(bs_feel) {
  // Data for the chart
  xValues = [];
  for (var i = 0; i < bs_feel.length; i++) {
    xValues.push(i + 1);
  }

  // Trace for the chart
  var trace = {
    x: xValues,
    y: bs_feel,
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
      title: 'Feels Like Temperature',
    }

  };



  // Plot the chart
  Plotly.newPlot('feel', data, layout);

}


// plot2_feels_like(bs_feel);

