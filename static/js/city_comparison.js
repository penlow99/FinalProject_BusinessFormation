function init() {
    // Grab a reference to the dropdown select element
    var selector = d3.select("#selDataset");
    var selector2 = d3.select("#selDataset2");
    var selector3 = d3.select("#selDataset3");
    var selector4 = d3.select("#selDataset4");
    //     // Use the list of sample names to populate the select options
    Plotly.d3.csv("static/csv/CBSA_MSA.csv", function (err, rows) {
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
        Plotly.d3.csv("static/csv/CBSA_MSA.csv", function (err, rows) {
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
            Plotly.d3.csv("static/csv/CBSA_MSA.csv", function (err, rows) {
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
                Plotly.d3.csv("static/csv/CBSA_MSA.csv", function (err, rows) {
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
    // scatter chart 1
    Plotly.d3.csv("static/csv/employment.csv", function (err, rows) {

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
            title: 'Employment',
            showlegend: false,
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
            },
            annotations: [
                {
                    xref: 'paper',
                    yref: 'paper',
                    x: 0.95,
                    xanchor: 'right',
                    y: 1,
                    yanchor: 'bottom',
                    text: 'Predicted',
                    showarrow: false
                },
                {
                    xref: 'paper',
                    yref: 'paper',
                    x: 0.25,
                    xanchor: 'right',
                    y: 1,
                    yanchor: 'bottom',
                    text: 'Historical',
                    showarrow: false
                }],
            shapes: [
                // highlight after 2019
                {
                    type: 'rect',
                    // x-reference is assigned to the x-values
                    xref: 'x',
                    // y-reference is assigned to the plot paper [0,1]
                    yref: 'paper',
                    x0: '2020',
                    y0: 0,
                    x1: '2024',
                    y1: 1,
                    fillcolor: '#a9a9a9',
                    opacity: 0.2,
                    text: 'Predicted',
                    line: {
                        width: 0
                    }
                }],
        };
        Plotly.newPlot('scatter', data, layout);
    })
    // scatter chart 2
    Plotly.d3.csv("static/csv/unemployment.csv", function (err, rows) {
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
            title: 'Average Unemployment % by year',
            showlegend: false,
            xaxis: {
                title: 'Year',
                tick0: 2010,
                dtick: 1
            },
            yaxis: {
                title: 'Unemployment (%)'
            },
            annotations: [
                {
                    xref: 'paper',
                    yref: 'paper',
                    x: 0.95,
                    xanchor: 'right',
                    y: 1,
                    yanchor: 'bottom',
                    text: 'Predicted',
                    showarrow: false
                },
                {
                    xref: 'paper',
                    yref: 'paper',
                    x: 0.25,
                    xanchor: 'right',
                    y: 1,
                    yanchor: 'bottom',
                    text: 'Historical',
                    showarrow: false
                }],
            shapes: [
                // highlight after 2019
                {
                    type: 'rect',
                    // x-reference is assigned to the x-values
                    xref: 'x',
                    // y-reference is assigned to the plot paper [0,1]
                    yref: 'paper',
                    x0: '2020',
                    y0: 0,
                    x1: '2024',
                    y1: 1,
                    fillcolor: '#a9a9a9',
                    opacity: 0.2,
                    text: 'Predicted',
                    line: {
                        width: 0
                    }
                }],
        };

        Plotly.newPlot('scatter2', data, layout);
    })
    // scatter chart 3
    Plotly.d3.csv("static/csv/gdp.csv", function (err, rows) {
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
            title: 'Yearly Gross Domestic Product',
            showlegend: false,
            xaxis: {
                title: 'Year',
                tick0: 2010,
                dtick: 1
            },
            yaxis: {
                type: 'log',
                title: 'Gross Domestic Product ($)'
            },
            annotations: [
                {
                    xref: 'paper',
                    yref: 'paper',
                    x: 0.90,
                    xanchor: 'right',
                    y: 1,
                    yanchor: 'bottom',
                    text: 'Predicted',
                    showarrow: false
                },
                {
                    xref: 'paper',
                    yref: 'paper',
                    x: 0.25,
                    xanchor: 'right',
                    y: 1,
                    yanchor: 'bottom',
                    text: 'Historical',
                    showarrow: false
                }],
            shapes: [
                // highlight after 2019
                {
                    type: 'rect',
                    // x-reference is assigned to the x-values
                    xref: 'x',
                    // y-reference is assigned to the plot paper [0,1]
                    yref: 'paper',
                    x0: '2020',
                    y0: 0,
                    x1: '2024',
                    y1: 1,
                    fillcolor: '#a9a9a9',
                    opacity: 0.2,
                    text: 'Predicted',
                    line: {
                        width: 0
                    }
                }],
        };
        Plotly.newPlot('scatter3', data, layout);

    })
    // scatter chart 4
    Plotly.d3.csv("static/csv/pop.csv", function (err, rows) {

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
            },

            annotations: [
                {
                    xref: 'paper',
                    yref: 'paper',
                    x: 0.95,
                    xanchor: 'right',
                    y: 1,
                    yanchor: 'bottom',
                    text: 'Predicted',
                    showarrow: false
                },
                {
                    xref: 'paper',
                    yref: 'paper',
                    x: 0.25,
                    xanchor: 'right',
                    y: 1,
                    yanchor: 'bottom',
                    text: 'Historical',
                    showarrow: false
                }],
            shapes: [
                // highlight after 2019
                {
                    type: 'rect',
                    // x-reference is assigned to the x-values
                    xref: 'x',
                    // y-reference is assigned to the plot paper [0,1]
                    yref: 'paper',
                    x0: '2020',
                    y0: 0,
                    x1: '2024',
                    y1: 1,
                    fillcolor: '#a9a9a9',
                    opacity: 0.2,
                    text: 'Predicted',
                    line: {
                        width: 0
                    }
                }],
        };

        Plotly.newPlot('scatter4', data, layout);
    })
    // scatter chart 5
    Plotly.d3.csv("static/csv/business.csv", function (err, rows) {

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
            title: 'Average Number of Business Applications',
            showlegend: false,
            xaxis: {
                title: 'Year',
                tick0: 2010,
                dtick: 1
            },
            yaxis: {
                title: 'Average # of business applications'
            },

            annotations: [
                {
                    xref: 'paper',
                    yref: 'paper',
                    x: 0.95,
                    xanchor: 'right',
                    y: 1,
                    yanchor: 'bottom',
                    text: 'Predicted',
                    showarrow: false
                },
                {
                    xref: 'paper',
                    yref: 'paper',
                    x: 0.25,
                    xanchor: 'right',
                    y: 1,
                    yanchor: 'bottom',
                    text: 'Historical',
                    showarrow: false
                }],
            shapes: [
                // highlight after 2019
                {
                    type: 'rect',
                    // x-reference is assigned to the x-values
                    xref: 'x',
                    // y-reference is assigned to the plot paper [0,1]
                    yref: 'paper',
                    x0: '2020',
                    y0: 0,
                    x1: '2024',
                    y1: 1,
                    fillcolor: '#a9a9a9',
                    opacity: 0.2,
                    text: 'Predicted',
                    line: {
                        width: 0
                    }
                }],
        };

        Plotly.newPlot('scatter5', data, layout);
    })
    // scatter chart 6
    Plotly.d3.csv("static/csv/annual_wage.csv", function (err, rows) {

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
            title: 'Average Annual Wage',
            showlegend: false,
            xaxis: {
                title: 'Year',
                tick0: 2010,
                dtick: 1
            },
            yaxis: {
                title: 'Average annual wage ($)'
            },

            annotations: [
                {
                    xref: 'paper',
                    yref: 'paper',
                    x: 0.95,
                    xanchor: 'right',
                    y: 1,
                    yanchor: 'bottom',
                    text: 'Predicted',
                    showarrow: false
                },
                {
                    xref: 'paper',
                    yref: 'paper',
                    x: 0.25,
                    xanchor: 'right',
                    y: 1,
                    yanchor: 'bottom',
                    text: 'Historical',
                    showarrow: false
                }],
            shapes: [
                // highlight after 2019
                {
                    type: 'rect',
                    // x-reference is assigned to the x-values
                    xref: 'x',
                    // y-reference is assigned to the plot paper [0,1]
                    yref: 'paper',
                    x0: '2020',
                    y0: 0,
                    x1: '2024',
                    y1: 1,
                    fillcolor: '#a9a9a9',
                    opacity: 0.2,
                    text: 'Predicted',
                    line: {
                        width: 0
                    }
                }],
        };

        Plotly.newPlot('scatter6', data, layout);
    })
    // scatter chart 7
    Plotly.d3.csv("static/csv/labor.csv", function (err, rows) {

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
            title: 'Annual Labor Participation',
            showlegend: false,
            xaxis: {
                title: 'Year',
                tick0: 2010,
                dtick: 1
            },
            yaxis: {
                title: 'Labor participation (%)'
            },

            annotations: [
                {
                    xref: 'paper',
                    yref: 'paper',
                    x: 0.95,
                    xanchor: 'right',
                    y: 1,
                    yanchor: 'bottom',
                    text: 'Predicted',
                    showarrow: false
                },
                {
                    xref: 'paper',
                    yref: 'paper',
                    x: 0.25,
                    xanchor: 'right',
                    y: 1,
                    yanchor: 'bottom',
                    text: 'Historical',
                    showarrow: false
                }],
            shapes: [
                // highlight after 2019
                {
                    type: 'rect',
                    // x-reference is assigned to the x-values
                    xref: 'x',
                    // y-reference is assigned to the plot paper [0,1]
                    yref: 'paper',
                    x0: '2020',
                    y0: 0,
                    x1: '2024',
                    y1: 1,
                    fillcolor: '#a9a9a9',
                    opacity: 0.2,
                    text: 'Predicted',
                    line: {
                        width: 0
                    }
                }],
        };

        Plotly.newPlot('scatter7', data, layout);
    })

    //Create the trace for the gauge chart 1.
    Plotly.d3.csv("static/csv/rank.csv", function (err, rows) {

        function unpack(rows, key) {
            return rows.map(function (row) { return row[key]; });
        }

        var rank = unpack(rows, 'Rank_Total')
        var name = unpack(rows, 'NAME')
        // console.log('Index of ' + newSample + ' : ' + name.indexOf(newSample));
        // console.log('Rank of ' + newSample + ' : ' + rank[name.indexOf(newSample)]);
        var result = rows.reduce(function (result, field, index) {
            result[name[index]] = field;
            return result;
        }, {})
        var x = result[sample]
        // console.log(x)
        var gaugeTrace = {
            // title: { text: 'Total Score', font: { size: 12 } },
            value: x["Rank_Total"],
            type: "indicator",
            mode: "gauge+number",
            gauge: {
                axis: { range: [500, 2600] },
                bar: { color: "darkorange" },
                steps: [
                    { range: [500, 1550], color: "silver" },
                    { range: [1550, 2600], color: "grey" }
                ],
                // threshold: {
                //     line: { color: "red", width: 4 },
                //     thickness: 0.75,
                //     value: 1790
                // }
            }
        }
        //console.log(gaugeTrace)
        var gaugeData = [gaugeTrace];


        // Create the layout for the gauge chart.
        var gaugeLayout = { width: 220, height: 140, margin: { t: 0, b: 0, l: 30, r: 0 }, paper_bgcolor: '#f5f5f5' };

        // Use Plotly to plot the gauge data and layout.
        Plotly.newPlot("gauge1", gaugeData, gaugeLayout);
    })

    // // Create the trace for the gauge chart 2.
    Plotly.d3.csv("static/csv/rank.csv", function (err, rows) {

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
        //console.log(x)
        var gaugeTrace = {
            // title: { text: 'Total Score', font: { size: 12 } },
            value: x["Rank_Total"],
            type: "indicator",
            mode: "gauge+number",
            gauge: {
                axis: { range: [500, 2600] },
                bar: { color: "darkorange" },
                steps: [
                    { range: [500, 1550], color: "silver" },
                    { range: [1550, 2600], color: "grey" }
                ],
                // threshold: {
                //     line: { color: "red", width: 4 },
                //     thickness: 0.75,
                //     value: 1790
                // }
            }
        }
        //console.log(gaugeTrace)
        var gaugeData = [gaugeTrace];


        // Create the layout for the gauge chart.
        var gaugeLayout = { width: 220, height: 140, margin: { t: 0, b: 0, l: 30, r: 0 }, paper_bgcolor: '#f5f5f5' };

        // Use Plotly to plot the gauge data and layout.
        Plotly.newPlot("gauge2", gaugeData, gaugeLayout);
    })

    // // 4. Create the trace for the gauge chart 3.
    Plotly.d3.csv("static/csv/rank.csv", function (err, rows) {

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
        //console.log(x)
        var gaugeTrace = {
            // title: { text: 'Total Score', font: { size: 12 } },
            value: x["Rank_Total"],
            type: "indicator",
            mode: "gauge+number",
            gauge: {
                axis: { range: [500, 2600] },
                bar: { color: "darkorange" },
                steps: [
                    { range: [500, 1550], color: "silver" },
                    { range: [1550, 2600], color: "grey" }
                ],
                // threshold: {
                //     line: { color: "red", width: 4 },
                //     thickness: 0.75,
                //     value: 1790
                // }
            }
        }
        //console.log(gaugeTrace)
        var gaugeData = [gaugeTrace];


        // Create the layout for the gauge chart.
        var gaugeLayout = { width: 220, height: 140, margin: { t: 0, b: 0, l: 30, r: 0 }, paper_bgcolor: '#f5f5f5' };

        // Use Plotly to plot the gauge data and layout.
        Plotly.newPlot("gauge3", gaugeData, gaugeLayout);
    })

    // // 4. Create the trace for the gauge chart 4.
    Plotly.d3.csv("static/csv/rank.csv", function (err, rows) {

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
        //console.log(x)
        var gaugeTrace = {
            // title: { text: 'Total Score', font: { size: 12 } },
            value: x["Rank_Total"],
            type: "indicator",
            mode: "gauge+number",
            gauge: {
                axis: { range: [500, 2600] },
                bar: { color: "darkorange" },
                steps: [
                    { range: [500, 1550], color: "silver" },
                    { range: [1550, 2600], color: "grey" }
                ],
                // threshold: {
                //     line: { color: "red", width: 4 },
                //     thickness: 0.75,
                //     value: 1790
                // }
            }
        }
        //console.log(gaugeTrace)
        var gaugeData = [gaugeTrace];


        // Create the layout for the gauge chart.
        var gaugeLayout = { width: 220, height: 140, margin: { t: 0, b: 0, l: 30, r: 0 }, paper_bgcolor: '#f5f5f5' };

        // Use Plotly to plot the gauge data and layout.
        Plotly.newPlot("gauge4", gaugeData, gaugeLayout);
    })

    // // create stacked bar chart
    // Plotly.d3.csv("static/csv/ArimaRank.csv", function (err, rows) {

    //     function unpack(rows, key) {
    //         return rows.map(function (row) { return row[key]; });
    //     }

    //     var trace1 = {
    //         type: "bar",
    //         orientation: 'h',
    //         name: "Population Score",
    //         x: unpack(rows, 'Pop_Score'),
    //         y: unpack(rows, 'MSA'),
    //         marker: { color: 'steelblue' }

    //     }

    //     var trace2 = {
    //         type: "bar",
    //         orientation: 'h',
    //         name: "Unemployment Score",
    //         x: unpack(rows, 'Unem_Score'),
    //         y: unpack(rows, 'MSA'),
    //         marker: { color: 'thistle' }
    //     }
    //     var trace3 = {
    //         type: "bar",
    //         orientation: 'h',
    //         name: "Employment Score",
    //         x: unpack(rows, 'Emp_Score'),
    //         y: unpack(rows, 'MSA'),
    //         marker: { color: 'tomato' }
    //     }
    //     var trace4 = {
    //         type: "bar",
    //         orientation: 'h',
    //         name: "Employment Score",
    //         x: unpack(rows, 'Emp_Score'),
    //         y: unpack(rows, 'MSA'),
    //         marker: { color: 'tan' }
    //     }
    //     var data = [trace1, trace2, trace3, trace4];

    //     var layout = {
    //         title: '2024 Rank',
    //         barmode: 'stack',
    //         legend: {
    //             x: 1,
    //             xanchor: 'right',
    //             y: 1
    //         }

    //     };

    //     Plotly.newPlot('stacked_bar', data, layout);
    // })



}