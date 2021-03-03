function init() {
    // Grab a reference to the dropdown select element
    var selector = d3.select("#selDataset");
    var selector2 = d3.select("#selDataset2");
    var selector3 = d3.select("#selDataset3");
    var selector4 = d3.select("#selDataset4");
    //     // Use the list of sample names to populate the select options
    Plotly.d3.csv("CBSA_code_to_name.csv", function (err, rows) {
        function unpack(rows, key) {
            return rows.map(function (row) { return row[key]; });
        }
        var sampleNames = unpack(rows, 'MSA');
        // var CBSAnames = unpack(rows, 'NAME')
        //     console.log(sampleNames);
        // })
        sampleNames.forEach((sample) => {
            selector
                .append("option")
                .text(sample)
                .property("value", sample);
        });

        // Grab a reference to the dropdown select element

        //     // Use the list of sample names to populate the select options
        Plotly.d3.csv("CBSA_code_to_name.csv", function (err, rows) {
            function unpack(rows, key) {
                return rows.map(function (row) { return row[key]; });
            }
            var sampleNames2 = unpack(rows, 'MSA');

            sampleNames2.forEach((sample2) => {
                selector2
                    .append("option")
                    .text(sample2)
                    .property("value", sample2);
            });




            //     // Use the list of sample names to populate the select options
            Plotly.d3.csv("CBSA_code_to_name.csv", function (err, rows) {
                function unpack(rows, key) {
                    return rows.map(function (row) { return row[key]; });
                }
                var sampleNames3 = unpack(rows, 'MSA');

                sampleNames3.forEach((sample3) => {
                    selector3
                        .append("option")
                        .text(sample3)
                        .property("value", sample3);
                });


                //     // Use the list of sample names to populate the select options
                Plotly.d3.csv("CBSA_code_to_name.csv", function (err, rows) {
                    function unpack(rows, key) {
                        return rows.map(function (row) { return row[key]; });
                    }
                    var sampleNames4 = unpack(rows, 'MSA');

                    sampleNames4.forEach((sample4) => {
                        selector4
                            .append("option")
                            .text(sample4)
                            .property("value", sample4);



                    });

                    var firstSample = sampleNames[0];
                    var firstSample2 = sampleNames2[0];
                    var firstSample3 = sampleNames3[0];
                    var firstSample4 = sampleNames4[0];
                    buildCharts(firstSample, firstSample2, firstSample3, firstSample4);
                });


            });

        });

    });

}






// Initialize the dashboard
init();
var newSample = 'Select MSA';
var newSample2 = 'Select MSA';
var newSample3 = 'Select MSA';
var newSample4 = 'Select MSA';
function optionChanged1(newSampleTemp) {
    // Fetch new data each time a new sample is selected
    // buildMetadata(newSample);
    newSample = newSampleTemp;
    rebuildCharts(newSample, newSample2, newSample3, newSample4);

}
function optionChanged2(newSampleTemp2) {
    // Fetch new data each time a new sample is selected
    // buildMetadata(newSample);
    newSample2 = newSampleTemp2;
    rebuildCharts(newSample, newSample2, newSample3, newSample4);

}
function optionChanged3(newSampleTemp3) {
    // Fetch new data each time a new sample is selected
    // buildMetadata(newSample);
    newSample3 = newSampleTemp3;
    rebuildCharts(newSample, newSample2, newSample3, newSample4);

}
function optionChanged4(newSampleTemp4) {
    // Fetch new data each time a new sample is selected
    // buildMetadata(newSample);
    newSample4 = newSampleTemp4;
    rebuildCharts(newSample, newSample2, newSample3, newSample4);
}
function rebuildCharts(newSample, newSample2, newSample3, newSample4) {
    // Fetch new data each time a new sample is selected
    // buildMetadata(newSample);
    buildCharts(newSample, newSample2, newSample3, newSample4);

}




// 1. Create the buildCharts function.
function buildCharts(sample, sample2, sample3, sample4) {

    Plotly.d3.csv("Employment_clean_monthlyV3.csv", function (err, rows) {

        function unpack(rows, key) {
            return rows.map(function (row) { return row[key]; });
        }
        var trace = {
            type: "scatter",
            mode: "lines+markers",
            name: sample,
            x: unpack(rows, 'year'),
            y: unpack(rows, 'value'),
            line: { color: 'steelblue' },
            transforms: [
                {
                    type: 'filter',
                    target: unpack(rows, 'MSA'),
                    operation: '=',
                    value: sample
                },]
        }
        var trace2 = {
            type: "scatter",
            mode: "lines+markers",
            name: sample2,
            x: unpack(rows, 'year'),
            y: unpack(rows, 'value'),
            line: { color: 'tan' },
            transforms: [
                {
                    type: 'filter',
                    target: unpack(rows, 'MSA'),
                    operation: '=',
                    value: sample2
                },]
        }
        var trace3 = {
            type: "scatter",
            mode: "lines+markers",
            name: sample3,
            x: unpack(rows, 'year'),
            y: unpack(rows, 'value'),
            line: { color: 'thistle' },
            transforms: [
                {
                    type: 'filter',
                    target: unpack(rows, 'MSA'),
                    operation: '=',
                    value: sample3
                },]
        }
        var trace4 = {
            type: "scatter",
            mode: "lines+markers",
            name: sample4,
            x: unpack(rows, 'year'),
            y: unpack(rows, 'value'),
            line: { color: 'tomato' },
            transforms: [
                {
                    type: 'filter',
                    target: unpack(rows, 'MSA'),
                    operation: '=',
                    value: sample4
                },]
        }
        var data = [trace, trace2, trace3, trace4];
        var layout = {
            showlegend: false,
            title: 'Employment',
            xaxis: {
                title: 'Year',
                tick0: 2001,
                dtick: 1
            },
            yaxis: {
                title: 'Yearly Average Employment',
                autorange: true,
                type: 'log',
                range: [3, 6]
            }
        };
        Plotly.newPlot('scatter2', data, layout);
    })
    Plotly.d3.csv("UnemploymentRateMonthly_Avg.csv", function (err, rows) {
        function unpack(rows, key) {
            return rows.map(function (row) { return row[key]; });
        }
        var trace = {
            type: "scatter",
            mode: "lines+markers",
            name: sample,
            x: unpack(rows, 'year'),
            y: unpack(rows, 'value'),
            line: { color: 'steelblue' },
            transforms: [
                {
                    type: 'filter',
                    target: unpack(rows, 'MSA'),
                    operation: '=',
                    value: sample
                },]
        }
        var trace2 = {
            type: "scatter",
            mode: "lines+markers",
            name: sample2,
            x: unpack(rows, 'year'),
            y: unpack(rows, 'value'),
            line: { color: 'tan' },
            transforms: [
                {
                    type: 'filter',
                    target: unpack(rows, 'MSA'),
                    operation: '=',
                    value: sample2
                },]
        }
        var trace3 = {
            type: "scatter",
            mode: "lines+markers",
            name: sample3,
            x: unpack(rows, 'year'),
            y: unpack(rows, 'value'),
            line: { color: 'thistle' },
            transforms: [
                {
                    type: 'filter',
                    target: unpack(rows, 'MSA'),
                    operation: '=',
                    value: sample3
                },]
        }
        var trace4 = {
            type: "scatter",
            mode: "lines+markers",
            name: sample4,
            x: unpack(rows, 'year'),
            y: unpack(rows, 'value'),
            line: { color: 'tomato' },
            transforms: [
                {
                    type: 'filter',
                    target: unpack(rows, 'MSA'),
                    operation: '=',
                    value: sample4
                },]
        }

        var data = [trace, trace2, trace3, trace4];
        var layout = {
            showlegend: false,
            title: 'Average Unemployment % by year',
            xaxis: {
                title: 'Year',
                tick0: 2015,
                dtick: 1
            },
            yaxis: {
                title: 'Unemployment (%)'
            }
        };

        Plotly.newPlot('scatter', data, layout);
    })
    Plotly.d3.csv("GDP_longV5.csv", function (err, rows) {
        function unpack(rows, key) {
            return rows.map(function (row) { return row[key]; });
        }
        var trace = {
            type: "scatter",
            mode: "lines+markers",
            name: sample,
            x: unpack(rows, 'year'),
            y: unpack(rows, 'GDP'),
            line: { color: 'steelblue' },
            transforms: [
                {
                    type: 'filter',
                    target: unpack(rows, 'NAME'),
                    operation: '=',
                    value: sample
                },]
        }
        var trace2 = {
            type: "scatter",
            mode: "lines+markers",
            name: sample2,
            x: unpack(rows, 'year'),
            y: unpack(rows, 'GDP'),
            line: { color: 'tan' },
            transforms: [
                {
                    type: 'filter',
                    target: unpack(rows, 'NAME'),
                    operation: '=',
                    value: sample2
                },]
        }
        var trace3 = {
            type: "scatter",
            mode: "lines+markers",
            name: sample3,
            x: unpack(rows, 'year'),
            y: unpack(rows, 'GDP'),
            line: { color: 'thistle' },
            transforms: [
                {
                    type: 'filter',
                    target: unpack(rows, 'NAME'),
                    operation: '=',
                    value: sample3
                },]
        }
        var trace4 = {
            type: "scatter",
            mode: "lines+markers",
            name: sample4,
            x: unpack(rows, 'year'),
            y: unpack(rows, 'GDP'),
            line: { color: 'tomato' },
            transforms: [
                {
                    type: 'filter',
                    target: unpack(rows, 'NAME'),
                    operation: '=',
                    value: sample4
                },]
        }

        var data = [trace, trace2, trace3, trace4];
        var layout = {
            showlegend: false,
            title: 'Yearly Gross Domestic Product',
            xaxis: {
                title: 'Year',
                tick0: 2010,
                dtick: 1
            },
            yaxis: {
                type: 'log',
                title: 'Gross Domestic Product ($)'
            }
        };
        Plotly.newPlot('scatter3', data, layout);

    })

    Plotly.d3.csv("population_longV2.csv", function (err, rows) {

        function unpack(rows, key) {
            return rows.map(function (row) { return row[key]; });
        }

        var trace = {
            type: "scatter",
            mode: "lines+markers",
            name: sample,
            x: unpack(rows, 'year'),
            y: unpack(rows, 'Population'),
            line: { color: 'steelblue' },
            transforms: [
                {
                    type: 'filter',
                    target: unpack(rows, 'NAME'),
                    operation: '=',
                    value: sample
                },]
        }

        var trace2 = {
            type: "scatter",
            mode: "lines+markers",
            name: sample2,
            x: unpack(rows, 'year'),
            y: unpack(rows, 'Population'),
            line: { color: 'tan' },
            transforms: [
                {
                    type: 'filter',
                    target: unpack(rows, 'NAME'),
                    operation: '=',
                    value: sample2
                },]
        }
        var trace3 = {
            type: "scatter",
            mode: "lines+markers",
            name: sample3,
            x: unpack(rows, 'year'),
            y: unpack(rows, 'Population'),
            line: { color: 'thistle' },
            transforms: [
                {
                    type: 'filter',
                    target: unpack(rows, 'NAME'),
                    operation: '=',
                    value: sample3
                },]
        }
        var trace4 = {
            type: "scatter",
            mode: "lines+markers",
            name: sample4,
            x: unpack(rows, 'year'),
            y: unpack(rows, 'Population'),
            line: { color: 'tomato' },
            transforms: [
                {
                    type: 'filter',
                    target: unpack(rows, 'NAME'),
                    operation: '=',
                    value: sample4
                },]
        }
        var data = [trace, trace2, trace3, trace4];

        var layout = {
            title: 'Population',
            showlegend: false,
            xaxis: {
                title: 'Year',
                tick0: 2010,
                dtick: 1
            },
            yaxis: {
                type: 'log',
                title: 'Population'
            }
        };

        Plotly.newPlot('scatter4', data, layout);
    })
    //Create the trace for the gauge chart 1.
    Plotly.d3.csv("rank.csv", function (err, rows) {

        function unpack(rows, key) {
            return rows.map(function (row) { return row[key]; });
        }

        var rank = unpack(rows, 'Rank_Total')
        var name = unpack(rows, 'NAME')

        var result = rows.reduce(function (result, field, index) {
            result[name[index]] = field;
            return result;
        }, {})

        var x = result[sample]
        console.log(x)
        var gaugeTrace = {
            title: { text: 'Rank Total', font: { size: 14 } },
            value: x["Rank_Total"],
            type: "indicator",
            mode: "gauge+number",
            gauge: {
                axis: { range: [100, 1500] },
                bar: { color: "darkorange" },
                steps: [
                    { range: [100, 800], color: "silver" },
                    { range: [800, 1500], color: "grey" }
                ],
                threshold: {
                    line: { color: "red", width: 4 },
                    thickness: 0.75,
                    value: 1200
                }
            }
        }
        console.log(gaugeTrace)
        var gaugeData = [gaugeTrace];


        // Create the layout for the gauge chart.
        var gaugeLayout = { width: 140, height: 140, margin: { t: 1, b: 1, l: 1, r: 1 }, paper_bgcolor: '#f5f5f5' };

        // Use Plotly to plot the gauge data and layout.
        Plotly.newPlot("gauge1", gaugeData, gaugeLayout);
    })

    // // Create the trace for the gauge chart 2.
    Plotly.d3.csv("rank.csv", function (err, rows) {

        function unpack(rows, key) {
            return rows.map(function (row) { return row[key]; });
        }

        var rank = unpack(rows, 'Rank_Total')
        var name = unpack(rows, 'NAME')

        var result = rows.reduce(function (result, field, index) {
            result[name[index]] = field;
            return result;
        }, {})

        var x = result[sample2]
        console.log(x)
        var gaugeTrace = {
            title: { text: 'Rank Total', font: { size: 14 } },
            value: x["Rank_Total"],
            type: "indicator",
            mode: "gauge+number",
            gauge: {
                axis: { range: [100, 1500] },
                bar: { color: "darkorange" },
                steps: [
                    { range: [100, 800], color: "silver" },
                    { range: [800, 1500], color: "grey" }
                ],
                threshold: {
                    line: { color: "red", width: 4 },
                    thickness: 0.75,
                    value: 1200
                }
            }
        }
        console.log(gaugeTrace)
        var gaugeData = [gaugeTrace];


        // Create the layout for the gauge chart.
        var gaugeLayout = { width: 140, height: 140, margin: { t: 1, b: 1, l: 1, r: 1 }, paper_bgcolor: '#f5f5f5' };

        // Use Plotly to plot the gauge data and layout.
        Plotly.newPlot("gauge2", gaugeData, gaugeLayout);
    })
    // // 4. Create the trace for the gauge chart 3.
    Plotly.d3.csv("rank.csv", function (err, rows) {

        function unpack(rows, key) {
            return rows.map(function (row) { return row[key]; });
        }

        var rank = unpack(rows, 'Rank_Total')
        var name = unpack(rows, 'NAME')

        var result = rows.reduce(function (result, field, index) {
            result[name[index]] = field;
            return result;
        }, {})

        var x = result[sample3]
        console.log(x)
        var gaugeTrace = {
            title: { text: 'Rank Total', font: { size: 14 } },
            value: x["Rank_Total"],
            type: "indicator",
            mode: "gauge+number",
            gauge: {
                axis: { range: [100, 1500] },
                bar: { color: "darkorange" },
                steps: [
                    { range: [100, 800], color: "silver" },
                    { range: [800, 1500], color: "grey" }
                ],
                threshold: {
                    line: { color: "red", width: 4 },
                    thickness: 0.75,
                    value: 1200
                }
            }
        }
        console.log(gaugeTrace)
        var gaugeData = [gaugeTrace];


        // Create the layout for the gauge chart.
        var gaugeLayout = { width: 140, height: 140, margin: { t: 1, b: 1, l: 1, r: 1 }, paper_bgcolor: '#f5f5f5' };

        // Use Plotly to plot the gauge data and layout.
        Plotly.newPlot("gauge3", gaugeData, gaugeLayout);
    })
    // // 4. Create the trace for the gauge chart 4.
    Plotly.d3.csv("rank.csv", function (err, rows) {

        function unpack(rows, key) {
            return rows.map(function (row) { return row[key]; });
        }

        var rank = unpack(rows, 'Rank_Total')
        var name = unpack(rows, 'NAME')

        var result = rows.reduce(function (result, field, index) {
            result[name[index]] = field;
            return result;
        }, {})

        var x = result[sample4]
        console.log(x)
        var gaugeTrace = {
            title: { text: 'Rank Total', font: { size: 14 } },
            value: x["Rank_Total"],
            type: "indicator",
            mode: "gauge+number",
            gauge: {
                axis: { range: [100, 1500] },
                bar: { color: "darkorange" },
                steps: [
                    { range: [100, 800], color: "silver" },
                    { range: [800, 1500], color: "grey" }
                ],
                threshold: {
                    line: { color: "red", width: 4 },
                    thickness: 0.75,
                    value: 1200
                }
            }
        }
        console.log(gaugeTrace)
        var gaugeData = [gaugeTrace];


        // Create the layout for the gauge chart.
        var gaugeLayout = { width: 140, height: 140, margin: { t: 1, b: 1, l: 1, r: 1 }, paper_bgcolor: '#f5f5f5' };

        // Use Plotly to plot the gauge data and layout.
        Plotly.newPlot("gauge4", gaugeData, gaugeLayout);
    })




}