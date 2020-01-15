<template>
  <div class="temperature q-pa-md">
    <div class="row justify-center">
      <div class="col-3 flex flex-center relative-position">
        <div class="temperature__point self-end shadow-3 absolute"></div>
        <div class="temperature__scale flex shadow-3 q-py-sm">
          <div class="temperature__scale-range full-height flex">
            <div class="temperature__scale-value self-end"></div>
          </div>
        </div>
      </div>
      <div class="temperature__digits col-6 self-center text-center text-h4">{{ value }}</div>
    </div>
    <div class="row justify-center">
      <div class="temperature__label q-pa-sm text-h6">Temperature</div>
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

  &__point {
    bottom: -0.5rem;
    background: radial-gradient(circle, rgba(255,0,0,1) 0%, rgba(121,9,9,1) 81%,
      rgba(36,0,0,1) 100%);
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 0.75rem;
  }

  &__scale {
    background: linear-gradient(90deg, rgba(121,121,121,1) 0%, rgba(255,255,255,1) 45%,
      rgba(121,121,121,1) 90%, rgba(36,36,36,1) 100%);
    width: 1rem;
    height: 10rem;
    border-radius: 1rem;

    &-value {
        background: linear-gradient(90deg, rgba(148,7,7,1) 0%, rgba(255,0,0,1) 45%,
          rgba(121,9,9,1) 90%, rgba(36,0,0,1) 100%);
        width: inherit;
    }

    &-range {
      width: inherit;
    }
  }

  &__digits, &__label {
    color: rgb(196, 9, 9);
  }
}
</style>
