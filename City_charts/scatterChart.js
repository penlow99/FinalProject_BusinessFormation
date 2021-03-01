function init() {
  // Grab a reference to the dropdown select element
  var selector = d3.select("#selDataset");

  // Use the list of sample names to populate the select options
  d3.csv("samples.json").then((data) => {
    var sampleNames = data.names;

    sampleNames.forEach((sample) => {
      selector
        .append("option")
        .text(sample)
        .property("value", sample);
    });

    // Use the first sample from the list to build the initial plots
    var firstSample = sampleNames[0];
    buildCharts(firstSample);
    buildMetadata(firstSample);
  });
}

// Initialize the dashboard
init();

function optionChanged(newSample) {
  // Fetch new data each time a new sample is selected
  buildMetadata(newSample);
  buildCharts(newSample);

}

// Demographics Panel 
function buildMetadata(sample) {
  d3.json("samples.json").then((data) => {
    var metadata = data.metadata;
    // Filter the data for the object with the desired sample number
    var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
    var result = resultArray[0];
    // Use d3 to select the panel with id of `#sample-metadata`
    var PANEL = d3.select("#sample-metadata");

    // Use `.html("") to clear any existing metadata
    PANEL.html("");

    // Use `Object.entries` to add each key and value pair to the panel
    // Hint: Inside the loop, you will need to use d3 to append new
    // tags for each key-value in the metadata.
    Object.entries(result).forEach(([key, value]) => {
      PANEL.append("h6").text(`${key.toUpperCase()}: ${value}`);
    });

  });
}

// 1. Create the buildCharts function.
function buildCharts(sample) {
  // 2. Use d3.json to load and retrieve the samples.json file 
  d3.json("samples.json").then((data) => {
    // 3. Create a variable that holds the samples array. 
    var samples = data.samples;
    var metadata = data.metadata;
    // 4. Create a variable that filters the samples for the object with the desired sample number.
    var samplesArray = samples.filter(sampleObj => sampleObj.id == sample);
    // Create a variable that filters the metadata array for the object with the desired sample number.
    var metadataArray = metadata.filter(sampleObj => sampleObj.id == sample);
    var FirstMetadata = metadataArray[0];
    //  5. Create a variable that holds the first sample in the array.
    var FirstSample = samplesArray[0];

    // 6. Create variables that hold the otu_ids, otu_labels, and sample_values.
    var ids = FirstSample.otu_ids;
    var labels = FirstSample.otu_labels;
    var values = FirstSample.sample_values;
    var wfreq = FirstMetadata.wfreq
    0
      ;
    console.log(wfreq);
    // 7. Create the yticks for the bar chart.
    // Hint: Get the the top 10 otu_ids and map them in descending order  
    //  so the otu_ids with the most bacteria are last. 
    var TopTenValues = values.sort((a, b) => values[a] - values[b]).slice(0, 10).reverse();
    var yticks = ids.sort((a, b) => values[a] - values[b]).slice(0, 10).map(id => "OTU " + id).reverse();
    var TopTenLabels = labels.sort((a, b) => values[a] - values[b]).slice(0, 10).reverse();
    console.log(TopTenValues);
    console.log(yticks);
    console.log(TopTenLabels);
    // 8. Create the trace for the bar chart. 
    var trace = {
      y: yticks,
      x: TopTenValues,
      type: "bar",
      orientation: 'h',
      text: TopTenLabels

    };
    var barData = [trace];
    // 9. Create the layout for the bar chart. 
    var barLayout = {
      title: "Top 10 Bacteria Cultures Found",
      xaxis: { title: "Number of Cultures" },
      yaxis: { title: "Sample ID" }
    };
    // 10. Use Plotly to plot the data with the layout. 
    Plotly.newPlot("bar", barData, barLayout);
    // 1. Create the trace for the bubble chart.
    var bubbleTrace = {
      x: ids,
      y: values,
      text: labels,
      type: "bubble",
      mode: 'markers',
      marker: {
        size: values,
        color: ids,
        colorScale: "Earth"
      }

    }
    var bubbleData = [bubbleTrace];

    // 2. Create the layout for the bubble chart.
    var bubbleLayout = {
      title: "Bacteria Cultures per Sample",
      xaxis: { title: "OTU ID" },
      hovermode: 'closest'
    };

    // 3. Use Plotly to plot the data with the layout.
    Plotly.newPlot("bubble", bubbleData, bubbleLayout);

    // 4. Create the trace for the gauge chart.
    var gaugeTrace = {
      value: wfreq,
      type: "indicator",
      mode: "gauge+number",
      title: { text: "Belly Button Washing Frequency" },
      gauge: {
        axis: { range: [null, 10] },
        bar: { color: "black" },
        steps: [
          { range: [0, 2], color: "red" },
          { range: [2, 4], color: "orange" },
          { range: [4, 60], color: "yellow" },
          { range: [6, 8], color: "lightgreen" },
          { range: [8, 10], color: "green" }
        ],

      }
    }
    var gaugeData = [gaugeTrace];


    // 5. Create the layout for the gauge chart.
    var gaugeLayout = { width: 450, height: 500, margin: { t: 1, b: 1, l: 1, r: 1 }, paper_bgcolor: "aqua", };

    // 6. Use Plotly to plot the gauge data and layout.
    Plotly.newPlot("gauge", gaugeData, gaugeLayout);
  });
}
