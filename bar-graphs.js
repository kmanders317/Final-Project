let myChart = document.getElementById('myChart').getContext('2d');

let totalTimeDeaths = document.getElementById('totalTimeDeaths').getContext('2d');

let totalTimeDeathsChart = new Chart(totalTimeDeaths, {
  type: 'bar',
  data: {
    labels: ['Spanish Flu 1918', 'Coronavirus 2020'],
    datasets: [{
      label: 'Number of Deaths in the Second Month of Each Pandemic',
      data: [
        195000,
        56751
      ],
      backgroundColor: [

        'red',
        'black',
      ],


    }],
  },
  options: {
    title: {
      display: true,
      text: 'Number of Deaths in the Second Month of Each Pandemic',
    },
    responsive: true,
    maintainAspectRatio: false
  }
});

// totalTimeDeathsChart.canvas.parentNode.style.height = '200px';
// totalTimeDeathsChart.canvas.parentNode.style.width = '50vw';

let totalTimeCasesChart = new Chart(totalTimeCases, {
  type: 'bar',
  data: {
    labels: ['Spanish Flu 1918', 'Coronavirus 2020'],
    datasets: [{
      label: 'Number of Cases in the First Month of Each Pandemic',
      data: [
        14000,
        188373
      ],
      backgroundColor: [

        'red',
        'black',
      ],
    }],
  },
  options: {
    title: {
      display: true,
      text: 'Number of Cases in the First Month of Each Pandemic',
    },
    responsive: true,
    maintainAspectRatio: false
  }
});

// totalTimeCasesChart.canvas.parentNode.style.height = '200px';
// totalTimeCasesChart.canvas.parentNode.style.width = '50vw';


let massPopChart = new Chart(myChart, {
  type: 'bar',
  data: {
    labels: ['Spanish Flu 1918', 'Coronavirus 2020'],
    datasets: [{
      label: 'Worldwide Death Toll',
      data: [
        50000000,
        1340000
      ],
      backgroundColor: [
        'red',
        'black',
      ],

    }],
  },
  options: {
    title: {
      display: true,
      text: 'Total Death Toll',
    },
    responsive: true,
    maintainAspectRatio: false
  },
});

// massPopChart.canvas.parentNode.style.height = '200px';
// massPopChart.canvas.parentNode.style.width = '50vw';

let totalCases = document.getElementById('totalCases').getContext('2d');

let totalCasesChart = new Chart(totalCases, {
  type: 'bar',
  data: {
    labels: ['Spanish Flu 1918', 'Coronavirus 2020'],
    datasets: [{
      label: 'Number of Cases',
      data: [
        500000000,
        55600000
      ],
      backgroundColor: [

        'red',
        'black',
      ],


    }],
  },
  options: {
    title: {
      display: true,
      text: 'Total Cases',
    },
    responsive: true,
    maintainAspectRatio: false
  }
});

// totalCasesChart.canvas.parentNode.style.height = '200px';
// totalCasesChart.canvas.parentNode.style.width = '50vw';


