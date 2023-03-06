  const barsChart1 = document.getElementById("BarsChart1");

  const barsChart = new Chart(barsChart1, {
    type: "bar",
    data: {
      labels: ["Jan", "Mar", "Apr", "May", "Jun", "Jul"],
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

  const barsChart2 = document.getElementById("BarsChart2");

  const barsChart_1 = new Chart(barsChart2, {
    type: "bar",
    data: {
      labels: ["Jan", "Mar", "Apr", "May", "Jun", "Jul"],
      datasets: [
        {
          label: "# of Votes",
          data: [10, 13, 9, 12, 11, 13],
          borderRadius: 5,
          borderWidth: 1,
          backgroundColor: "#abdfe7",
          barThickness: 20,
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

  const barsChart3 = document.getElementById("BarsChart3");

  const barsChart_2 = new Chart(barsChart3, {
    type: "bar",
    data: {
      labels: ["Project 1", "Project 2", "Project 3", "Project 4", "Project 5", "Project 6"],
      datasets: [
        {
          label: "# of Votes",
          data: [10, 13, 9, 12, 11, 13],
          borderRadius: 5,
          borderWidth: 1,
          backgroundColor: "#775da6",
          barThickness: 30,
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

  const barsChart4 = document.getElementById("BarsChart4");

  const barsChart_3 = new Chart(barsChart4, {
    type: "bar",
    data: {
      labels: ["Task 1", "Task 2", "Task 3", "Task 4", "Task 5", "Task 6"],
      datasets: [
        {
          label: "# of Votes",
          data: [10, 13, 9, 12, 11, 13],
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

  const barsChart5 = document.getElementById("BarsChart5");

  const barsChart_4 = new Chart(barsChart5, {

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
          data: [200, 700, 500, 100, 800, 1200, 300, 1100, 400, 600, 200, 900],
          borderWidth: 0,
          barThickness: 20,
          backgroundColor: [
            "#64BF92"
          ],
        },
        {
          label: 'Contract',
          data: [200, 700, 500, 100, 800, 1200, 300, 1100, 400, 600, 200, 900],
          borderWidth: 0,
          barThickness: 20,
          backgroundColor: [
            "#5473DE",
          ],
        }
      ],
    },
    options: {
      responsive: true,

      scales: {
        x: {
          stacked: true,
          display: true,
          grid: {
            drawOnChartArea: false,
          },
          ticks: {
            display: true,
          },
        },
        y: {
          stacked: true,
          display: true,
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
          display: true,
          labels: {
            usePointStyle: true,
            boxWidth: 6
          }
        }
      },
    },

  });

  const lineChart1 = document.getElementById("lineChart");

  const lineChart_1 = new Chart(lineChart1, {
    type: "line",
    data: {
      labels: ["19 Sep", "26 Sep", "3 Oct", "10 Oct", "17 Oct"],
      datasets: [
        {
          label: ["Top Products"],
          data: [50, 100, 80, 105, 85],
          borderColor: "#775da6",
          backgroundColor: "rgb(239, 236, 244)",
          fill: true,
        },
      ],
    },
    options: {
      responsive: true,
      elements: {
        point: {
          radius: 0,
        },
      },
      scales: {
        x: {
          // display: false,
          beginAtZero: true,
          grid: {
            drawOnChartArea: false,
          },
          ticks: {
            display: true,
          },
        },
        y: {
          display: false,
          beginAtZero: true,
        },
      },
      plugins: {
        legend: {
          display: false,
        },
      },
    },
  });

  const lineChart2 = document.getElementById("lineChart1");

  const lineChart_2 = new Chart(lineChart2, {
    type: "line",
    data: {
      labels: ["19 Sep", "26 Sep", "3 Oct", "10 Oct", "17 Oct"],
      datasets: [
        {
          label: ["Top Products"],
          data: [70, 40, 60, 50, 90],
          borderColor: "#70b6c1",
          backgroundColor: "rgb(238, 246, 248)",
          fill: true,
        },
      ],
    },
    options: {
      responsive: true,
      elements: {
        point: {
          radius: 0,
        },
      },
      scales: {
        x: {
          // display: false,
          beginAtZero: true,
          grid: {
            drawOnChartArea: false,
          },
          ticks: {
            display: true,
          },
        },
        y: {
          display: false,
          beginAtZero: true,
        },
      },
      plugins: {
        legend: {
          display: false,
        },
      },
    },
  });

  const lineChart3 = document.getElementById("lineChart2");

  const lineChart_3 = new Chart(lineChart3, {
    type: "line",
    data: {
      labels: ["19 Sep", "26 Sep", "3 Oct", "10 Oct", "17 Oct"],
      datasets: [
        {
          label: ["Top Products"],
          data: [70, 40, 60, 50, 90],
          borderColor: "#775da6",
          backgroundColor: "rgb(239, 236, 244)",
          fill: true,
        },
      ],
    },
    options: {
      responsive: true,
      elements: {
        point: {
          radius: 0,
        },
      },
      scales: {
        x: {
          display: false,
          beginAtZero: true,
          grid: {
            drawOnChartArea: false,
          },
          ticks: {
            display: true,
          },
        },
        y: {
          display: false,
          beginAtZero: true,
        },
      },
      plugins: {
        legend: {
          display: false,
        },
      },
    },
  });


  const lineChart4 = document.getElementById("lineChart3");

  const lineChart_4 = new Chart(lineChart4, {
    type: 'line',
    data: {
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      datasets: [{
        label: 'Weekly Sales',
        data: [18, 12, 6, 9, 12, 3, 9],
        backgroundColor: '#775da6',
        borderColor: '#775da6',
        tension: 0.4
      },
      {
        label: 'Percentage',
        data: [10, 22, 36, 49, 52, 63, 79],
        backgroundColor: '#775da6',
        borderColor: '#775da6',
        tension: 0.4
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    },
  });

  const lineChart5 = document.getElementById("lineChart4");

  const lineChart_5 = new Chart(lineChart5, {
    type: 'line',
    data: {
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      datasets: [{
        label: 'Weekly Sales',
        data: [18, 12, 6, 9, 12, 3, 9],
        backgroundColor: '#775da6',
        borderColor: '#775da6',
        tension: 0.4
      },
      {
        label: 'Percentage',
        data: [10, 22, 36, 49, 52, 63, 79],
        backgroundColor: '#775da6',
        borderColor: '#775da6',
        tension: 0.4
      },
      {
        label: 'Project',
        data: [60, 42, 16, 79, 32, 50, 0],
        backgroundColor: '#775da6',
        borderColor: '#775da6',
        tension: 0.4
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    },
  });

  const pieChart = document.getElementById('pieChart');

  const pieChart_1 = new Chart(pieChart, {
    type: 'pie',
    data: {
      labels: ['860 send', '730 open', '234 spam'],
      datasets: [{
        label: '# of Votes',
        backgroundColor: ['#ffb1b7', '#775da6', '#70b6c1'],
        borderRadius: 2,
        data: [45, 45, 10],
        borderWidth: 0,
        barThickness: 10,
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
      }
    },
  });

  const pieChart1 = document.getElementById('pieChart-1');

  const pieChart_2 = new Chart(pieChart1, {
    type: 'doughnut',
    data: {
      labels: ['In-store', 'Website', 'E-commerce'],
      datasets: [{
        label: '# of Votes',
        backgroundColor: ['#775da6', '#70b6c1', '#ffb1b7'],
        borderRadius: 2,
        data: [10, 45, 45,],
        borderWidth: 0,
        cutout: '90%'
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

  const pieChart2 = document.getElementById('pieChart-2');

  const pieChart_3 = new Chart(pieChart2, {
    type: 'doughnut',
    data: {
      labels: ['Present', 'Medical Leave', 'Unpaid Leave', 'Absent'],
      datasets: [{
        label: '# of Votes',
        backgroundColor: ['#62BF92', '#7159EF', '#E4C261', '#E67270'],
        borderRadius: 2,
        data: [70, 20, 5, 5,],
        borderWidth: 0,
        barThickness: 5
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

  const camboChart = document.getElementById('camboChart');

  const camboChart_1 = new Chart(camboChart, {
    type: 'bar',
    data: {
      labels: ['Jan', 'Fab', 'Mar', 'Apr', 'May', 'Jun'],
      datasets: [
        {
          label: ['Average Sales'],
          data: [4500, 4200, 3700, 6500, 4700, 4800],
          backgroundColor: '#775da6',
          borderRadius: 5,
          barThickness: 15,
          order: 2
        },
        {
          label: ['Average Profit'],
          data: [6500, 2400, 3000, 4500, 4000, 4300],
          borderColor: '#70b6c1',
          backgroundColor: '#70b6c1',
          pointRadius: 5,
          borderRadius: 5,
          barThickness: 50,
          type: 'line',
          order: 1
        }
      ],
    },
    options: {
      responsive: true,
      scales: {
        x: {
          beginAtZero: true,
          grid: {
            drawOnChartArea: false,
          },
          ticks: {
            display: true,
          }
        },
        y: {
          min: 0,
          max: 8000,
          beginAtZero: true,
        }
      },
      plugins: {
        legend: {
          display: true,
          position: 'bottom',
          labels: {
            usePointStyle: true,
            pointStyle: 'circle'
          }
        }
      }
    },
  });

  const camboChart1 = document.getElementById("camboChart1");

  const camboChart_2 = new Chart(camboChart1, {

    type: "bar",
    data: {
      labels: [
        "Jan",
        "Fab",
        "Mar",
        "Apr",
        "May",
        "Jun"
      ],
      datasets: [
        {
          label: 'Basic Salary',
          data: [700, 500, 800, 1200, 300, 100],
          borderWidth: 0,
          barThickness: 15,
          backgroundColor: [
            "#5374DF"
          ],
          order: 2
        },
        {
          label: 'Overtime',
          data: [700, 500, 700, 1200, 300, 100],
          borderColor: "#E1BD67",
          backgroundColor: "#ffffff",
          type: 'line',
          order: 1,
        }
      ],
    },
    options: {
      responsive: true,

      scales: {
        x: {
          display: true,
          grid: {
            drawOnChartArea: false,
          },
          ticks: {
            display: true,
          },
        },
        y: {
          display: true,
          gridLines: {
            drawOnChartArea: true,
            borderDash: [8, 4],
          },
          ticks: {
            display: true,
          },
        },
      },
      plugins: {
        legend: {
          display: true,
          labels: {
            usePointStyle: true,
            boxWidth: 3
          }
        }
      },
    },

  });