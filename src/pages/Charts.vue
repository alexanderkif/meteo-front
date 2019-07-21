<template>
  <q-page class="flex flex-center">
    <div class="page-date text-center" v-show="showReturnData">
      Measured from {{ year }}-{{ month }}-{{ date }} {{ hours }}:{{ minutes }} to now
    </div>
    <canvas id="temperatureChart" width="400" height="100" v-show="showReturnData"></canvas>
    <canvas id="humidityChart" width="400" height="100" v-show="showReturnData"></canvas>
    <canvas id="pressureChart" width="400" height="100" v-show="showReturnData"></canvas>
    <q-inner-loading :showing="visible">
      <q-spinner-gears size="100px" color="primary" />
    </q-inner-loading>
  </q-page>
</template>

<style lang="scss" scoped>
.page-date {
  font-size: 1.5rem;
  box-shadow: none;
  width: 100%;
  align-self: flex-start;
  // height: 3rem;
}
.card-datasets {
  width: 180px;
  height: 160px;

  .card-data {
    font-size: 2rem;
  }
}
</style>

<script>
import Chart from 'chart.js';

export default {
  name: 'MeteoCharts',
  data() {
    return {
      temperature: [],
      humidity: [],
      pressure: [],
      altitude: [],
      year: null,
      month: null,
      date: null,
      hours: null,
      minutes: null,
      visible: true,
      showReturnData: false,
    };
  },
  created() {
    // const START = new Date() - 1000 * 60 * 60 * 3;
    // this.$axios.get(`https://meteo.alexanderkif.now.sh/data?start=${START}`)
    this.$axios.get('https://meteo.alexanderkif.now.sh/data')
      .then((response) => {
        const start = new Date(response.data.start);
        this.year = start.getFullYear();
        this.month = start.getMonth() + 1;
        if (+this.month < 10) this.month = `0${this.month}`;
        this.date = start.getDate();
        if (+this.date < 10) this.date = `0${this.date}`;
        this.hours = start.getHours();
        if (+this.hours < 10) this.hours = `0${this.hours}`;
        this.minutes = start.getMinutes();
        if (+this.minutes < 10) this.minutes = `0${this.minutes}`;
        this.visible = false;
        this.showReturnData = true;

        const { datasets } = response.data;
        datasets.forEach((dataset) => {
          this.temperature.push({
            t: new Date(dataset.created).valueOf(),
            y: +dataset.temperature,
          });
          this.humidity.push({
            t: new Date(dataset.created).valueOf(),
            y: +dataset.humidity,
          });
          this.pressure.push({
            t: new Date(dataset.created).valueOf(),
            y: +dataset.pressure,
          });
          this.altitude.push({ x: dataset.created, y: +dataset.altitude });
        });
        console.log(this.temperature);

        const ctxTemperature = document.getElementById('temperatureChart');
        const temperatureChart = new Chart(ctxTemperature, {
          type: 'line',
          data: {
            datasets: [{
              label: 'Temperature',
              backgroundColor: 'red',
              borderColor: 'red',
              data: this.temperature,
              type: 'line',
              pointRadius: 1,
              fill: false,
              // lineTension: 0,
              borderWidth: 2,
            }],
          },
          options: {
            scales: {
              xAxes: [{
                type: 'time',
                distribution: 'series',
                ticks: {
                  source: 'data',
                  autoSkip: true,
                },
              }],
              yAxes: [{
                scaleLabel: {
                  display: true,
                  labelString: 'Temperature, *C',
                },
              }],
            },
            tooltips: {
              intersect: false,
              mode: 'index',
              callbacks: {
                label(tooltipItem, myData) {
                  let label = myData.datasets[tooltipItem.datasetIndex].label || '';
                  if (label) {
                    label += ': ';
                  }
                  label += parseFloat(tooltipItem.value).toFixed(2);
                  return label;
                },
              },
            },
          },
        });
        console.log(temperatureChart);

        const ctxHumidity = document.getElementById('humidityChart');
        const humidityChart = new Chart(ctxHumidity, {
          type: 'line',
          data: {
            datasets: [{
              label: 'Humidity',
              backgroundColor: 'blue',
              borderColor: 'blue',
              data: this.humidity,
              type: 'line',
              pointRadius: 1,
              fill: false,
              // lineTension: 0,
              borderWidth: 2,
            }],
          },
          options: {
            scales: {
              xAxes: [{
                type: 'time',
                distribution: 'series',
                ticks: {
                  source: 'data',
                  autoSkip: true,
                },
              }],
              yAxes: [{
                scaleLabel: {
                  display: true,
                  labelString: 'Humidity, %',
                },
              }],
            },
            tooltips: {
              intersect: false,
              mode: 'index',
              callbacks: {
                label(tooltipItem, myData) {
                  let label = myData.datasets[tooltipItem.datasetIndex].label || '';
                  if (label) {
                    label += ': ';
                  }
                  label += parseFloat(tooltipItem.value).toFixed(2);
                  return label;
                },
              },
            },
          },
        });
        console.log(humidityChart);

        const ctxPressure = document.getElementById('pressureChart');
        const pressureChart = new Chart(ctxPressure, {
          type: 'line',
          data: {
            datasets: [{
              label: 'Pressure',
              backgroundColor: 'green',
              borderColor: 'green',
              data: this.pressure,
              type: 'line',
              pointRadius: 1,
              fill: false,
              // lineTension: 0,
              borderWidth: 2,
            }],
          },
          options: {
            scales: {
              xAxes: [{
                type: 'time',
                distribution: 'series',
                ticks: {
                  source: 'data',
                  autoSkip: true,
                },
              }],
              yAxes: [{
                scaleLabel: {
                  display: true,
                  labelString: 'Pressure, mmHg',
                },
              }],
            },
            tooltips: {
              intersect: false,
              mode: 'index',
              callbacks: {
                label(tooltipItem, myData) {
                  let label = myData.datasets[tooltipItem.datasetIndex].label || '';
                  if (label) {
                    label += ': ';
                  }
                  label += parseFloat(tooltipItem.value).toFixed(2);
                  return label;
                },
              },
            },
          },
        });
        console.log(pressureChart);
      })
      .catch((err) => {
        this.lorem = err;
        console.log(err);
        this.$q.notify({
          color: 'negative',
          position: 'top',
          message: 'Loading failed',
          icon: 'report_problem',
        });
      });
  },
};
</script>
