//doughnut
var ctxD = document.getElementById("doughnutChart").getContext('2d');
var myDoughnutChart = new Chart(ctxD, {
    type: 'doughnut',

    data: {
        labels: ["Red", "Green", "Yellow", "Grey", "Dark Grey"],

        datasets: [
            {
                data: [300, 50, 100, 40, 120],
                backgroundColor: ["#F7464A", "#46BFBD", "#FDB45C", "#949FB1", "#4D5360"],
                hoverBackgroundColor: ["#FF5A5E", "#5AD3D1", "#FFC870", "#A8B3C5", "#616774"]
            }
        ]
    },

    options: {
        responsive: true,
        legend: {
            display: false
        }

    }
});

var ctxB = document.getElementById("barChart").getContext('2d');

var myBarChart = new Chart(ctxB, {
    type: 'bar',

    data: {
        labels: ["作業1", "作業2", "作業3", "作業4", "作業5"],

        datasets: [
            {
                data: [20, 60, 55, 44, 11],
                backgroundColor: ["#F7464A", "#46BFBD", "#FDB45C", "#949FB1", "#4D5360"],
                hoverBackgroundColor: ["#FF5A5E", "#5AD3D1", "#FFC870", "#A8B3C5", "#616774"]
            }
        ],

        xAxisID: "xAxis"

    },

    options: {
        responsive: true,

        legend: {
            display: false
        },

        barPecentage: 0.2,

        categoryPecentage: 0.2,

        maxBarThickness: 0.5,

        scales: {
            yAxes: [
                {
                    ticks: {
                        "beginAtZero": true
                    }
                }
            ]
        }
    }
});
