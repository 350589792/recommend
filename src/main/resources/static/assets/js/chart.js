(function($) {
    "use strict";
    /*-------------------------------------
            ChartJS Init
    -------------------------------------*/
    function line_chart_call(line_chart) {
        if (line_chart.length) {
            var lineChartData = {
                labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun", ],
                datasets: [{
                    data: [0, 5, 3, 4, 5, 6, 9, 10],
                    backgroundColor: 'transparent',
                    borderColor: '#2e5bff',
                    borderWidth: 2,
                    pointRadius: 0,
                    pointBackgroundColor: '#ebebfd',
                    pointBorderColor: '#ffffff',
                    pointHoverRadius: 6,
                    pointHoverBorderWidth: 3,
                    fill: 'origin',
                }]
            };
            var lineChartOptions = {
                responsive: true,
                maintainAspectRatio: false,
                animation: {
                    duration: 2000
                },
                scales: {
                    xAxes: [{
                        display: true,
                    }],
                    yAxes: [{
                        display: true,
                    }]
                },
                legend: {
                    display: false
                },
                tooltips: {
                    mode: 'index',
                    intersect: false,
                    enabled: true
                },
                elements: {
                    line: {
                        tension: 0.5
                    },
                    point: {
                        pointStyle: 'circle'
                    }
                }
            };
            var earningCanvas = line_chart.get(0).getContext("2d");
            var earningChart = new Chart(earningCanvas, {
                type: 'line',
                data: lineChartData,
                options: lineChartOptions
            });
        }
    }

    function revenue_chart_call(line_chart) {
        if (line_chart.length) {
            var lineChartData = {
                labels: ["Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
                datasets: [{
                        data: [350, 450, 350, 350, 450, 350, 350, 450, 350, 350, 450, 250],
                        backgroundColor: '#34378b',
                        borderColor: 'transparent',
                        borderWidth: 0,
                        pointRadius: 0,
                        pointBackgroundColor: '#ebebfd',
                        pointBorderColor: '#ffffff',
                        pointHoverRadius: 6,
                        pointHoverBorderWidth: 3,
                        fill: 'origin',
                        label: "Actual Plan"
                    },
                    {
                        data: [650, 750, 650, 650, 750, 650, 650, 750, 650, 650, 750, 650],
                        backgroundColor: '#1f4cef',
                        borderColor: 'transparent',
                        borderWidth: 0,
                        pointRadius: 0,
                        pointBackgroundColor: '#ebebfd',
                        pointBorderColor: '#ffffff',
                        pointHoverRadius: 6,
                        pointHoverBorderWidth: 3,
                        fill: 'origin',
                        label: "Prev Month"
                    },
                    {
                        data: [800, 1000, 900, 900, 1000, 900, 900, 1000, 900, 900, 1000, 800],
                        backgroundColor: '#e8ecfb',
                        borderColor: 'transparent',
                        borderWidth: 0,
                        pointRadius: 0,
                        pointBackgroundColor: '#ebebfd',
                        pointBorderColor: '#ffffff',
                        pointHoverRadius: 6,
                        pointHoverBorderWidth: 3,
                        fill: 'origin',
                        label: "Actual Growth"
                    },
                ]
            };
            var lineChartOptions = {
                responsive: true,
                maintainAspectRatio: false,
                animation: {
                    duration: 2000
                },
                scales: {
                    xAxes: [{
                        display: false,
                        ticks: {
                            display: true,
                            padding: 0,
                            fontColor: "red",
                            fontSize: 10,
                        },
                        gridLines: {
                            display: false,
                        }
                    }],
                    yAxes: [{
                        display: false,
                    }]
                },
                legend: {
                    display: false
                },
                tooltips: {
                    mode: 'index',
                    intersect: false,
                    enabled: true
                },
                elements: {
                    line: {
                        tension: 0.5
                    },
                    point: {
                        pointStyle: 'circle'
                    }
                }
            };
            var earningCanvas = line_chart.get(0).getContext("2d");
            var earningChart = new Chart(earningCanvas, {
                type: 'line',
                data: lineChartData,
                options: lineChartOptions
            });
        }
    }

    function session_chart_call(line_chart) {
        if (line_chart.length) {
            var lineChartData = {
                labels: ["40", "45", "50", "55", "60", "65", "70", "80"],
                datasets: [{
                        data: [0, 5000, 5000, 3000, 3000, 7000, 6500, 500],
                        backgroundColor: '#f83191',
                        borderColor: 'transparent',
                        borderWidth: 0,
                        pointRadius: 0,
                        pointBackgroundColor: '#ebebfd',
                        pointBorderColor: '#ffffff',
                        pointHoverRadius: 6,
                        pointHoverBorderWidth: 3,
                        fill: 'origin',
                        label: "Tablet"
                    },
                    {
                        data: [0, 6000, 6000, 4000, 4000, 8000, 7000, 800],
                        backgroundColor: '#2e5bff',
                        borderColor: 'transparent',
                        borderWidth: 0,
                        pointRadius: 0,
                        pointBackgroundColor: '#ebebfd',
                        pointBorderColor: '#ffffff',
                        pointHoverRadius: 6,
                        pointHoverBorderWidth: 3,
                        fill: 'origin',
                        label: "Mobile"
                    },
                    {
                        data: [0, 6500, 6500, 4500, 4500, 9000, 8000, 1000],
                        backgroundColor: '#f79d51',
                        borderColor: 'transparent',
                        borderWidth: 0,
                        pointRadius: 0,
                        pointBackgroundColor: '#ebebfd',
                        pointBorderColor: '#ffffff',
                        pointHoverRadius: 6,
                        pointHoverBorderWidth: 3,
                        fill: 'origin',
                        label: "Desktop"
                    },
                ]
            };
            var lineChartOptions = {
                responsive: true,
                maintainAspectRatio: false,
                animation: {
                    duration: 2000
                },
                scales: {
                    xAxes: [{
                        display: true,
                        ticks: {
                            display: true,
                            padding: 0,
                            fontColor: "#9295a0",
                            fontSize: 12,
                        },
                        gridLines: {
                            display: false,
                        }
                    }],
                    yAxes: [{
                        display: false,
                    }]
                },
                legend: {
                    display: false
                },
                tooltips: {
                    mode: 'index',
                    intersect: false,
                    enabled: true
                },
                elements: {
                    line: {
                        tension: 0.5
                    },
                    point: {
                        pointStyle: 'circle'
                    }
                }
            };
            var earningCanvas = line_chart.get(0).getContext("2d");
            var earningChart = new Chart(earningCanvas, {
                type: 'line',
                data: lineChartData,
                options: lineChartOptions
            });
        }
    }

    function perform_chart_call(line_chart) {
        if (line_chart.length) {
            var lineChartData = {
                labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                datasets: [{
                    data: [0, 6, 2, 10, 7, 7, 1, 8, 1, 8, 1, 7],
                    backgroundColor: '#daeafc',
                    borderColor: '#208eff',
                    borderWidth: 1,
                    pointRadius: 0,
                    pointBackgroundColor: '#ebebfd',
                    pointBorderColor: '#ffffff',
                    pointHoverRadius: 2,
                    pointHoverBorderWidth: 1,
                    fill: 'origin',
                }]
            };
            var lineChartOptions = {
                responsive: true,
                maintainAspectRatio: false,
                animation: {
                    duration: 2000
                },
                scales: {
                    xAxes: [{
                        display: false,
                    }],
                    yAxes: [{
                        display: false,
                    }]
                },
                legend: {
                    display: false
                },
                tooltips: {
                    mode: 'index',
                    intersect: false,
                    enabled: true
                },
                elements: {
                    line: {
                        tension: 0.5
                    },
                    point: {
                        pointStyle: 'circle'
                    }
                }
            };
            var earningCanvas = line_chart.get(0).getContext("2d");
            var earningChart = new Chart(earningCanvas, {
                type: 'line',
                data: lineChartData,
                options: lineChartOptions
            });
        }
    }

    function audience_chart_call(line_chart) {
        if (line_chart.length) {
            var lineChartData = {
                labels: ["17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29"],
                datasets: [{
                        data: [100, 140, 110, 120, 80, 120, 130, 180, 160, 140, 150, 190, 120],
                        backgroundColor: 'rgba(32, 142, 255, 0.15)',
                        borderColor: 'transparent',
                        borderWidth: 0,
                        pointRadius: 0,
                        pointBackgroundColor: '#ec9320',
                        pointBorderColor: '#ffffff',
                        pointHoverRadius: 6,
                        pointHoverBorderWidth: 5,
                        label: "Jan"
                    },
                    {
                        data: [20, 30, 60, 30, 120, 80, 100, 70, 140, 90, 160, 140, 180],
                        backgroundColor: '#208eff',
                        borderColor: 'transparent',
                        borderWidth: 0,
                        pointRadius: 0,
                        pointBackgroundColor: '#ec9320',
                        pointBorderColor: '#ffffff',
                        pointHoverRadius: 6,
                        pointHoverBorderWidth: 5,
                        label: "Feb"
                    }
                ]
            };
            var lineChartOptions = {
                responsive: true,
                maintainAspectRatio: false,
                animation: {
                    duration: 2000
                },
                scales: {
                    xAxes: [{
                        display: true,
                        ticks: {
                            display: true,
                            padding: 0,
                            fontColor: "#9295a0",
                            fontSize: 11,
                        },
                        gridLines: {
                            display: false,

                        }
                    }],
                    yAxes: [{
                        display: true,
                        ticks: {
                            display: true,
                            padding: 0,
                            fontColor: "#9295a0",
                            fontSize: 11,
                            stepSize: 40,
                        },
                        gridLines: {
                            color: "#e8edff",
                        }
                    }]
                },
                legend: {
                    display: false
                },
                tooltips: {
                    mode: 'index',
                    intersect: false,
                    enabled: true
                },
                elements: {
                    line: {
                        tension: 0
                    },
                    point: {
                        pointStyle: 'circle'
                    }
                }
            };
            var earningCanvas = line_chart.get(0).getContext("2d");
            var earningChart = new Chart(earningCanvas, {
                type: 'line',
                data: lineChartData,
                options: lineChartOptions
            });
        }
    }

    function crypto_chart_call(line_chart) {
        if (line_chart.length) {
            var lineChartData = {
                labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30"],
                datasets: [{
                    data: [80, 140, 110, 120, 100, 120, 130, 80, 140, 110, 120, 100, 120, 130, 100, 80, 140, 110, 120, 100, 120, 130, 100, 140, 150, 140, 160, 140, 180, 190],
                    backgroundColor: 'rgba(236, 147, 32, 0.05)',
                    borderColor: '#ec9320',
                    borderWidth: 0,
                    pointRadius: 0,
                    pointBackgroundColor: '#ec9320',
                    pointBorderColor: '#ffffff',
                    pointHoverRadius: 6,
                    pointHoverBorderWidth: 5,
                    label: "June"
                }, ]
            };
            var lineChartOptions = {
                responsive: true,
                maintainAspectRatio: false,
                animation: {
                    duration: 2000
                },
                scales: {
                    xAxes: [{
                        display: true,
                        ticks: {
                            display: true,
                            padding: 10,
                            fontColor: "#b5bac0",
                            fontSize: 13,
                        },
                        gridLines: {
                            display: false,

                        }
                    }],
                    yAxes: [{
                        display: true,
                        ticks: {
                            display: true,
                            padding: 0,
                            fontColor: "#b5bac0",
                            fontSize: 12,
                            stepSize: 30,
                            beginAtZero: true
                        },
                        gridLines: {
                            color: "#e8edff",
                        }
                    }]
                },
                legend: {
                    display: false
                },
                tooltips: {
                    mode: 'index',
                    intersect: false,
                    enabled: true
                },
                elements: {
                    line: {
                        tension: 0
                    },
                    point: {
                        pointStyle: 'circle'
                    }
                }
            };
            var earningCanvas = line_chart.get(0).getContext("2d");
            var earningChart = new Chart(earningCanvas, {
                type: 'line',
                data: lineChartData,
                options: lineChartOptions
            });
        }
    }

    function bar_chart_call(bar_chart) {
        if (bar_chart.length) {
            var barChartData = {
                labels: ["Sep", "Oct", "Nov", "Dec", "Jan", "Feb"],
                datasets: [{
                    backgroundColor: ["#d2ccfc", "#d2ccfc", "#d2ccfc", "#d2ccfc", "#d2ccfc", "#d2ccfc"],
                    data: [2500, 1500, 1400, 2200, 1500, 1200],
                    hoverBackgroundColor: "#584bad",
                    maxBarThickness: 30,
                    label: "Expenses"
                }, ]
            };
            var barChartOptions = {
                responsive: true,
                maintainAspectRatio: false,
                animation: {
                    duration: 2000
                },
                scales: {
                    xAxes: [{
                        display: true,
                        ticks: {
                            display: true,
                            padding: 0,
                            fontColor: "#9295a0",
                            fontSize: 11,
                        },
                        gridLines: {
                            display: false,
                        }
                    }],
                    yAxes: [{
                        display: false,
                        ticks: {
                            beginAtZero: true,
                        },
                    }]
                },
                legend: {
                    display: false
                },
                tooltips: {
                    enabled: true
                }
            };
            var expenseCanvas = bar_chart.get(0).getContext("2d");
            var expenseChart = new Chart(expenseCanvas, {
                type: 'bar',
                data: barChartData,
                options: barChartOptions
            });
        }
    }

    function horizontal_chart_call(bar_chart) {
        if (bar_chart.length) {
            var barChartData = {
                labels: ["Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "June"],
                datasets: [{
                        backgroundColor: ["#2e5bff", "#2e5bff", "#2e5bff", "#2e5bff", "#2e5bff", "#2e5bff", "#2e5bff", "#2e5bff", "#2e5bff", "#2e5bff"],
                        data: [10, 20, 40, 60, 100, 20, 60, 60, 80, 100],
                        hoverBackgroundColor: "#584bad",
                        maxBarThickness: 8,
                        label: "Today"
                    },
                    {
                        backgroundColor: ["#e8edff", "#e8edff", "#e8edff", "#e8edff", "#e8edff", "#e8edff", "#e8edff", "#e8edff", "#e8edff", "#e8edff"],
                        data: [80, 60, 100, 80, 40, 20, 40, 60, 80, 100],
                        hoverBackgroundColor: "#584bad",
                        maxBarThickness: 8,
                        label: "Yesterday"
                    },
                ]
            };
            var barChartOptions = {
                responsive: true,
                maintainAspectRatio: false,
                animation: {
                    duration: 2000
                },
                scales: {
                    xAxes: [{
                        display: true,
                        ticks: {
                            display: true,
                            padding: 0,
                            fontColor: "#9295a0",
                            fontSize: 11,
                        },
                        gridLines: {
                            display: true,
                            color: "#e8edff",
                            zeroLineColor: "#e8edff",
                        }
                    }],
                    yAxes: [{
                        display: false,
                    }]
                },
                legend: {
                    display: false
                },
                tooltips: {
                    enabled: true
                }
            };
            var expenseCanvas = bar_chart.get(0).getContext("2d");
            var expenseChart = new Chart(expenseCanvas, {
                type: 'horizontalBar',
                data: barChartData,
                options: barChartOptions
            });
        }
    }

    function users_chart_call(bar_chart) {
        if (bar_chart.length) {
            var barChartData = {
                labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
                datasets: [{
                        backgroundColor: ["#2e5bff", "#2e5bff", "#2e5bff", "#2e5bff", "#2e5bff", "#2e5bff", "#2e5bff", "#2e5bff"],
                        data: [1400, 1200, 700, 1600, 1200, 1600, 1200, 1000],
                        hoverBackgroundColor: "#584bad",
                        maxBarThickness: 8,
                        label: "01 Jan, 2020"
                    },
                    {
                        backgroundColor: ["#e8edff", "#e8edff", "#e8edff", "#e8edff", "#e8edff", "#e8edff", "#e8edff", "#e8edff"],
                        data: [1800, 1500, 2000, 800, 1200, 1800, 1600, 800],
                        hoverBackgroundColor: "#584bad",
                        maxBarThickness: 8,
                        label: "31 Jan, 2020"
                    },
                ]
            };
            var barChartOptions = {
                responsive: true,
                maintainAspectRatio: false,
                animation: {
                    duration: 2000
                },
                scales: {
                    xAxes: [{
                        display: true,
                        ticks: {
                            fontColor: "#9295a0"
                        },
                        gridLines: {
                            display: false,
                        }
                    }],
                    yAxes: [{
                        display: false,
                        ticks: {
                            beginAtZero: true,
                        }
                    }]
                },
                legend: {
                    display: false
                },
                tooltips: {
                    enabled: true
                }
            };
            var expenseCanvas = bar_chart.get(0).getContext("2d");
            var expenseChart = new Chart(expenseCanvas, {
                type: 'bar',
                data: barChartData,
                options: barChartOptions
            });
        }
    }

    function doughnut_chart_call(doughnut_chart) {
        if (doughnut_chart.length) {
            var doughnutChartData = {
                labels: ["前端开发", "Java开发", "软件开发与测试", "云计算与大数据"],
                datasets: [{
                    backgroundColor: ["#ff52a5", "#43fefe", "#ffa55c", "#208eff"],
                    data: [193, 132, 157, 254],
                    label: "Traffic Channel"
                }, ]
            };
            var doughnutChartOptions = {
                responsive: true,
                maintainAspectRatio: false,
                cutoutPercentage: 60,
                rotation: -8.7,
                animation: {
                    duration: 2000
                },
                legend: {
                    display: false
                },
                tooltips: {
                    enabled: true
                },
            };
            var doughnutCanvas = doughnut_chart.get(0).getContext("2d");
            var doughnutChart = new Chart(doughnutCanvas, {
                type: 'doughnut',
                data: doughnutChartData,
                options: doughnutChartOptions
            });
        }
    }

    function pie_chart_call(pie_chart) {
        if (pie_chart.length) {
            var earningCanvas = pie_chart.get(0).getContext("2d");
            var earningChart = new Chart(earningCanvas, {
                type: 'pie',
                data: {
                    labels: ["Bitcoin", "Ethereum", "Dash", "Litecoin", "ByteCoin"],
                    datasets: [{
                        label: "Population (millions)",
                        backgroundColor: ["#ffa55c", "#6a7b99", "#208eff", "#325a98", "#ff52a5"],
                        data: [4025.32, 1123.64, 984.75, 848.19, 754.06]
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    rotation: -0.05,
                    title: {
                        display: false,
                    },
                    legend: {
                        display: false
                    }
                }
            });
        }
    }

    /*-------------------------------------
        ChartJS Call
    -------------------------------------*/
    line_chart_call($('#simple-line1'));
    revenue_chart_call($('#revenue-chart'));
    bar_chart_call($('#bar-chart'));
    horizontal_chart_call($('#horizontal-chart'));
    doughnut_chart_call($('#doughnut-chart'));
    users_chart_call($('#users-chart'));
    session_chart_call($('#session-chart'));
    perform_chart_call($('#perform-chart1'));
    perform_chart_call($('#perform-chart2'));
    perform_chart_call($('#perform-chart3'));
    audience_chart_call($('#audience-chart'));
    crypto_chart_call($('#crypto-chart'));
    pie_chart_call($('#pie-chart'));

})(jQuery);