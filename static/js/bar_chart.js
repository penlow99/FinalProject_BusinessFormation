
var ctx = document.getElementById('top10_BarChart').getContext('2d');

Chart.defaults.global.defaultFontColor = '#8C9091';

//round the score values
var scores = Object.values(top10['Total_Score']);
let x = 0;
while (x < scores.length) {
    scores[x] = Math.round(scores[x]);
    x++;
}

var myBarChart = new Chart(ctx, {
    type: 'horizontalBar',
    data: {
        labels: Object.values(top10['MSA']),
        datasets: [{
            label: 'Ranking Score',
            data: scores,
            backgroundColor: [
                '#4747C1',
                '#77C6FF',
                '#4747C1',
                '#77C6FF',
                '#4747C1',
                '#77C6FF',
                '#4747C1',
                '#77C6FF',
                '#4747C1',
                '#77C6FF'                
            ]
        }]
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
                    labelString: 'Total Score'
                },
                gridLines: {
                    display: true,
                    drawBorder: true,
                    drawOnChartArea: false
                },
                ticks: {
                    beginAtZero: false,
                    maxTicksLimit: 10,
                    
                }
            }],
            yAxes: [{
                gridLines: {
                    display: true,
                    drawBorder: true,
                    drawOnChartArea: false
                }
            }]
        },
        legend: {
            display: false,
        },
        maintainAspectRatio: false,
        animation: {
            duration: 800,
            onComplete: function () {
                var chartInstance = this.chart,
                    ctx = chartInstance.ctx;
                ctx.font = Chart.helpers.fontString(12, 'bold', Chart.defaults.global.defaultFontFamily);
                ctx.textAlign = 'center';
                ctx.textBaseline = 'bottom';
                ctx
    
                this.data.datasets.forEach(function (dataset, i) {
                    var meta = chartInstance.controller.getDatasetMeta(i);
                    meta.data.forEach(function (bar, index) {
                        var data = dataset.data[index];
                        ctx.fillStyle = "#182023";                            
                        ctx.fillText(data, bar._model.x - 20, bar._model.y + 7);
                    });
                });
            }
        }
    }
});

// backgroundColor: [
//     '#FFA56D',
//     '#8CC152',
//     '#5D9CEC',
//     '#FFDE93',
//     '#37BC9B',
//     '#FFA56D',
//     '#8CC152',
//     '#5D9CEC',
//     '#FFDE93',
//     '#37BC9B'                
// ]