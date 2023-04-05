const trendChart = document.getElementById('trendChart');

const trendChart_1 = new Chart(trendChart, {
  type: 'line',
  data: {
    labels: ['Jan', 'Fab', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: ['Top Products'],
        data: [200, 190, 195, 188, 210, 220, 215],
        borderColor: '#775da6',
        backgroundColor: '#775da6',
      }
    ],
  },
  options: {
    responsive: true,
    elements: {
      point: {
        radius: 0
      }
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
        }
      },
      y: {
        beginAtZero: true,
      }
    },
    plugins: {
      legend: {
        display: true,
        position: 'bottom',
        labels: {
          usePointStyle: true,
          boxWidth: 8
        }
      }
    }
  },
});

const posyChart = document.getElementById('posyChart');

const posyChart_1 = new Chart(posyChart, {
  type: 'doughnut',
  data: {
    labels: ['Strategy ', 'Governance', 'Large Business'],
    datasets: [{
      label: '# of Votes',
      backgroundColor: ['#775DA6', '#70B6C1', '#FFB1B7'],
      borderRadius: 2,
      data: [45, 35, 20,],
      barThickness: 5,
      borderWidth: 0,
      cutout: "90%",
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

const analysisChart = document.getElementById('analysisChart');

const analysisChart_1 = new Chart(analysisChart, {
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

const interactionsChart = document.getElementById('interactionsChart');

const interactionsChart_1 = new Chart(interactionsChart, {
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

const usabilityChart = document.getElementById('usabilityChart');

const usabilityChart_1 = new Chart(usabilityChart, {
  type: 'doughnut',
  data: {
    labels: ['Strategy ', 'Governance', 'Large Business'],
    datasets: [{
      label: '# of Votes',
      backgroundColor: ['#775DA6', '#70B6C1', '#FFB1B7'],
      borderRadius: 2,
      data: [45, 35, 20,],
      barThickness: 5,
      borderWidth: 0,
      cutout: "90%",
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

const impressionThreeLine = document.getElementById('impressionThreeLine');

const impressionThreeLine_1 = new Chart(impressionThreeLine, {
  type: 'line',
  data: {
    labels: ['Jan', 'Fab', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: ['Top Products'],
        data: [200, 190, 195, 188, 210, 220, 215],
        borderColor: '#775da6',
        backgroundColor: '#775da6',
      },
      {
        label: ['Mid Products'],
        data: [150, 145, 148, 155, 148, 140, 144],
        borderColor: '#70b6c1',
        backgroundColor: '#70b6c1',
      },
      {
        label: ['Less Products'],
        data: [100, 120, 110, 105, 115, 130, 135],
        borderColor: '#ffb1b7',
        backgroundColor: '#ffb1b7',
      }
    ],
  },
  options: {
    responsive: true,
    elements: {
      point: {
        radius: 0
      }
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
        }
      },
      y: {
        beginAtZero: true,
      }
    },
    plugins: {
      legend: {
        display: true,
        position: 'bottom',
        labels: {
          usePointStyle: true,
          boxWidth: 8
        }
      }
    }
  },
});

const engagementThreeLine = document.getElementById('engagementThreeLine');

const engagementThreeLine_1 = new Chart(engagementThreeLine, {
  type: 'line',
  data: {
    labels: ['Jan', 'Fab', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: ['Top Products'],
        data: [200, 190, 195, 188, 210, 220, 215],
        borderColor: '#775da6',
        backgroundColor: '#775da6',
      },
      {
        label: ['Mid Products'],
        data: [150, 145, 148, 155, 148, 140, 144],
        borderColor: '#70b6c1',
        backgroundColor: '#70b6c1',
      },
      {
        label: ['Less Products'],
        data: [100, 120, 110, 105, 115, 130, 135],
        borderColor: '#ffb1b7',
        backgroundColor: '#ffb1b7',
      }
    ],
  },
  options: {
    responsive: true,
    elements: {
      point: {
        radius: 0
      }
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
        }
      },
      y: {
        beginAtZero: true,
      }
    },
    plugins: {
      legend: {
        display: true,
        position: 'bottom',
        labels: {
          usePointStyle: true,
          boxWidth: 8
        }
      }
    }
  },
});

const monthlyChart = document.getElementById('monthlyChart');

const monthlyChart_1 = new Chart(monthlyChart, {
  type: 'line',
  data: {
    labels: ['Jan', 'Fab', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: ['Top Products'],
        data: [200, 190, 195, 188, 210, 220, 215],
        borderColor: '#775da6',
        backgroundColor: '#775da6',
      }
    ],
  },
  options: {
    responsive: true,
    elements: {
      point: {
        radius: 0
      }
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
        }
      },
      y: {
        beginAtZero: true,
      }
    },
    plugins: {
      legend: {
        display: true,
        position: 'bottom',
        labels: {
          usePointStyle: true,
          boxWidth: 8
        }
      }
    }
  },
});

const typeChart = document.getElementById('typeChart');

const typeChart_1 = new Chart(typeChart, {
  type: 'doughnut',
  data: {
    labels: ['Strategy ', 'Governance', 'Large Business'],
    datasets: [{
      label: '# of Votes',
      backgroundColor: ['#775DA6', '#70B6C1', '#FFB1B7'],
      borderRadius: 2,
      data: [45, 35, 20,],
      barThickness: 5,
      borderWidth: 0,
      cutout: "90%",
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

const analysisPieChart = document.getElementById('analysisPieChart');

const analysisPieChart_1 = new Chart(analysisPieChart, {
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

const deviceChart = document.getElementById('deviceChart');

const deviceChart_1 = new Chart(deviceChart, {
  type: 'doughnut',
  data: {
    labels: ['Strategy ', 'Governance', 'Large Business'],
    datasets: [{
      label: '# of Votes',
      backgroundColor: ['#775DA6', '#70B6C1', '#FFB1B7'],
      borderRadius: 2,
      data: [45, 35, 20,],
      barThickness: 5,
      borderWidth: 0,
      cutout: "90%",
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

const url = 'https://unpkg.com/world-atlas@2.0.2/countries-50m.json';

fetch(url).then((result) => result.json()).then((datapoint) => {
  const countries = ChartGeo.topojson.feature(datapoint, datapoint.objects.countries).features;

  console.log()


  const locationsChart = document.getElementById("locationsChart");

  const locationsChart_1 = new Chart(locationsChart, {
    type: "choropleth",
    data: {
      labels: countries.map(country => country.properties.name),
      datasets: [
        {
          label: "Countries",
          data: countries.map(country => ({ feature: country, value: Math.random() })),
          backgroundColor: '#775DA6', // set background color to #775DA6
        },
      ],
    },
    options: {
      responsive: true,
      scales: {
        xy: {
          projection: 'equalEarth'
        }
      },
      plugins: {
        legend: {
          display: false,
        },
      },
    },
  });
});

const url1 = 'https://unpkg.com/world-atlas@2.0.2/countries-50m.json';

fetch(url1).then((result) => result.json()).then((datapoint) => {
  const countries = ChartGeo.topojson.feature(datapoint, datapoint.objects.countries).features;

  console.log()


  const locationsWorldChart = document.getElementById("locationsWorldChart");

  const locationsWorldChart_1 = new Chart(locationsWorldChart, {
    type: "choropleth",
    data: {
      labels: countries.map(country => country.properties.name),
      datasets: [
        {
          label: "Countries",
          data: countries.map(country => ({ feature: country, value: Math.random() })),
          backgroundColor: '#775DA6', // set background color to #775DA6
        },
      ],
    },
    options: {
      responsive: true,
      scales: {
        xy: {
          projection: 'equalEarth'
        }
      },
      plugins: {
        legend: {
          display: false,
        },
      },
    },
  });
});


const usabilityCategory = document.getElementById('usabilityCategory');

const usabilityCategory_1 = new Chart(usabilityCategory, {
  type: 'doughnut',
  data: {
    labels: ['Strategy ', 'Governance', 'Large Business'],
    datasets: [{
      label: '# of Votes',
      backgroundColor: ['#775DA6', '#70B6C1', '#FFB1B7'],
      borderRadius: 2,
      data: [45, 35, 20,],
      barThickness: 5,
      borderWidth: 0,
      cutout: "90%",
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
