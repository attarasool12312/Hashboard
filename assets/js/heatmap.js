const mapChart2 = document.getElementById("mapChart2");
function isDayOfWeek(dt) {
    let wd = dt.getDay();
    wd = (wd + 6) % 7 + 1
    return '' + wd;
}

function generateDate() {
    const d = new Date();
    const today = new Date(d.getFullYear().d.getMonth(), d.getDate(), 0, 0, 0, 0);
    const data2 = [];
    const end = today;
    let dt = new Date(new Date().setDate(end.getDate() - 365));
    while (dt <= end) {
        const iso = dt.toISOString().substring(0, 10);
        data2.push({
            x: iso,
            y: isoDayOfWeek(dt),
            d: iso,
            v: Math.random() * 50
        });
        dt = new Date(dt.setDate(dt.getDate() + 1));
    }
    console.log(data2);
    return data2;
}

// setup block
const data = {
    datasets: [{
        label: "Heat Map",
        data: generateDate(),
        backgroundColor(c) {
            const value = c.dataset.data[c.dataIndex].v;
            const alpha = (10 + value) / 60;
            return 'rgba(0, 200, 0, ${alpha})';
        },
        borderColor: 'green',
        borderRadius: 1,
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255, 26, 104, 0.2)',
        hoverBorderColor: 'rgba(255, 26, 104, 1)',
        width(c) {
            const a = c.chart.chartArea || {};
            return (a.right - a.left) / 53 - 1;
        },
        height(c) {
            const a = c.chart.chartArea || {};
            return (a.bottom - a.top) / 7 - 1;
        },
    }]
};

const scales = {
    y: {
        type: 'time',
        offset: true,
        time: {
            unit: 'day',
            round: 'day',
            isoWeek: 1,
            parser: 'i',
            displayFormats: {
                day: 'iii'
            }
        },
        reserve: true,
        position: 'right',
        ticks: {
            maxRotation: 0,
            autoSkip: true,
            padding: 1,
            font: {
                size: 9
            }
        },
        grid: {
            display: false,
            drawBorder: false,
            tickLength: 0,
        }
    },
    x: {
        type: 'time',
        position: 'border',
        offset: true,
        time: {
            unit: 'week',
            round: 'week',
            isoWeekDay: 1,
            displayFormats: {
                week: 'MMM dd'
            }
        },
        ticks: {
            maxRotation: 0,
            autoSkip: true,
            font: {
                size: 9
            }
        },
        grid: {
            display: false,
            drawBorder: false,
            tickLength: 0,
        }
    }
};

const mapChart_2 = new Chart(mapChart2, {
    type: "matrix",
    data,
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: scales,
        plugins: {
            legend: {
                display: false,
            },
        },
    },
});