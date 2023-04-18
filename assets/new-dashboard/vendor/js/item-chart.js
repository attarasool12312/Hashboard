    const itemsChart = document.getElementById("itemsChart");

    const itemsChart_1 = new Chart(itemsChart, {
      type: "bar",
      data: {
        labels: [
          "X 01",
        ],
        datasets: [
          {
            label: "# of Votes",
            data: [50],
            borderWidth: 0,
            backgroundColor: "#775DA6",
            barThickness: 15,
            borderRadius: 10,
          },
        ],
      },
      options: {
        responsive: true,

        scales: {
          x: {
            display: false,
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


    const itemsChart1 = document.getElementById("itemsChart-1");

    const itemsChart_2 = new Chart(itemsChart1, {

      type: "bar",
      data: {
        labels: [
          "Jan",
          "Fab",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
        datasets: [
          {
            label: 'Permanent',
            data: [200],
            borderWidth: 0,
            barThickness: 15,
            borderRadius: 30,
            backgroundColor: ["#775DA6"],
          },
          {
            label: 'Contract',
            data: [200],
            borderWidth: 0,
            barThickness: 15,
            borderRadius: 30,
            backgroundColor: ["#FFB1B7"],
          },
          {
            label: 'Contract',
            data: [200],
            borderWidth: 0,
            barThickness: 15,
            borderRadius: 30,
            backgroundColor: ["#70B6C1"],
          }
        ],
      },
      options: {
        responsive: true,

        scales: {
          x: {
            display: false,
            stacked: true,
            grid: {
              drawOnChartArea: false,
            },
            ticks: {
              display: true,
            },
          },
          y: {
            display: false,
            stacked: true,
            grid: {
              drawOnChartArea: true,
            },
            ticks: {
              display: true,
            },
          },
        },
        plugins: {
          legend: {
            display: false,
            labels: {
              usePointStyle: true,
              boxWidth: 6
            }
          }
        },
      },

    });

    const itemsChart2 = document.getElementById("itemsChart-2");

    const itemsChart_3 = new Chart(itemsChart2, {
      type: "bar",
      data: {
        labels: [
          "X 01",
          "X 01",
          "X 01",
        ],
        datasets: [
          {
            label: "# of Votes",
            data: [50, 40, 30],
            borderWidth: 0,
            backgroundColor: ["#70B6C1", "#775DA6", "#FFB1B7"],
            barThickness: 15,
            borderRadius: 10,
          },
        ],
      },
      options: {
        responsive: true,

        scales: {
          x: {
            display: false,
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

    const itemsChart4 = document.getElementById("itemsChart-3");

    const itemsChart_4 = new Chart(itemsChart4, {
      type: "bar",
      data: {
        labels: [
          "X 01",
        ],
        datasets: [
          {
            label: "# of Votes",
            data: [50],
            borderWidth: 0,
            backgroundColor: "#FFB1B7",
            barThickness: 15,
            borderRadius: 10,
          },
        ],
      },
      options: {
        responsive: true,
        indexAxis: 'y',
        scales: {
          x: {
            display: false,
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

    const itemsChart5 = document.getElementById("itemsChart-4");

    const itemsChart_5 = new Chart(itemsChart5, {

      type: "bar",
      data: {
        labels: [
          "Jan",
        ],
        datasets: [
          {
            label: 'Permanent',
            data: [200],
            borderWidth: 0,
            barThickness: 15,
            borderRadius: 30,
            backgroundColor: ["#FFB1B7"],
          },
          {
            label: 'Contract',
            data: [200],
            borderWidth: 0,
            barThickness: 15,
            borderRadius: 30,
            backgroundColor: ["#775DA6"],
          },
          {
            label: 'Contract',
            data: [200],
            borderWidth: 0,
            barThickness: 15,
            borderRadius: 30,
            backgroundColor: ["#70B6C1"],
          }
        ],
      },
      options: {
        responsive: true,
        indexAxis: 'y',
        scales: {
          x: {
            display: false,
            stacked: true,
            grid: {
              drawOnChartArea: false,
            },
            ticks: {
              display: true,
            },
          },
          y: {
            display: false,
            stacked: true,
            grid: {
              drawOnChartArea: true,
            },
            ticks: {
              display: true,
            },
          },
        },
        plugins: {
          legend: {
            display: false,
            labels: {
              usePointStyle: true,
              boxWidth: 6
            }
          }
        },
      },

    });

    const itemsChart6 = document.getElementById("itemsChart-5");

    const itemsChart_6 = new Chart(itemsChart6, {
      type: "bar",
      data: {
        labels: [
          "X 01",
          "X 01",
          "X 01",
        ],
        datasets: [
          {
            label: "# of Votes",
            data: [50, 40, 30],
            borderWidth: 0,
            backgroundColor: ["#70B6C1", "#775DA6", "#FFB1B7"],
            barThickness: 15,
            borderRadius: 10,
          },
        ],
      },
      options: {
        responsive: true,
        indexAxis: 'y',
        scales: {
          x: {
            display: false,
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