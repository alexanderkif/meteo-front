<template>
  <q-page class="col flex flex-center">
    <temperature class="q-ma-md bg-grey-3" :value="temperature"></temperature>
    <humidity class="q-ma-md bg-grey-3" :value="humidity"></humidity>
    <pressure class="q-ma-md bg-grey-3" :value="pressure"></pressure>
    <battery class="q-ma-md bg-grey-3" :value="battery"></battery>
    <div class="page-date text-center" v-show="showReturnData">
      Measured {{ year }}-{{ month }}-{{ date }} at {{ hours }}:{{ minutes }}
    </div>
    <q-inner-loading :showing="visible">
      <q-spinner-gears size="20vh" color="primary" />
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
import Temperature from '../components/temperature';
import Humidity from '../components/humidity';
import Pressure from '../components/pressure';
import Battery from '../components/battery';

export default {
  name: 'MeteoNow',
  components: {
    Temperature,
    Humidity,
    Pressure,
    Battery,
  },
  data() {
    return {
      temperature: null,
      humidity: null,
      pressure: null,
      battery: null,
      year: null,
      month: null,
      date: null,
      hours: null,
      minutes: null,
      visible: false,
      showReturnData: false,
    };
  },
  created() {
    this.visible = true;
    this.showReturnData = false;
    this.$axios.get('https://meteo.alexanderkif.now.sh')
      .then((response) => {
        this.temperature = response.data.lastDataset.temperature;
        this.humidity = response.data.lastDataset.humidity;
        this.pressure = response.data.lastDataset.pressure;
        this.battery = response.data.lastDataset.battery;
        const created = new Date(response.data.lastDataset.created);
        this.year = created.getFullYear();
        this.month = this.addZeroIfNeed(created.getMonth() + 1);
        this.date = this.addZeroIfNeed(created.getDate());
        this.hours = created.getHours();
        this.minutes = this.addZeroIfNeed(created.getMinutes());
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
  },
};
</script>
