function plot2_feels_like(bs_feel) {
  // Data for the chart
  const len = bs_feel.length;
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
  xValues.push('23:59');


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
      title: 'Time',
      tickvals: ["0:00", "4:00", "8:00", "12:00", "16:00", "20:00", "23:59"]
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

