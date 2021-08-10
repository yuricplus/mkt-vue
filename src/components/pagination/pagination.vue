<template>
  <section class="c-pagination">
    <button
      :class="['c-pagination__button', { disabled: disablePrev }]"
      @click="prevAction()"
      :disabled="disablePrev"
    >
      <img src="@/assets/arrow-left-icon.svg" alt="left" />
      <span>anterior</span>
    </button>
    <button :class="['c-pagination__button', { disabled: disableNext }]" @click="nextAction()">
      <span>próxima</span>
      <img src="@/assets/arrow-right-icon.svg" alt="right" />
    </button>
  </section>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    disablePrev: {
      type: Boolean,
      require: true
    },
    disableNext: {
      type: Boolean,
      require: true
    }
  },
  methods: {
    prevAction() {
      if (!this.disablePrev) {
        this.$emit('prevAction');
      }
    },
    nextAction() {
      if (!this.disableNext) {
        this.$emit('nextAction');
      }
    }
  }
};
</script>

<style lang="scss">
@import './pagination';
</style>
