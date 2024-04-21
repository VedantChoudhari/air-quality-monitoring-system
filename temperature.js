
// Data for the chart
var xValues = [1, 2, 3, 4, 5]; // X-axis data
var yValues = [10, 15, 13, 17, 16]; // Y-axis data

// Trace for the chart
var trace = {
  x: xValues,
  y: yValues,
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
    title:'Time' // X-axis text color
  },
  yaxis: {
    color: 'white', // Y-axis text color
    title:'Temperature',
  }
  
};



// Plot the chart
Plotly.newPlot('scichart', data, layout);
