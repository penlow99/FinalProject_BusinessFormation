function init() {
    // Grab a reference to the dropdown select element
    var selector = d3.select("#selDataset");

    //     // Use the list of sample names to populate the select options
    Plotly.d3.csv("employment_long.csv", function (err, rows) {
        function unpack(rows, key) {
            return rows.map(function (row) { return row[key]; });
        }
        var sampleNames = unpack(rows, 'CBSA_Code');
        //     console.log(sampleNames);
        // })
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
    // buildMetadata(newSample);
    buildCharts(newSample);

}

// 1. Create the buildCharts function.
function buildCharts(sample) {

    Plotly.d3.csv("employment_long.csv", function (err, rows) {

        function unpack(rows, key) {
            return rows.map(function (row) { return row[key]; });
        }


        var trace1 = {
            type: "scatter",
            mode: "lines+markers",
            name: '10180',
            x: unpack(rows, 'year'),
            y: unpack(rows, 'employment'),
            line: { color: '#17BECF' },
            transforms: [
                {
                    type: 'filter',
                    target: unpack(rows, 'CBSA_Code'),
                    operation: '=',
                    value: sample
                },]
        }

        var trace2 = {
            type: "scatter",
            mode: "lines+markers",
            name: '10540',
            x: unpack(rows, 'year'),
            y: unpack(rows, 'employment'),
            line: { color: '#7F7F7F' },
            transforms: [
                {
                    type: 'filter',
                    target: unpack(rows, 'CBSA_Code'),
                    operation: '=',
                    value: '10540'
                },]
        }

        var data = [trace1, trace2];

        var layout = {
            title: 'Employment',
        };

        Plotly.newPlot('scatter', data, layout);
    })
}