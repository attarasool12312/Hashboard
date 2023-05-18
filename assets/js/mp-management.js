const satisfactionPerStage = document.getElementById("satisfactionPerStage");

const satisfactionPerStage_1 = new Chart(satisfactionPerStage, {

  type: "bar",
  data: {
    labels: ["Lead", "Discover", "Won", "Delivery", "Operation", "Finance", "Closing"],
    datasets: [
      {
        label: 'Basic Salary',
        data: [700, 500, 800, 1200, 300, 100, 130],
        borderWidth: 0,
        barThickness: 25,
        backgroundColor: "#775DA6",
        order: 2
      },
      {
        label: 'Overtime',
        data: [700, 500, 700, 1200, 300, 100, 150],
        borderColor: "#70B6C1",
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
        display: false,
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
        position: 'bottom',            
        labels: {
          usePointStyle: true,
          boxWidth: 3
        }
      }
    },
  },

});

const satisfactionMonthly = document.getElementById("satisfactionMonthly");

const satisfactionMonthly_1 = new Chart(satisfactionMonthly, {
  type: "bar",
  data: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "# of Votes",
        data: [20, 23, 29, 32, 23, 28, 29, 32, 23, 28, 29, 30],
        borderRadius: 5,
        borderWidth: 1,
        backgroundColor: ["#E9EDF7", "#E9EDF7", "#E9EDF7", "#E9EDF7", "#E9EDF7", "#775DA6", "#E9EDF7", "#E9EDF7", "#E9EDF7", "#E9EDF7", "#E9EDF7", "#E9EDF7"],
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


const incomeAmounts = document.getElementById("incomeAmounts");

const incomeAmounts_1 = new Chart(incomeAmounts, {
  type: "bar",
  data: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "# of Votes",
        data: [20, 23, 29, 32, 23, 28, 29, 32, 23, 28, 29, 30],
        borderRadius: 5,
        borderWidth: 1,
        backgroundColor: "#775DA6",
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

const initiativeCompletion = document.getElementById('initiativeCompletion');

const initiativeCompletion_1 = new Chart(initiativeCompletion, {
  type: 'doughnut',
  data: {
    datasets: [{
      backgroundColor: ['#775DA6', '#F2F4F6'],
      borderRadius: 2,
      data: [25, 75,],
      borderWidth: 0,
      cutout: '70%'
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          usePointStyle: false,
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

const historySatisfaction = document.getElementById("historySatisfaction");

const historySatisfaction_1 = new Chart(historySatisfaction, {
  type: "bar",
  data: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "# of Votes",
        data: [20, 23, 29, 32, 23, 28, 29, 32, 23, 28, 29, 30],
        borderRadius: 5,
        borderWidth: 1,
        backgroundColor: "#775DA6",
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