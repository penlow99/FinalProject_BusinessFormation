var ctx = document.getElementById('top10_BarChart').getContext('2d');

Chart.defaults.global.defaultFontColor = '#8C9091';

var myBarChart = new Chart(ctx, {
    type: 'horizontalBar',
    data: {
        labels: ['Austin-Roundrock', 'Seattle-Tacoma', 'Dallas-Ft. Worth', 'New York', 'Chicago', 'Nashville', 'Atlanta', 'Phoenix', 'Las Vegas', 'San Francisco'],
        datasets: [{
            label: 'Ranking Score',
            data: [120, 115, 107, 101, 92, 83, 74, 68, 65, 62],
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
                gridLines: {
                    display: true,
                    drawBorder: true,
                    drawOnChartArea: false
                },
                ticks: {
                    beginAtZero: true,
                    suggestedMax: 130,
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
        maintainAspectRatio: false
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