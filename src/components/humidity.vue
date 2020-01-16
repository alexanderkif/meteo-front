<template>
  <div class="humidity q-pa-md shadow-5">
    <div class="row justify-center">
      <div class="col-4 flex flex-center relative-position">
        <div class="humidity__scale-text self-start absolute text-right">100</div>
        <div class="humidity__scale-text self-middle absolute text-right">50</div>
        <div class="humidity__scale-text self-end absolute text-right">0</div>
        <div class="humidity__point self-end shadow-10 absolute"></div>
        <div class="humidity__scale flex shadow-10">
          <div class="humidity__scale-range full-height flex">
            <div class="humidity__scale-value self-end"></div>
          </div>
        </div>
      </div>
      <div class="humidity__digits col-6 self-center text-center text-h4">
        {{ value?value.toFixed(0):value }}
        <br>
        %
      </div>
    </div>
    <div class="row justify-center">
      <div class="humidity__label q-px-sm q-pt-md text-h6">Humidity</div>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    value: Number,
  },
  data() {
    return {
      scaleRange: 100,
    };
  },
  updated() {
    const el = this.$el.querySelector('.humidity__scale-range');
    const h = Math.floor(el.clientHeight / this.scaleRange * this.value);
    el.querySelector('.humidity__scale-value').style.height = `${h}px`;
  },
};
</script>

<style lang="scss">

.humidity {
  position: relative;
  border-radius: 1rem;
  width: 10rem;
  height: 15rem;

  &__scale-text {
    left: -1rem;
    width: 1rem;
    font-size: 0.75rem;
  }

  &__point {
    bottom: -0.5rem;
    background: radial-gradient(at 35% 25%, rgba(80,80,255,1) 0%, rgba(9,9,121,1) 75%,
      rgba(0,0,36,1) 100%);
    width: 2rem;
    height: 1.5rem;
    border-radius: 0 0 0.75rem 0.75rem;
  }

  &__scale {
    background-color: #fffffe;
    background: linear-gradient(90deg, rgba(121,121,121,1) 0%, rgba(255,240,240,1) 40%,
      rgba(121,121,121,1) 90%, rgba(36,36,36,1) 100%);
    width: 1rem;
    height: 10rem;
    border-radius: 1rem;
    margin: 0 0 0.5rem 0;
    padding: 0.5rem 0 0.5rem 0;

    &-value {
        background-color: #fffffe;
        background: linear-gradient(90deg, rgba(7,7,148,1) 0%, rgba(50,50,255,1) 40%,
          rgba(9,9,121,1) 90%, rgba(0,0,36,1) 100%);
        width: inherit;
    }

    &-range {
      width: inherit;
    }
  }

  &__digits, &__label {
    // color: rgba(255,0,0,1);
  }
}
</style>
