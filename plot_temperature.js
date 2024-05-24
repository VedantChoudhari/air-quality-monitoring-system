function plot2_temperature(bs_temp) {
  // Data for the chart
  const len = bs_hum.length;
  const div = Math.floor(len / 24);
  let j = 0;
  let num = 0;
  xValues = [];

  for (let i = 0; i < len - 1; i++) {
    if (i == num && j != 24) {
      xValues.push(`${j}:00`);
      num += div;
      j++;
    }
    else {
      xValues.push("xx:" + i);
    }
  }
  xValues.push('24:00');

  // Trace for the chart
  var trace = {
    x: xValues,
    y: bs_temp,
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
      title: 'Temperature',
    },

    // aspectratio: { ratio: 1 }

  };



  // Plot the chart
  Plotly.newPlot('temp', data, layout);

}

// plot2_temperature(bs_temp);

