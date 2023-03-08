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
      borderRadius:10,
      circumference: 270
    }, {
      label: '# of Votes',
      backgroundColor: ['#FFC107'],
      data: [12],
      borderWidth: 0,
      weight: 8,
      cutout: "80%",
      borderRadius:10,
      circumference: 200
    }, {
      label: '# of Votes',
      backgroundColor: ['#2196F3'],
      data: [12],
      borderWidth: 0,
      weight: 8,
      cutout: "75%",
      borderRadius:10,
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