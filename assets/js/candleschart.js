function setChart(){
  var ctx = document.getElementById("candlestickChart").getContext('2d');
  const startingdate = luxon.DateTime.fromRFC2822('01 Aug 2022 00:00 GMT');
  const date = luxon.DateTime.fromRFC2822('02 Aug 2022 00:00 GMT');
  const date1 = luxon.DateTime.fromRFC2822('03 Aug 2022 00:00 GMT');
  const date2 = luxon.DateTime.fromRFC2822('04 Aug 2022 00:00 GMT');
  const date3 = luxon.DateTime.fromRFC2822('05 Aug 2022 00:00 GMT');
  const date4 = luxon.DateTime.fromRFC2822('06 Aug 2022 00:00 GMT');
  const date5 = luxon.DateTime.fromRFC2822('07 Aug 2022 00:00 GMT');
  const date6 = luxon.DateTime.fromRFC2822('08 Aug 2022 00:00 GMT');
  const date7 = luxon.DateTime.fromRFC2822('09 Aug 2022 00:00 GMT');
  const date8 = luxon.DateTime.fromRFC2822('10 Aug 2022 00:00 GMT');
  const date9 = luxon.DateTime.fromRFC2822('11 Aug 2022 00:00 GMT');
  const date10 = luxon.DateTime.fromRFC2822('12 Aug 2022 00:00 GMT');
  const date11 = luxon.DateTime.fromRFC2822('13 Aug 2022 00:00 GMT');
  const date12 = luxon.DateTime.fromRFC2822('14 Aug 2022 00:00 GMT');
  const date13 = luxon.DateTime.fromRFC2822('15 Aug 2022 00:00 GMT');
  const date14 = luxon.DateTime.fromRFC2822('16 Aug 2022 00:00 GMT');
  const date15 = luxon.DateTime.fromRFC2822('17 Aug 2022 00:00 GMT');
  const date16 = luxon.DateTime.fromRFC2822('18 Aug 2022 00:00 GMT');
const candlestickChart_1 = new Chart(ctx, {
  type: "candlestick",
  data: {
    datasets: [
      {
        data: [{
          x: startingdate.valueOf(),
          o: 1,
          h: 1.50,
          l: 0.75,
          c: 1.25
        },
        {
          x: date.valueOf(),
          o: 1.25,
          h: 1.50,
          l: 0.50,
          c: 0.90
        },
        {
          x: date1.valueOf(),
          o: 1,
          h: 1.50,
          l: 0.75,
          c: 1.50
        },
        {
          x: date2.valueOf(),
          o: 1.25,
          h: 1.50,
          l: 0.50,
          c: 1.20
        },
        {
          x: date3.valueOf(),
          o: 1,
          h: 1.20,
          l: 0.75,
          c: 1.40
        },
        {
          x: date4.valueOf(),
          o: 1.25,
          h: 1.50,
          l: 0.50,
          c: 1.10
        },
        {
          x: date5.valueOf(),
          o: 1,
          h: 1.20,
          l: 0.75,
          c: 1.30
        },
        {
          x: date6.valueOf(),
          o: 1.25,
          h: 1.50,
          l: 0.50,
          c: 1
        },
        {
          x: date7.valueOf(),
          o: 1,
          h: 1.20,
          l: 0.75,
          c: 1.45
        },
        {
          x: date8.valueOf(),
          o: 1.25,
          h: 1.50,
          l: 0.50,
          c: 0.60
        },
        {
          x: date9.valueOf(),
          o: 1,
          h: 1.20,
          l: 0.75,
          c: 1.35
        },
        {
          x: date10.valueOf(),
          o: 1.25,
          h: 1.50,
          l: 0.50,
          c: 0.55
        },
        {
          x: date11.valueOf(),
          o: 1,
          h: 1.20,
          l: 0.75,
          c: 1.05
        },
        {
          x: date12.valueOf(),
          o: 1.25,
          h: 1.50,
          l: 0.50,
          c: 0.65
        },
        {
          x: date13.valueOf(),
          o: 1,
          h: 1.20,
          l: 0.75,
          c: 1.10
        },
        {
          x: date14.valueOf(),
          o: 1.25,
          h: 1.50,
          l: 0.50,
          c: 0.85
        },
        {
          x: date15.valueOf(),
          o: 1,
          h: 1.20,
          l: 0.75,
          c: 1.20
        },
        {
          x: date16.valueOf(),
          o: 1.25,
          h: 1.50,
          l: 0.50,
          c: 0.90
        },
        ],
      },
    ],
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
  },
});
}

setChart();



