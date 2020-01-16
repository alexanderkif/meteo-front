<template>
  <div class="temperature q-pa-md shadow-5">
    <div class="row justify-center">
      <div class="col-4 flex flex-center relative-position">
        <div class="temperature__scale-text self-start absolute text-right">50</div>
        <div class="temperature__scale-text self-middle absolute text-right">0</div>
        <div class="temperature__scale-text self-end absolute text-right">-50</div>
        <div class="temperature__point self-end shadow-10 absolute"></div>
        <div class="temperature__scale flex shadow-10">
          <div class="temperature__scale-range full-height flex">
            <div class="temperature__scale-value self-end"></div>
          </div>
        </div>
      </div>
      <div class="temperature__digits col-6 self-center text-center text-h4">
        {{ value?value.toFixed(1):value }}
        <br>
        &deg;C
      </div>
    </div>
    <div class="row justify-center">
      <div class="temperature__label q-px-sm q-pt-md text-h6">Temperature</div>
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
    const el = this.$el.querySelector('.temperature__scale-range');
    const h = Math.floor(el.clientHeight / this.scaleRange * this.value + el.clientHeight / 2);
    el.querySelector('.temperature__scale-value').style.height = `${h}px`;
  },
};
</script>

<style lang="scss">

.temperature {
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
    background: radial-gradient(at 40%, rgba(255,50,50,1) 0%, rgba(121,9,9,1) 75%,
      rgba(36,0,0,1) 100%);
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 0.75rem;
  }

  &__scale {
    background-color: #fffffe;
    background: linear-gradient(90deg, rgba(121,121,121,1) 0%, rgba(255,240,240,1) 40%,
      rgba(121,121,121,1) 90%, rgba(36,36,36,1) 100%);
    width: 1rem;
    height: 10rem;
    border-radius: 1rem;
    margin: 0 0 0.5rem 0;
    padding: 0.5rem 0 0.4rem 0;

    &-value {
        background-color: #fffffe;
        background: linear-gradient(90deg, rgba(148,7,7,1) 0%, rgba(255,50,50,1) 40%,
          rgba(121,9,9,1) 90%, rgba(36,0,0,1) 100%);
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
