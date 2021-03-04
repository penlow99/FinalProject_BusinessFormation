
var ctx = document.getElementById('top10_BarChart').getContext('2d');

Chart.defaults.global.defaultFontColor = '#b3b5b6';

//round the score values
var scores = Object.values(top10['Total_Score']);
let x = 0;
while (x < scores.length) {
    scores[x] = Math.round(scores[x]);
    x++;
}

//var arrColors = ["#3434b5", "#5151c0", "#6e6eca", "#8b8bd5", "#a8a8df", "#c5c5ea", "#e2e2f4", "#ffffff"]
var arrColors = ["#195785", "#3f68a0", "#6E81B5", "#B1B1D3", "#79d6b2", "#a6e4cc", "#d2f1e5", "#ffffff"]

var arrGDP = Object.values(top10['GDP_Score']);
var arrPop = Object.values(top10['Pop_Score']);
var arrUnemp = Object.values(top10['Unem_Score']);
var arrEmp = Object.values(top10['Emp_Score']);

var myBarChart = new Chart(ctx, {
    type: 'horizontalBar',
    data: {
        labels: Object.values(top10['MSA']),
        datasets: [{
            label: 'GDP Score',
            backgroundColor: arrColors[0],
            data: arrGDP
          }, {
            label: 'Population Score',
            backgroundColor: arrColors[1],
            data: arrPop
          }, {
            label: 'Unemployment Score',
            backgroundColor: arrColors[2],
            data: arrUnemp
          }, {
            label: 'Employment Score',
            backgroundColor: arrColors[3],
            data: arrEmp
          }, {
            label: 'Mean Wage Score',
            backgroundColor: arrColors[4],
            data: arrGDP
          }, {
            label: 'CPI Score',
            backgroundColor: arrColors[5],
            data: arrPop
          }, {
            label: 'Labor Participation Score',
            backgroundColor: arrColors[6],
            data: arrUnemp
          }, {
            label: 'Business Applications Score',
            backgroundColor: arrColors[7],
            data: arrEmp
          }
        ],
    },
    options: {
        title: {
            display: true,
            text: 'Top 10 Emergent US Metro Areas',
            fontSize: 20
        },
        scales: {
            xAxes: [{
                scaleLabel: {
                    display: true,
                    labelString: 'Total Score', 
                    fontColor: '#79D6B2',
                    fontSize: 18,
                    fontStyle: 'bold'
                },
                gridLines: {
                    display: true,
                    drawBorder: true,
                    drawOnChartArea: false
                },
                ticks: {
                    beginAtZero: false,
                    maxTicksLimit: 10
                },
                stacked: true
            }],
            yAxes: [{
                gridLines: {
                    display: true,
                    drawBorder: true,
                    drawOnChartArea: false 
                },
                stacked: true
            }]
        },
        legend: {
            display: true,
        },
        maintainAspectRatio: false,
        animation: {
            duration: 850,
            onComplete: function () {
                var chartInstance = this.chart,
                ctx = chartInstance.ctx;
                ctx.font = Chart.helpers.fontString(12, 'bold', Chart.defaults.global.defaultFontFamily);
                ctx.textAlign = 'center';
                ctx.textBaseline = 'bottom';
                ctx
                
                this.data.datasets.forEach(function (dataset, i) {
                    var meta = chartInstance.controller.getDatasetMeta(i);
                    var arrXY = [];
                    meta.data.forEach(function (bar, index) {
                        var data = dataset.data[index];
                        ctx.fillStyle = "#182023";                          
                        ctx.fillText(data, bar._model.x - 20, bar._model.y + 7);
                        if (i == 7) {
                            arrXY.push([bar._model.x + 15, bar._model.y + 7])
                        }
                    });
                    // set the total at the end of each stack
                    arrXY.forEach(function (value, i) {
                        //console.log(i, value);
                        ctx.fillStyle = '#79D6B2';
                        ctx.fillText(scores[i], value[0], value[1]);
                    })                    
                });
            }
        },
        tooltips: {
            mode: 'label',
            backgroundColor: '#2f3133',
            callbacks: {
                label: function(tooltipItem, data) {
                    var measure = data.datasets[tooltipItem.datasetIndex].label;
                    var data_value = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
            
                    // Loop through all datasets to get the actual total of the index
                    var total = 0;
                    for (var i = 0; i < data.datasets.length; i++)
                        total += data.datasets[i].data[tooltipItem.index];
            
                    // If it is not the last dataset, you display it as you usually do
                    if (tooltipItem.datasetIndex != data.datasets.length - 1) {
                        return measure + " : " + data_value;
                    } else { // .. else, you display the dataset and the total, using an array
                        return [measure + " : " + data_value, "Total : " + total];
                    }
                }
            }
        }
    }
});
