// Bar Chart
// Bar Chart
const trendsCtx = document.getElementById('trendsChart').getContext('2d');
new Chart(trendsCtx, {
    type: 'bar',
    data: {
        labels: ['13 Mar', '14 Mar', '15 Mar', '16 Mar', '17 Mar', '18 Mar', '19 Mar'],
        datasets: [
            { label: 'Male', data: [20, 25, 28, 15, 38, 30, 25], backgroundColor: '#4318FF', borderRadius: 5 },
            { label: 'Female', data: [15, 30, 35, 25, 42, 35, 32], backgroundColor: '#6AD2FF', borderRadius: 5 },
            { label: 'Children', data: [10, 15, 12, 35, 22, 18, 15], backgroundColor: '#FFB547', borderRadius: 5 }
        ]
    },
    options: { 
        responsive: true, 
        plugins: { 
            legend: { display: false } 
        },
        scales: {
            x: {
                ticks: {
                    font: {
                        size: 8
                    },
                    color: '#94a3b8' 
                },
                grid: {
                    display: false 
                }
            },
            y: {
                ticks: {
                    font: {
                        size: 10 
                    },
                    color: '#94a3b8'
                },
                border: {
                    display: false 
                }
            }
        }
    }
});

// Radial Bar
var radialOptions = {
    series: [60, 25, 10, 5], 
    chart: {
        height: 280,
        type: 'radialBar',
    },
    plotOptions: {
    radialBar: {
        hollow: {
            size: '45%',
        },
        track: {
            background: '#f1f5f9',
            strokeWidth: '100%',
            margin: 3, 
        },
        dataLabels: {
            name: { 
                show: true, 
                fontSize: '12px',
                color: undefined, 
                offsetY: 20
            },
            value: {
                fontSize: '22px',
                fontWeight: '600',
                color: undefined, 
                offsetY: -15,
                formatter: function(val) {
                    return Math.round((val / 100) * 624); 
                }
            },
            total: {
                show: true,
                label: 'Total',
                color: '#94a3b8', 
                fontSize: '12px',
                formatter: function(w) {
                    return '624';
                }
            },
        }
    }
},
    colors: ['#4A72FF', '#50CD89', '#FFAD5F', '#F1416C'],
    stroke: {
        lineCap: 'round'
    },
    labels: ['General Medicine', 'Orthopedics', 'Cardiology', 'Gynecology'],
};

var radialChart = new ApexCharts(document.querySelector("#chart"), radialOptions);
radialChart.render();

const ctx = document.getElementById('workforceChart').getContext('2d');
new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['On Duty', 'Off Duty', 'On Leave'],
        datasets: [{
            label: 'Personnel Count',
            data: [90, 40, 20], 
            backgroundColor: ['#50CD89', '#F1416C', '#FFAD5F'], 
            borderRadius: 6,
            barThickness: 5
        }]
    },
    options: {
        indexAxis: 'y', 
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { display: false }
        },
        scales: {
            x: { 
                beginAtZero: true,
                max: 150,
                grid: { display: false }
            },
            y: {
                grid: { display: false }
            }
        }
    }
});