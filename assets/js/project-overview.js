window.onload = function () {
    const overviewCustomerChart = document.getElementById("overviewCustomerChart");

    const overviewCustomerChart_1 = new Chart(overviewCustomerChart, {
        type: "bar",
        data: {
            labels: ["customer1", "customer2", "customer3", "customer4", "customer5", "customer6"],
            datasets: [
                {
                    label: "# of Votes",
                    data: [10, 13, 9, 12, 13, 8],
                    borderRadius: 5,
                    borderWidth: 1,
                    backgroundColor: "#775da6",
                    barThickness: 12,
                },
                {
                    label: "# of Votes",
                    data: [10, 13, 9, 12, 11, 13],
                    borderRadius: 5,
                    borderWidth: 1,
                    backgroundColor: "#abdfe7",
                    barThickness: 12,
                },
            ],
        },
        options: {
            responsive: true,
            scales: {
                x: {
                    // display: false,
                    grid: {
                        drawOnChartArea: false,
                    },
                    ticks: {
                        display: true,
                    },
                },
                y: {
                    display: false,
                    grid: {
                        drawOnChartArea: false,
                    },
                    ticks: {
                        display: false,
                    },
                },
            },
            plugins: {
                legend: {
                    display: false,
                },
            },
        },
    });

    const overviewProjectChart = document.getElementById("overviewProjectChart");

    const overviewProjectChart_1 = new Chart(overviewProjectChart, {
        type: "bar",
        data: {
            labels: ["Project1", "Project2", "Project3", "Project4", "Project5", "Project6"],
            datasets: [
                {
                    label: "# of Votes",
                    data: [10, 13, 9, 12, 13, 8],
                    borderRadius: 5,
                    borderWidth: 1,
                    backgroundColor: "#775da6",
                    barThickness: 12,
                },
                {
                    label: "# of Votes",
                    data: [10, 13, 9, 12, 11, 13],
                    borderRadius: 5,
                    borderWidth: 1,
                    backgroundColor: "#abdfe7",
                    barThickness: 12,
                },
            ],
        },
        options: {
            responsive: true,
            scales: {
                x: {
                    // display: false,
                    grid: {
                        drawOnChartArea: false,
                    },
                    ticks: {
                        display: true,
                    },
                },
                y: {
                    display: false,
                    grid: {
                        drawOnChartArea: false,
                    },
                    ticks: {
                        display: false,
                    },
                },
            },
            plugins: {
                legend: {
                    display: false,
                },
            },
        },
    });

    const overviewManagersChart = document.getElementById("overviewManagersChart");

    const overviewManagersChart_1 = new Chart(overviewManagersChart, {
        type: "bar",
        data: {
            labels: ["35", "40", "50", "45", "47", "44", "45", "38", "40", "50", "49", "39"],
            datasets: [
                {
                    label: "# of Votes",
                    data: [10, 13, 9, 12, 13, 8, 9, 5, 3, 9, 10, 11],
                    borderRadius: 5,
                    borderWidth: 1,
                    backgroundColor: "#775da6",
                    barThickness: 35,
                },
            ],
        },
        options: {
            responsive: true,
            scales: {
                x: {
                    grid: {
                        drawOnChartArea: false,
                    },
                    ticks: {
                        display: true,
                    },
                },
                y: {
                    display: false,
                    grid: {
                        drawOnChartArea: false,
                    },
                    ticks: {
                        display: false,
                    },
                },
            },
            plugins: {
                legend: {
                    display: false,
                },
            },
        },
    });

    const overviewImageChart = document.getElementById("overviewImageChart");

    const overviewImageChart_1 = new Chart(overviewImageChart, {
        type: "bar",
        data: {
            labels: [
                "50%",
                "60%",
                "80%",
                "30%",
                "40%",
                "50%",
                "90%",
                "70%",
                "10%",
                "35%",
            ],
            datasets: [
                {
                    label: "# of Votes",
                    data: [50, 60, 80, 30, 40, 50, 90, 70, 10, 35],
                    borderWidth: 0,
                    backgroundColor: "#775da6",
                    barThickness: 8,
                    borderRadius: 30,
                    backgroundColor: [
                        "#FFAB2B",
                        "#FFAB2B",
                        "#6DD230",
                        "#FE4D97",
                        "#FFAB2B",
                        "#FFAB2B",
                        "#6DD230",
                        "#6DD230",
                        "#FE4D97",
                        "#FFAB2B",
                    ],
                },
            ],
        },
        options: {
            responsive: true,

            scales: {
                x: {
                    // display: false,
                    grid: {
                        drawOnChartArea: false,
                    },
                    ticks: {
                        display: true,
                    },
                },
                y: {
                    display: false,
                    grid: {
                        drawOnChartArea: false,
                    },
                    ticks: {
                        display: false,
                    },
                },
            },
            plugins: {
                legend: {
                    display: false,
                },
            },
        },
    });

    const dashboardCategory = document.getElementById('dashboardCategory');

    const dashboardCategory_1 = new Chart(dashboardCategory, {
        type: 'doughnut',
        data: {
            labels: ['Strategy ', 'Governance', 'Large Business'],
            datasets: [{
                label: '# of Votes',
                backgroundColor: ['#775DA6', '#70B6C1', '#FFB1B7'],
                borderRadius: 2,
                data: [45, 35, 20,],
                barThickness: 5,
                borderWidth: 0
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        usePointStyle: true,
                        boxWidth: 8
                    }
                }
            },
            elements: {
                customCutout: true,
            },
            cutoutPercentage: 32
        },
    });

    const dashboardSatisfaction = document.getElementById("dashboardSatisfaction");

    const dashboardSatisfaction_1 = new Chart(dashboardSatisfaction, {
        type: "bar",
        data: {
            labels: ["35", "40", "50", "45", "47", "44", "45", "38", "40", "50", "49", "39"],
            datasets: [
                {
                    label: "# of Votes",
                    data: [20, 23, 29, 32, 23, 28, 29, 25, 23, 29, 30, 21],
                    borderRadius: 5,
                    borderWidth: 1,
                    backgroundColor: "#775da6",
                    barThickness: 20,
                },
            ],
        },
        options: {
            responsive: true,
            scales: {
                x: {
                    grid: {
                        drawOnChartArea: false,
                    },
                    ticks: {
                        display: true,
                    },
                },
                y: {
                    display: false,
                    grid: {
                        drawOnChartArea: false,
                    },
                    ticks: {
                        display: false,
                    },
                },
            },
            plugins: {
                legend: {
                    display: false,
                },
            },
        },
    });

    const dashboardInvoice = document.getElementById("dashboardInvoice");

    const dashboardInvoice_1 = new Chart(dashboardInvoice, {
        type: "bar",
        data: {
            labels: [
                "50%",
                "60%",
                "80%",
                "30%",
                "40%",
                "50%",
                "90%",
                "70%",
                "10%",
                "35%",
            ],
            datasets: [
                {
                    label: "# of Votes",
                    data: [50, 60, 80, 30, 40, 50, 90, 70, 10, 35],
                    borderWidth: 0,
                    backgroundColor: "#775da6",
                    barThickness: 8,
                    borderRadius: 30,
                    backgroundColor: [
                        "#FFAB2B",
                        "#FFAB2B",
                        "#6DD230",
                        "#FE4D97",
                        "#FFAB2B",
                        "#FFAB2B",
                        "#6DD230",
                        "#6DD230",
                        "#FE4D97",
                        "#FFAB2B",
                    ],
                },
            ],
        },
        options: {
            responsive: true,

            scales: {
                x: {
                    // display: false,
                    grid: {
                        drawOnChartArea: false,
                    },
                    ticks: {
                        display: true,
                    },
                },
                y: {
                    display: false,
                    grid: {
                        drawOnChartArea: false,
                    },
                    ticks: {
                        display: false,
                    },
                },
            },
            plugins: {
                legend: {
                    display: false,
                },
            },
        },
    });

    const dashboardManager = document.getElementById("dashboardManager");

    const dashboardManager_1 = new Chart(dashboardManager, {
        type: "bar",
        data: {
            labels: ["Q3 - 83", "Q4 - 299"],
            datasets: [
                {
                    label: "# of Votes",
                    data: [10, 13],
                    borderRadius: 5,
                    borderWidth: 1,
                    backgroundColor: ["#70B6C1", "#775da6"],
                    barThickness: 100,
                },
            ],
        },
        options: {
            responsive: true,
            scales: {
                x: {
                    grid: {
                        drawOnChartArea: false,
                    },
                    ticks: {
                        display: true,
                    },
                },
                y: {
                    display: false,
                    grid: {
                        drawOnChartArea: false,
                    },
                    ticks: {
                        display: false,
                    },
                },
            },
            plugins: {
                legend: {
                    display: false,
                },
            },
        },
    });

    const dashboardProjectManage = document.getElementById("dashboardProjectManage");

    const dashboardProjectManage_1 = new Chart(dashboardProjectManage, {
        type: "bar",
        data: {
            labels: ["Today", "Aug", "Sep", "Oct", "Nov", "Dec"],
            datasets: [
                {
                    label: "# of Votes",
                    data: [10, 13, 9, 8, 12, 15],
                    borderRadius: 5,
                    borderWidth: 1,
                    backgroundColor: ["#70B6C1", "#775da6"],
                    barThickness: 30,
                },
            ],
        },
        options: {
            responsive: true,
            scales: {
                x: {
                    grid: {
                        drawOnChartArea: false,
                    },
                    ticks: {
                        display: true,
                    },
                },
                y: {
                    display: false,
                    grid: {
                        drawOnChartArea: false,
                    },
                    ticks: {
                        display: false,
                    },
                },
            },
            plugins: {
                legend: {
                    display: false,
                },
            },
        },
    });

};