const Radialbar = document.getElementById('Radialbar-1');

const Radialbar_1 = new Chart(Radialbar, {
  type: 'doughnut',
  data: {
    labels: ['Strategy',],
    datasets: [{
      label: '# of Votes',
      backgroundColor: '#775DA6',
      borderRadius: 10,
      data: ['70'],
      barThickness: 5,
      borderWidth: 0,
      cutout: "90%",
      circumference: 270
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: false,
        labels: {
          usePointStyle: false,
        }
      }
    },
    elements: {
      customCutout: true,
    },
    cutoutPercentage: 32
  },
});


const Radialbar2 = document.getElementById('Radialbar-2');

const Radialbar_2 = new Chart(Radialbar2, {
  type: 'doughnut',
  data: {
    labels: ['Strategy'],
    datasets: [{
      label: '# of Votes',
      backgroundColor: ['#775DA6'],
      data: [12],
      borderWidth: 0,
      weight: 10,
      cutout: "85%",
      borderRadius: 10,
      circumference: 270
    }, {
      label: '# of Votes',
      backgroundColor: ['#FFC107'],
      data: [12],
      borderWidth: 0,
      weight: 8,
      cutout: "80%",
      borderRadius: 10,
      circumference: 200
    }, {
      label: '# of Votes',
      backgroundColor: ['#2196F3'],
      data: [12],
      borderWidth: 0,
      weight: 8,
      cutout: "75%",
      borderRadius: 10,
      circumference: 150
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: false,
        labels: {
          usePointStyle: false,
        }
      }
    },
    elements: {
      arc: {
        borderWidth: 0
      }
    }
  },
});

const invoice = document.getElementById("invoiceBars");

const bar4 = new Chart(invoice, {
  type: "bubble",
  data: {
    labels: ["Older", "Sep 18-24", "This week", "Oct 2-8", "Oct 9-15", "Future",],
    datasets: [
      {
        label: "# of Votes",
        data: [
          { x: 18, y: 6, r: 6 },
          { x: 6, y: 12, r: 6 },
          { x: 10, y: 7, r: 6 },
          { x: 8, y: 16, r: 6 },
          { x: 7, y: 14, r: 6 },
          { x: 17, y: 13, r: 6 },
          { x: 16, y: 6, r: 6 },
          { x: 15, y: 5, r: 6 },
          { x: 14, y: 9, r: 6 },
          { x: 17, y: 11, r: 6 },
          { x: 12, y: 12, r: 6 },
          { x: 11, y: 14, r: 6 },
          { x: 10, y: 13, r: 6 },
          { x: 9, y: 6, r: 6 },
          { x: 8, y: 18, r: 6 },
          { x: 7, y: 17, r: 6 },
          { x: 6, y: 13, r: 6 },
          { x: 5, y: 11, r: 6 },
          { x: 4, y: 6, r: 6 },
          { x: 3, y: 19, r: 6 }
        ],
        borderWidth: 0,
        backgroundColor: '#7DC066',
        barThickness: 30,
        backgroundColor: [
          '#7DC066',
          '#E5646C',
          '#9E57E5',
          '#0075FF'
        ]
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
        // display: false,
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

const invoice1 = document.getElementById("invoiceBars1");

const bar_4 = new Chart(invoice1, {
  type: "bubble",
  data: {
    labels: ["Older", "Sep 18-24", "This week", "Oct 2-8", "Oct 9-15", "Future",],
    datasets: [
      {
        label: "# of Votes",
        data: [
          { x: 18, y: 6, r: 10 },
          { x: 6, y: 12, r: 6 },
          { x: 10, y: 7, r: 5 },
          { x: 8, y: 16, r: 4 },
          { x: 7, y: 14, r: 12 },
          { x: 17, y: 13, r: 9 },
          { x: 16, y: 6, r: 6 },
          { x: 15, y: 5, r: 6 },
          { x: 14, y: 9, r: 6 },
          { x: 17, y: 11, r: 6 },
          { x: 12, y: 12, r: 6 },
          { x: 11, y: 14, r: 6 },
          { x: 10, y: 13, r: 6 },
          { x: 9, y: 6, r: 6 },
          { x: 8, y: 18, r: 6 },
          { x: 7, y: 17, r: 6 },
          { x: 6, y: 13, r: 6 },
          { x: 5, y: 11, r: 6 },
          { x: 4, y: 6, r: 6 },
          { x: 3, y: 19, r: 6 }
        ],
        borderWidth: 0,
        backgroundColor: '#7DC066',
        barThickness: 30,
        backgroundColor: [
          '#7DC066',
          '#9E57E5',
          '#59B4D1',
          '#F3935D'
        ]
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
        // display: false,
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

const lineChart = document.getElementById("lineChart");

const lineChart_1 = new Chart(lineChart, {
  type: "line",
  data: {
    labels: ["X 01", "X 02", "X 03", "X 04", "X 05", "X 06", "X 07", "X 08", "X 09"],
    datasets: [
      {
        label: ["Top Products"],
        data: [50, 70, 80, 105, 85, 90, 70, 60, 56, 65],
        borderColor: "#775da6",
        backgroundColor: "rgb(239, 236, 244)"
      }],
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
        // display: false,
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

const lineChart1 = document.getElementById("lineChart1");

const lineChart_2 = new Chart(lineChart1, {
  type: "line",
  data: {
    labels: ["X 01", "X 02", "X 03", "X 04", "X 05", "X 06", "X 07", "X 08", "X 09"],
    datasets: [
      {
        label: ["Top Products"],
        data: [50, 50, 80, 105, 85, 90, 70, 60, 56, 65],
        borderColor: "#775da6",
        backgroundColor: "rgb(239, 236, 244)"
      },
      {
        label: ["Top Products"],
        data: [40, 60, 70, 90, 75, 100, 80, 50, 60, 95],
        borderColor: "#775da6",
        backgroundColor: "rgb(239, 236, 244)"
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
        // display: false,
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

const areaChart = document.getElementById("areaChart");

const areaChart_1 = new Chart(areaChart, {
  type: 'line',
  data: {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [{
      label: 'PM',
      data: [68, 12, 66, 59, 12, 43, 59],
      backgroundColor: '#97cfe042',
      borderColor: '#B822FF',
      fill: true,
      tension: 0.4
    },
    {
      label: 'CRM',
      data: [60, 22, 36, 49, 52, 63, 79],
      backgroundColor: '#775da656',
      borderColor: '#1DB2F1',
      fill: true,
      tension: 0.4
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: false,
        labels: {
          usePointStyle: false,
        }
      }
    },
    scales: {
      y: {
        beginAtZero: true
      }
    }
  },
});

const areaChart1 = document.getElementById("areaChart1");

const areaChart_2 = new Chart(areaChart1, {
  type: 'line',
  data: {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [{
      label: 'PM',
      data: [68, 47, 56, 65, 44, 42, 32,],
      backgroundColor: '#9e707391',
      borderColor: '#E5646C',
      fill: true,
      tension: 0.4
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: false,
        labels: {
          usePointStyle: false,
        }
      }
    },
    scales: {
      y: {
        beginAtZero: true
      }
    }
  },
});

const radarChart = document.getElementById("radarChart");

const radarChart_1 = new Chart(radarChart, {
  type: 'radar',
  data: {
    labels: ['Name 01', 'Name 02', 'Name 03', 'Name 04', 'Name 05', 'Name 06', 'Name 07'],
    datasets: [{
      label: 'PM',
      data: [60, 55, 63, 45, 50, 55, 50,],
      backgroundColor: '#5188c757',
      borderColor: '#0075FF',
      fill: true,
      tension: 0.4
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: false,
        labels: {
          usePointStyle: false,
        }
      }
    },
    scales: {
    }
  },
});

const radarChart1 = document.getElementById("radarChart1");

const radarChart_2 = new Chart(radarChart1, {
  type: 'radar',
  data: {
    labels: ['Name 01', 'Name 02', 'Name 03', 'Name 04', 'Name 05', 'Name 06', 'Name 07'],
    datasets: [{
      label: 'PM',
      data: [70, 65, 65, 55, 45, 60, 65,],
      backgroundColor: '#59b5d14f',
      borderColor: '#59B4D1',
      fill: true,
      tension: 0.4,
      borderWidth: 0
    }, {
      label: 'PM',
      data: [60, 60, 55, 65, 60, 55, 60,],
      backgroundColor: '#9e57e54d',
      borderColor: '#9E57E5',
      fill: true,
      tension: 0.4,
      borderWidth: 0
    }, {
      label: 'PM',
      data: [40, 50, 65, 60, 65, 65, 50,],
      backgroundColor: '#e5646d44',
      borderColor: '#9E57E5',
      fill: true,
      tension: 0.4,
      borderWidth: 0
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: false,
        labels: {
          usePointStyle: false,
        }
      }
    },
    scales: {
    }
  },
});

const mapChart = document.getElementById("mapChart");

const mapChart_1 = new Chart(mapChart, {
  type: 'radar',
  data: {
    labels: ['Name 01', 'Name 02', 'Name 03', 'Name 04', 'Name 05', 'Name 06', 'Name 07'],
    datasets: [{
      label: 'PM',
      data: [70, 65, 65, 55, 45, 60, 65,],
      backgroundColor: '#59b5d14f',
      borderColor: '#59B4D1',
      fill: true,
      tension: 0.4,
      borderWidth: 0
    }, {
      label: 'PM',
      data: [60, 60, 55, 65, 60, 55, 60,],
      backgroundColor: '#9e57e54d',
      borderColor: '#9E57E5',
      fill: true,
      tension: 0.4,
      borderWidth: 0
    }, {
      label: 'PM',
      data: [40, 50, 65, 60, 65, 65, 50,],
      backgroundColor: '#e5646d44',
      borderColor: '#9E57E5',
      fill: true,
      tension: 0.4,
      borderWidth: 0
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: false,
        labels: {
          usePointStyle: false,
        }
      }
    },
    scales: {
    }
  },
});

const dountMenuChart = document.getElementById('dountMenuChart');

const dountMenuChart_1 = new Chart(dountMenuChart, {
  type: 'doughnut',
  data: {
    labels: ['Strategy ', 'Governance', 'Large Business'],
    datasets: [{
      label: '# of Votes',
      backgroundColor: ['#0075FF', '#7DC066', '#59B4D1', '#9E57E5', '#F3935D', '#E5646C'],
      borderRadius: 2,
      data: [10, 15, 25, 20, 15, 15],
      barThickness: 5,
      borderWidth: 0,
      cutout: "90%",
      borderRadius: 30
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: false,
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

const dountMenuChart1 = document.getElementById('dountMenuChart1');

const dountMenuChart_2 = new Chart(dountMenuChart1, {
  type: 'doughnut',
  data: {
    labels: ['Strategy ', 'Governance', 'Large Business'],
    datasets: [{
      label: '# of Votes',
      backgroundColor: ['#0075FF', '#7DC066', '#59B4D1', '#9E57E5', '#F3935D', '#E5646C'],
      borderRadius: 2,
      data: [10, 15, 25, 20, 15, 15],
      barThickness: 5,
      borderWidth: 0,
      cutout: "50%",
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: false,
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

const pieChart = document.getElementById('pieChart');

const pieChart_1 = new Chart(pieChart, {
  type: 'pie',
  data: {
    datasets: [{
      label: '# of Votes',
      backgroundColor: ['#87EADE', '#B0E4C8', '#D9B7FB', '#A9DDF5', '#FFC9AC', '#F8BEC1'],
      borderRadius: 2,
      data: [13.6, 23.9, 8.1, 27.8, 15.7, 8.9],
      borderWidth: 0,
      barThickness: 10,
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: false,
        labels: {
          usePointStyle: false,
          boxWidth: 8
        }
      }
    }
  },
});

const barChart = document.getElementById("barChart");

const barChart_1 = new Chart(barChart, {
  type: "bar",
  data: {
    labels: [
      "X 01",
      "X 02",
      "X 03",
      "X 04",
    ],
    datasets: [
      {
        label: "# of Votes",
        data: [23, 13, 9, 12],
        borderWidth: 0,
        backgroundColor: "#775da6",
        barThickness: 15,
        borderRadius: 30,
        backgroundColor: "#775da6",
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

const barChart1 = document.getElementById("barChart1");

const barChart_2 = new Chart(barChart1, {
  type: "bar",
  data: {
    labels: [
      "X 01",
      "X 02",
      "X 03",
      "X 04",
    ],
    datasets: [
      {
        label: "# of Votes",
        data: [23, 13, 9, 12],
        borderWidth: 0,
        backgroundColor: "#775da6",
        barThickness: 15,
        borderRadius: 30,
        backgroundColor: "#775da6",
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

const barChart2 = document.getElementById("barChart2");

const barChart_3 = new Chart(barChart2, {
  type: "bar",
  data: {
    labels: [
      "X 01",
      "X 02",
      "X 03",
      "X 04",
    ],
    datasets: [
      {
        label: "# of Votes",
        data: [23, 13, 9, 12],
        borderWidth: 0,
        backgroundColor: "#775da6",
        barThickness: 15,
        borderRadius: 30,
        backgroundColor: "#775da6",
      },
    ],
  },
  options: {
    responsive: true,
    indexAxis: 'y',
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


const doubleBarChart = document.getElementById("doubleBarChart");

const doubleBarChart_1 = new Chart(doubleBarChart, {
  type: "bar",
  data: {
    labels: ["Jan", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "# of Votes",
        data: [10, 13, 9, 12, 13, 8],
        borderRadius: 5,
        borderWidth: 1,
        backgroundColor: "#F3935D",
        barThickness: 12,
      },
      {
        label: "# of Votes",
        data: [10, 13, 9, 12, 11, 13],
        borderRadius: 5,
        borderWidth: 1,
        backgroundColor: "#0075FF",
        barThickness: 12,
      },
      {
        label: "# of Votes",
        data: [10, 13, 9, 12, 11, 13],
        borderRadius: 5,
        borderWidth: 1,
        backgroundColor: "#7DC066",
        barThickness: 12,
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


const doubleBarChart1 = document.getElementById("doubleBarChart1");

const doubleBarChart_2 = new Chart(doubleBarChart1, {
  type: "bar",
  data: {
    labels: ["Jan", "Mar", "Apr"],
    datasets: [
      {
        label: "# of Votes",
        data: [10, 13, 9],
        borderRadius: 5,
        borderWidth: 1,
        backgroundColor: "#F3935D",
        barThickness: 12,
      },
      {
        label: "# of Votes",
        data: [10, 13, 9],
        borderRadius: 5,
        borderWidth: 1,
        backgroundColor: "#0075FF",
        barThickness: 12,
      },
      {
        label: "# of Votes",
        data: [10, 13, 9],
        borderRadius: 5,
        borderWidth: 1,
        backgroundColor: "#7DC066",
        barThickness: 12,
      },
    ],
  },
  options: {
    responsive: true,
    indexAxis: 'y',
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

const stackedChart = document.getElementById("stackedChart");

const stackedChart_1 = new Chart(stackedChart, {

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
        barThickness: 15,
        borderRadius: 30,
        backgroundColor: ["#7DC066"],
      },
      {
        label: 'Contract',
        data: [200, 700, 500, 100, 800, 1200, 300, 1100, 400, 600, 200, 900],
        borderWidth: 0,
        barThickness: 15,
        borderRadius: 30,
        backgroundColor: ["#0075FF"],
      },
      {
        label: 'Contract',
        data: [200, 700, 500, 100, 800, 1200, 300, 1100, 400, 600, 200, 900],
        borderWidth: 0,
        barThickness: 15,
        borderRadius: 30,
        backgroundColor: ["#F3935D"],
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


const stackedChart1 = document.getElementById("stackedChart1");

const stackedChart_2 = new Chart(stackedChart1, {

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
        barThickness: 15,
        borderRadius: 30,
        backgroundColor: ["#7DC066"],
      },
      {
        label: 'Contract',
        data: [200, 700, 500, 100, 800, 1200, 300, 1100, 400, 600, 200, 900],
        borderWidth: 0,
        barThickness: 15,
        borderRadius: 30,
        backgroundColor: ["#0075FF"],
      },
      {
        label: 'Contract',
        data: [200, 700, 500, 100, 800, 1200, 300, 1100, 400, 600, 200, 900],
        borderWidth: 0,
        barThickness: 15,
        borderRadius: 30,
        backgroundColor: ["#F3935D"],
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