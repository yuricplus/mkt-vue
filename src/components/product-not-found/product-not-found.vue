<template>
  <section class="c-product-not-found">
    <div class="c-product-not-found__text">
      <h4 class="c-product-not-found__text__title">ué, não encontramos nadinha</h4>
      <span class="c-product-not-found__text__description">que tal recomeçar do começo?</span>
    </div>
    <button class="c-product-not-found__button" @click="clear">limpar busca</button>
    <img
      src="@/assets/blank-slate.png"
      alt="produto não encontrado"
      class="c-product-not-found__image"
    />
  </section>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    clickButton: {
      type: Function,
      require: true
    }
  },
  methods: {
    clear() {
      this.clickButton();
    }
  }
};
</script>

<style lang="scss">
@import './product-not-found';
</style>
