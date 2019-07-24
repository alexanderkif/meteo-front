<template>
  <transition
    appear
    enter-active-class="animated fadeIn"
    leave-active-class="animated fadeOut"
  >
    <q-page class="flex flex-center">
      <div class="page-date text-center" v-show="showReturnData">
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
      <canvas id="temperatureChart" width="400" height="100" v-show="showReturnData"></canvas>
      <canvas id="humidityChart" width="400" height="100" v-show="showReturnData"></canvas>
      <canvas id="pressureChart" width="400" height="100" v-show="showReturnData"></canvas>
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
import Chart from 'chart.js';
import { setInterval } from 'timers';
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
      dateFrom: moment(new Date(new Date() - 1000 * 60 * 60 * 24 * 30).toISOString()).format('YYYY-MM-DD HH:mm'),
      dateTo: moment(new Date().toISOString()).format('YYYY-MM-DD HH:mm'),
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
      console.log(`https://meteo.alexanderkif.now.sh/data?start=${this.dateFrom}&finish=${this.dateTo}`);
      this.$axios
        .get(`https://meteo.alexanderkif.now.sh/data?start=${this.dateFrom}&finish=${this.dateTo}`)
        .then((response) => {
          const { datasets } = response.data;
          console.log(response.data);
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

          const ctxTemperature = document.getElementById('temperatureChart');
          const temperatureChart = new Chart(ctxTemperature,
            this.getChartCfg('Temperature', this.temperature, 'red', 'Temperature, *C'));

          const ctxHumidity = document.getElementById('humidityChart');
          const humidityChart = new Chart(ctxHumidity,
            this.getChartCfg('Humidity', this.humidity, 'blue', 'Humidity, %'));

          const ctxPressure = document.getElementById('pressureChart');
          const pressureChart = new Chart(ctxPressure,
            this.getChartCfg('Pressure', this.pressure, 'green', 'Pressure, mmHg'));

          setInterval(() => {
            temperatureChart.update();
            humidityChart.update();
            pressureChart.update();
          }, 1000 * 60 * 5);

          this.visible = false;
          this.showReturnData = true;
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
            pointRadius: 0,
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
