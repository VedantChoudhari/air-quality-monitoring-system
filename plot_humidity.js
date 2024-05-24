function plot2_humidity(bs_hum) {
  // Data for the chart
  // xValues = [];
  // for (var i = 0; i < bs_hum.length; i++) {
  //   xValues.push(i + 1);
  // }


  // below thing will create random labels for other readings and exact labels for reading which should be shown on graph like 04:00 etc.
  // all labels should be unique for x axis else plotly will plot multiple points on same x-axis point.
  const len = bs_hum.length;
  const div = Math.floor(len / 24);
  let j = 0;
  let num = 0;
  xValues = [];
  
  for (let i = 0; i < len - 1; i++) {
    if (i == num && j != 24) {
      xValues.push(`${j}:00`);      // 4:00
      num += div;
      j++;
    }
    else {
      xValues.push("xx:" + i);      // xx:32
    }
  }
  xValues.push('23:59');            // 23:59 last one!


  // Trace for the chart
  var trace = {
    x: xValues,
    y: bs_hum,
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
      color: 'white',
      title: 'Humidity',
    }

  };



  // Plot the chart
  Plotly.newPlot('hum', data, layout);

}


// plot2_humidity(bs_hum);

