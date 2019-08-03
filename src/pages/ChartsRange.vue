<template>
  <transition
    appear
    enter-active-class="animated fadeIn"
    leave-active-class="animated fadeOut"
  >
    <q-page class="flex flex-center">
      <div class="page-date text-center">
        From
        <div class="q-pa-md" style="max-width: 300px; display: inline-block">
          <q-input filled v-model="dateFrom">
            <template v-slot:prepend>
              <q-icon name="event" class="cursor-pointer">
                <q-popup-proxy ref="qDateFromProxy" transition-show="scale" transition-hide="scale">
                  <q-date v-model="dateFrom" mask="YYYY-MM-DD HH:mm"
                    @input="() => $refs.qDateFromProxy.hide()" />
                </q-popup-proxy>
              </q-icon>
            </template>

            <template v-slot:append>
              <q-icon name="access_time" class="cursor-pointer">
                <q-popup-proxy ref="qTimeFromProxy" transition-show="scale" transition-hide="scale">
                  <q-time v-model="dateFrom" mask="YYYY-MM-DD HH:mm" format24h
                    @input="() => $refs.qTimeFromProxy.hide()" />
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>
        </div>
        to
        <div class="q-pa-md" style="max-width: 300px; display: inline-block">
          <q-input filled v-model="dateTo">
            <template v-slot:prepend>
              <q-icon name="event" class="cursor-pointer">
                <q-popup-proxy ref="qDateToProxy" transition-show="scale" transition-hide="scale">
                  <q-date v-model="dateTo" mask="YYYY-MM-DD HH:mm"
                    @input="() => $refs.qDateToProxy.hide()" />
                </q-popup-proxy>
              </q-icon>
            </template>

            <template v-slot:append>
              <q-icon name="access_time" class="cursor-pointer">
                <q-popup-proxy ref="qTimeToProxy" transition-show="scale" transition-hide="scale">
                  <q-time v-model="dateTo" mask="YYYY-MM-DD HH:mm" format24h
                    @input="() => $refs.qTimeToProxy.hide()" />
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>
        </div>
        <div class="q-pa-md q-gutter-sm" style="display: inline-block">
          <q-btn color="primary" label="Get data" @click="getData"/>
        </div>
      </div>
      <div id="error" class="text-h4 text-negative"></div>
      <canvas id="temperatureChart" width="400" height="100" v-show="showReturnData"></canvas>
      <canvas id="humidityChart" width="400" height="100" v-show="showReturnData"></canvas>
      <canvas id="pressureChart" width="400" height="100" v-show="showReturnData"></canvas>
      <q-inner-loading :showing="visible">
        <q-spinner-gears size="10vh" color="primary" />
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
import moment from 'moment';

export default {
  name: 'MeteoCharts3d',
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
      visible: false,
      showReturnData: true,
      dateFrom: moment(new Date(new Date() - 1000 * 60 * 60 * 24 * 30).toISOString())
        .format('YYYY-MM-DD HH:mm'),
      dateTo: moment(new Date().toISOString()).format('YYYY-MM-DD HH:mm'),
      temperatureChart: null,
      humidityChart: null,
      pressureChart: null,
    };
  },
  methods: {
    getData() {
      this.visible = true;
      this.showReturnData = false;
      this.temperature = [];
      this.humidity = [];
      this.pressure = [];
      this.altitude = [];
      this.$axios
        .get(`https://meteo.alexanderkif.now.sh/data?start=${this.dateFrom}&finish=${this.dateTo}`)
        .then((response) => {
          const err = document.getElementById('error');
          if (response.data.result) {
            this.showReturnData = false;
            this.visible = false;
            err.innerText = response.data.result;
            return;
          }
          if (response.data.count === 0) {
            this.showReturnData = false;
            this.visible = false;
            err.innerText = 'No data to show in the range.';
            return;
          }
          this.showReturnData = true;
          err.innerText = '';
          const { datasets } = response.data;
          // console.log(response.data);
          datasets.forEach((dataset) => {
            const timezone = (new Date().getTimezoneOffset()) * 60 * 1000;
            const date = new Date(Date.parse(dataset._id) + timezone);
            this.temperature.push({
              t: new Date(date).valueOf(),
              y: +dataset.temperature,
            });
            this.humidity.push({
              t: new Date(date).valueOf(),
              y: +dataset.humidity,
            });
            this.pressure.push({
              t: new Date(date).valueOf(),
              y: +dataset.pressure,
            });
            this.altitude.push({ x: date, y: +dataset.altitude });
          });

          let scaleFormat = { minute: 'D MMM H:mm' };
          if (this.temperature[1].t - this.temperature[0].t >= 3 * 60 * 60 * 1000) {
            scaleFormat = { hour: 'D MMM HH' };
          }
          if (this.temperature[1].t - this.temperature[0].t >= 24 * 60 * 60 * 1000) {
            scaleFormat = { day: 'D MMM' };
          }

          if (this.temperatureChart) this.temperatureChart.destroy();
          if (this.humidityChart) this.humidityChart.destroy();
          if (this.pressureChart) this.pressureChart.destroy();

          this.temperatureChart = new Chart(document.getElementById('temperatureChart'),
            this.getChartCfg('Temperature', this.temperature, 'red', 'Temperature, *C', scaleFormat));

          this.humidityChart = new Chart(document.getElementById('humidityChart'),
            this.getChartCfg('Humidity', this.humidity, 'blue', 'Humidity, %', scaleFormat));

          this.pressureChart = new Chart(document.getElementById('pressureChart'),
            this.getChartCfg('Pressure', this.pressure, 'green', 'Pressure, mmHg', scaleFormat));

          this.visible = false;
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
    addZeroIfNeed(date) {
      if (+date < 10) return `0${date}`;
      return date;
    },
    getChartCfg(labelChart, dataset, color, labelY, scaleFormat) {
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
                displayFormats: scaleFormat,
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
