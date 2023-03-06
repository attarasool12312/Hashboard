  const ctx = document.getElementById("myChart");

  const bar1 = new Chart(ctx, {
    type: "bar",
    data: {
      labels: [
        "Red",
        "Blue",
        "Yellow",
        "Green",
        "Purple",
        "Orange",
        "Red",
        "Blue",
        "Yellow",
        "Green",
        "Purple",
        "Orange",
      ],
      datasets: [
        {
          label: "# of Votes",
          backgroundColor: "#775da6",
          borderRadius: 5,
          data: [14, 16, 10, 12, 9, 11, 6, 8, 10, 15, 12, 9],
          borderWidth: 0,
          barThickness: 20,
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
            display: false,
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

  const mybar = document.getElementById("myBarChart");

  const bar2 = new Chart(mybar, {
    type: "bar",
    data: {
      labels: [
        "Red",
        "Blue",
        "Yellow",
        "Green",
        "Purple",
        "Orange",
        "Red",
        "Blue",
        "Yellow",
        "Green",
        "Purple",
        "Orange",
      ],
      datasets: [
        {
          label: "# of Votes",
          data: [8, 12, 16, 9, 11, 5, 8, 3, 7, 11, 15, 8],
          borderRadius: 5,
          borderWidth: 0,
          barThickness: 20,
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
            display: false,
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

  const doublebar = document.getElementById("doubleBars");

  const bar3 = new Chart(doublebar, {
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

  const invoice = document.getElementById("invoiceBars");

  const bar4 = new Chart(invoice, {
    type: "bar",
    data: {
      labels: [
        "Older",
        "Sep 18-24",
        "This week",
        "Oct 2-8",
        "Oct 9-15",
        "Future",
      ],
      datasets: [
        {
          label: "# of Votes",
          data: [3, 13, 9, 12, 13, 8],
          borderWidth: 0,
          backgroundColor: "#775da6",
          barThickness: 30,
          backgroundColor: [
            "#abdfe7",
            "#775da6",
            "#775da6",
            "#775da6",
            "#775da6",
            "#775da6",
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

  const indexOne = document.getElementById("indexLineOne");

  const bar16 = new Chart(indexOne, {
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

  const indexTwo = document.getElementById("indexLineTwo");

  const bar17 = new Chart(indexTwo, {
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
