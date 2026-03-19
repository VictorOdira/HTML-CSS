
// Patient Trends Bar Chart - Enhanced
const trendsCtx = document.getElementById('trendsChart').getContext('2d');
new Chart(trendsCtx, {
    type: 'bar',
    data: {
        labels: ['13 Mar', '14 Mar', '15 Mar', '16 Mar', '17 Mar', '18 Mar', '19 Mar'],
        datasets: [
            { 
                label: 'Male', 
                data: [20, 25, 28, 15, 38, 30, 25], 
                backgroundColor: '#4318FF', 
                borderRadius: 6,
                borderSkipped: false,
                barPercentage: 0.7,
                categoryPercentage: 0.8
            },
            { 
                label: 'Female', 
                data: [15, 30, 35, 25, 42, 35, 32], 
                backgroundColor: '#6AD2FF', 
                borderRadius: 6,
                borderSkipped: false,
                barPercentage: 0.7,
                categoryPercentage: 0.8
            },
            { 
                label: 'Children', 
                data: [10, 15, 12, 35, 22, 18, 15], 
                backgroundColor: '#FFB547', 
                borderRadius: 6,
                borderSkipped: false,
                barPercentage: 0.7,
                categoryPercentage: 0.8
            }
        ]
    },
    options: { 
        responsive: true, 
        maintainAspectRatio: false,
        plugins: { 
            legend: { display: false },
            tooltip: {
                backgroundColor: 'rgba(30, 41, 59, 0.9)',
                padding: 12,
                cornerRadius: 8,
                titleFont: { size: 13, weight: '600' },
                bodyFont: { size: 12 },
                displayColors: true,
                boxPadding: 6
            }
        },
        scales: {
            x: {
                ticks: {
                    font: {
                        size: 6,
                        family: 'Plus Jakarta Sans'
                    },
                    color: '#64748b'
                },
                grid: {
                    display: false,
                    drawBorder: false
                }
            },
            y: {
                beginAtZero: true,
                ticks: {
                    font: {
                        size: 6,
                        family: 'Plus Jakarta Sans'
                    },
                    color: '#64748b',
                    padding: 10
                },
                grid: {
                    color: '#f1f5f9',
                    drawBorder: false
                },
                border: {
                    display: false 
                }
            }
        },
        interaction: {
            mode: 'index',
            intersect: false
        }
    }
});

// Radial Bar Chart - Enhanced
var radialOptions = {
    series: [55, 25, 10, 5, 5], 
    chart: {
        height: 280,
        type: 'radialBar',
        fontFamily: 'Plus Jakarta Sans, sans-serif',
        animations: {
            enabled: true,
            easing: 'easeinout',
            speed: 800,
            animateGradually: {
                enabled: true,
                delay: 150
            },
            dynamicAnimation: {
                enabled: true,
                speed: 350
            }
        }
    },
    plotOptions: {
        radialBar: {
            hollow: {
                size: '45%',
                margin: 15,
                background: 'transparent',
                image: undefined
            },
            track: {
                background: '#f1f5f9',
                strokeWidth: '100%',
                margin: 3,
                dropShadow: {
                    enabled: false
                }
            },
            dataLabels: {
                name: { 
                    show: true, 
                    fontSize: '11px',
                    fontWeight: '500',
                    color: '#64748b', 
                    offsetY: 18,
                    formatter: function(val) {
                        return val.length > 10 ? val.substring(0, 10) + '...' : val;
                    }
                },
                value: {
                    fontSize: '20px',
                    fontWeight: '700',
                    color: '#1e293b', 
                    offsetY: -12,
                    formatter: function(val) {
                        return Math.round((val / 100) * 624); 
                    }
                },
                total: {
                    show: true,
                    label: 'Total Patients',
                    color: '#94a3b8', 
                    fontSize: '12px',
                    fontWeight: '500',
                    formatter: function(w) {
                        return '624';
                    }
                }
            }
        }
    },
    colors: ['#4A72FF', '#50CD89', '#FFAD5F', '#F1416C', '#9D00FF'],
    stroke: {
        lineCap: 'round',
        width: 2
    },
    labels: ['General Medicine', 'Orthopedics', 'Cardiology', 'Gynecology', 'Oncology'],
    legend: {
        show: true,
        position: 'bottom',
        horizontalAlign: 'center',
        fontSize: '11px',
        fontFamily: 'Plus Jakarta Sans',
        markers: {
            width: 8,
            height: 8,
            radius: 4
        },
        itemMargin: {
            horizontal: 8,
            vertical: 4
        }
    }
};

var radialChart = new ApexCharts(document.querySelector("#chart"), radialOptions);
radialChart.render();

// Workforce Horizontal Bar Chart - Enhanced
const ctx = document.getElementById('workforceChart').getContext('2d');
new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['On Duty', 'Off Duty', 'On Leave'],
        datasets: [{
            label: 'Personnel Count',
            data: [90, 40, 20], 
            backgroundColor: ['#50CD89', '#F1416C', '#FFAD5F'], 
            borderRadius: 10,
            borderSkipped: false,
            barThickness: 25,
            maxBarThickness: 20
        }]
    },
    options: {
        indexAxis: 'y', 
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { display: false },
            tooltip: {
                backgroundColor: 'rgba(30, 41, 59, 0.9)',
                padding: 10,
                cornerRadius: 8,
                callbacks: {
                    label: function(context) {
                        return context.parsed.x + ' Personnel';
                    }
                }
            }
        },
        scales: {
            x: { 
                beginAtZero: true,
                max: 120,
                ticks: {
                    font: {
                        size: 11,
                        family: 'Plus Jakarta Sans'
                    },
                    color: '#64748b',
                    stepSize: 20
                },
                grid: { 
                    color: '#f1f5f9',
                    drawBorder: false
                },
                border: {
                    display: false
                }
            },
            y: {
                ticks: {
                    font: {
                        size: 10,
                        weight: '500',
                        family: 'Plus Jakarta Sans'
                    },
                    color: '#1e293b'
                },
                grid: { display: false },
                border: {
                    display: false
                }
            }
        }
    }
});