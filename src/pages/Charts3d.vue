<template>
  <transition
    appear
    enter-active-class="animated fadeIn"
    leave-active-class="animated fadeOut"
  >
    <q-page class="flex flex-center">
      <div class="page-date text-center" v-show="showReturnData">
        Measured from {{ year }}-{{ month }}-{{ date }} {{ hours }}:{{ minutes }} to now
      </div>
      <canvas id="temperatureChart" v-show="showReturnData"></canvas>
      <canvas id="humidityChart" v-show="showReturnData"></canvas>
      <canvas id="pressureChart" v-show="showReturnData"></canvas>
      <canvas id="batteryChart" v-show="showReturnData"></canvas>
      <q-inner-loading :showing="visible">
        <q-spinner-gears size="20vh" color="primary" />
      </q-inner-loading>
    </q-page>
  </transition>
</template>

<style lang="scss" scoped>
.page-date {
  font-size: 1.5rem;
  box-shadow: none;
  width: 100%;
  align-self: flex-start;
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
/* eslint-disable no-underscore-dangle */
import Chart from 'chart.js';
import { setInterval } from 'timers';
import moment from 'moment';
import dataJSON from '../../data.json';

export default {
  name: 'MeteoCharts3d',
  data() {
    return {
      temperature: [],
      humidity: [],
      pressure: [],
      altitude: [],
      battery: [],
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
    const START = new Date(new Date() - 1000 * 60 * 60 * 24 * 3).toISOString();
    this.$axios.get(`${dataJSON.urlAPI}/data?start=${START}&tframe=hour&step=1`)
      .then((response) => {
        const start = new Date(response.data.start);
        this.year = start.getFullYear();
        this.month = this.addZeroIfNeed(start.getMonth() + 1);
        this.date = this.addZeroIfNeed(start.getDate());
        this.hours = start.getHours();
        this.minutes = this.addZeroIfNeed(start.getMinutes());

        const { datasets } = response.data;
        datasets.forEach((dataset) => {
          this.temperature.push({
            t: new Date(dataset._id).valueOf(),
            y: +dataset.temperature,
          });
          this.humidity.push({
            t: new Date(dataset._id).valueOf(),
            y: +dataset.humidity,
          });
          this.pressure.push({
            t: new Date(dataset._id).valueOf(),
            y: +dataset.pressure,
          });
          this.battery.push({
            t: new Date(dataset._id).valueOf(),
            y: +dataset.battery,
          });
          this.altitude.push({ x: dataset._id, y: +dataset.altitude });
        });

        const ctxTemperature = document.getElementById('temperatureChart');
        const temperatureChart = new Chart(ctxTemperature,
          this.getChartCfg('Temperature', this.temperature, 'red', 'Temperature, *C'));

        const ctxHumidity = document.getElementById('humidityChart');
        const humidityChart = new Chart(ctxHumidity,
          this.getChartCfg('Humidity', this.humidity, 'blue', 'Humidity, %'));

        const ctxPressure = document.getElementById('pressureChart');
        const pressureChart = new Chart(ctxPressure,
          this.getChartCfg('Pressure', this.pressure, 'green', 'Pressure, mmHg'));

        const ctxBattery = document.getElementById('batteryChart');
        const batteryChart = new Chart(ctxBattery,
          this.getChartCfg('Battery', this.battery, 'orange', 'Battery, V'));

        setInterval(() => {
          temperatureChart.update();
          humidityChart.update();
          pressureChart.update();
          batteryChart.update();
        }, 1000 * 60 * 5);

        this.visible = false;
        this.showReturnData = true;
      })
      .catch((err) => {
        this.lorem = err;
        // console.log(err);
        this.$q.notify({
          color: 'negative',
          position: 'top',
          message: 'Loading failed',
          icon: 'report_problem',
        });
      });
  },
  methods: {
    addZeroIfNeed(date) {
      if (+date < 10) return `0${date}`;
      return date;
    },
    getChartCfg(labelChart, dataset, color, labelY) {
      return {
        type: 'line',
        data: {
          datasets: [{
            label: labelChart,
            backgroundColor: color,
            borderColor: color,
            data: dataset,
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
              time: {
                displayFormats: {
                  minute: 'D MMM H:mm',
                },
              },
              ticks: {
                source: 'data',
                autoSkip: true,
              },
            }],
            yAxes: [{
              scaleLabel: {
                display: true,
                labelString: labelY,
              },
              properties: {
                paddingTop: 30,
                paddingBottom: 100,
              },
            }],
          },
          tooltips: {
            intersect: false,
            mode: 'index',
            callbacks: {
              title(tooltipItems, myData) {
                const obj = Object.assign({},
                  myData.datasets[tooltipItems[0].datasetIndex].data[tooltipItems[0].index]);
                return moment(new Date(obj.t).toISOString()).format('YYYY-MM-DD HH:mm');
              },
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
      };
    },
  },
};
</script>
