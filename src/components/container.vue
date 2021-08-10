<template>
  <div :class="['c-container', { '-with-gutter': gutter }, { '-with-border': border }]">
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    gutter: {
      type: Boolean,
      default: true
    },
    border: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style scoped lang="scss">
@import '../scss/style';

.c-container {
  max-width: 1176px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  padding: 10px 0;

  &.-with-gutter {
    max-width: 1224px;
  }

  &.-with-border {
    border-bottom: 1px solid $color-border;
  }

  img {
    max-width: 30px;
  }
}
</style>
