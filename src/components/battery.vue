<template>
  <div class="battery q-pa-md shadow-5">
    <div class="row justify-center">
      <div class="col-5 flex flex-center q-pt-md relative-position">
        <div class="battery__scale-text self-start absolute text-right">4.5</div>
        <div class="battery__scale-text self-middle absolute text-right">3.5</div>
        <div class="battery__scale-text self-end absolute text-right">2.5</div>
        <div class="battery__scale flex flex-center shadow-10 relative-position">
          <div class="battery__point self-start absolute"></div>
          <div class="battery__scale-range full-height flex">
            <div class="battery__scale-value self-end"></div>
          </div>
        </div>
      </div>
      <div class="battery__digits col-5 self-center text-center text-h4">
        {{ value?value.toFixed(2):value }}
        <br>
        V
      </div>
    </div>
    <div class="row justify-center">
      <div class="battery__label q-px-sm q-pt-sm text-h6">Battery</div>
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
      scaleRange: 2,
    };
  },
  updated() {
    const el = this.$el.querySelector('.battery__scale-range');
    const h = Math.floor(el.clientHeight / this.scaleRange * (this.value - 2.5));
    el.querySelector('.battery__scale-value').style.height = `${h}px`;
  },
};
</script>

<style lang="scss">

.battery {
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
    top: -0.4rem;
    background: radial-gradient(at 40% 70%, rgba(255,255,255,1) 0%, rgba(121,121,121,1) 75%,
      rgba(36,36,36,1) 100%);
    width: 1rem;
    height: 0.4rem;
    border-radius: 0.25rem 0.25rem 0 0;
  }

  &__scale {
    background-color: #fffffe;
    background: linear-gradient(90deg, rgba(121,121,121,1) 0%, rgba(255,240,240,1) 40%,
      rgba(121,121,121,1) 90%, rgba(36,36,36,1) 100%);
    width: 2.2rem;
    height: 10rem;
    border-radius: 0.25rem;
    // margin: 0 0 0.5rem 0;
    padding: 0.5rem 0 0.2rem 0;

    &-value {
        background-color: #fffffe;
        background: linear-gradient(90deg, rgba(148,148,7,1) 0%, rgba(255,255,50,1) 40%,
          rgba(121,121,9,1) 90%, rgba(36,36,0,1) 100%);
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
