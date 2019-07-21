<template>
  <q-page class="flex flex-center">
    <div class="page-date text-center" v-show="showReturnData">
      Measured {{ year }}-{{ month }}-{{ date }} at {{ hours }}:{{ minutes }}
    </div>
    <q-page class="flex flex-center">
      <q-card class="bg-grey-3 relative-position card-datasets">
        <q-card-section>
          <div class="text-h6 text-center">Temperature,</div>
          <div class="text-h6 text-center">&deg;C</div>
        </q-card-section>

        <q-card-section>
          <transition
            appear
            enter-active-class="animated fadeIn"
            leave-active-class="animated fadeOut"
          >
            <div class="card-data text-center" v-show="showReturnData">
              {{ temperature }}
            </div>
          </transition>
        </q-card-section>
      </q-card>

      <q-card class="bg-grey-3 relative-position card-datasets">
        <q-card-section>
          <div class="text-h6 text-center">Humidity,</div>
          <div class="text-h6 text-center">%</div>
        </q-card-section>

        <q-card-section>
          <transition
            appear
            enter-active-class="animated fadeIn"
            leave-active-class="animated fadeOut"
          >
            <div class="card-data text-center" v-show="showReturnData">
              {{ humidity }}
            </div>
          </transition>
        </q-card-section>
      </q-card>

      <q-card class="bg-grey-3 relative-position card-datasets">
        <q-card-section>
          <div class="text-h6 text-center">Pressure,</div>
          <div class="text-h6 text-center">mmHg</div>
        </q-card-section>

        <q-card-section>
          <transition
            appear
            enter-active-class="animated fadeIn"
            leave-active-class="animated fadeOut"
          >
            <div class="card-data text-center" v-show="showReturnData">
              {{ pressure }}
            </div>
          </transition>
        </q-card-section>
      </q-card>
      <q-card class="bg-grey-3 relative-position card-datasets">
        <q-card-section>
          <div class="text-h6 text-center">Altitude,</div>
          <div class="text-h6 text-center">meters</div>
        </q-card-section>

        <q-card-section>
          <transition
            appear
            enter-active-class="animated fadeIn"
            leave-active-class="animated fadeOut"
          >
            <div class="card-data text-center" v-show="showReturnData">
              {{ altitude }}
            </div>
          </transition>
        </q-card-section>
      </q-card>

      <q-inner-loading :showing="visible">
        <q-spinner-gears size="100px" color="primary" />
      </q-inner-loading>
    </q-page>
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
export default {
  name: 'MeteoNow',
  data() {
    return {
      temperature: null,
      humidity: null,
      pressure: null,
      altitude: null,
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
    setTimeout(() => {
      this.$axios.get('https://meteo.alexanderkif.now.sh')
        .then((response) => {
          console.log(response.data);
          this.temperature = response.data.lastDataset.temperature;
          this.humidity = response.data.lastDataset.humidity;
          this.pressure = response.data.lastDataset.pressure;
          this.altitude = response.data.lastDataset.altitude;
          const created = new Date(response.data.lastDataset.created);
          this.year = created.getFullYear();
          this.month = created.getMonth() + 1;
          if (+this.month < 10) this.month = `0${this.month}`;
          this.date = created.getDate();
          if (+this.date < 10) this.date = `0${this.date}`;
          this.hours = created.getHours();
          if (+this.hours < 10) this.hours = `0${this.hours}`;
          this.minutes = created.getMinutes();
          if (+this.minutes < 10) this.minutes = `0${this.minutes}`;
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
    }, 3000);
  },
};
</script>
