window.onload = function () {
    const doublebar = document.getElementById("customers");

    const bar3 = new Chart(doublebar, {
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

    const mybar = document.getElementById("projects");

    const bar4 = new Chart(mybar, {
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

    const mybar1 = document.getElementById("projectManagers");

    const bar5 = new Chart(mybar1, {
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

    const invoice = document.getElementById("invoiceBars");

    const bar6 = new Chart(invoice, {
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

    const workDon = document.getElementById('dashboardCart');

    const bar22 = new Chart(workDon, {
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

    const mybar7 = document.getElementById("satisfaction");

    const bar7 = new Chart(mybar7, {
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

    const invoice1 = document.getElementById("invoiceBar");

    const box = new Chart(invoice1, {
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

    const mybar3 = document.getElementById("projectManager");

    const box1 = new Chart(mybar3, {
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

    const mybar4 = document.getElementById("projectManageres");

    const box0 = new Chart(mybar4, {
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