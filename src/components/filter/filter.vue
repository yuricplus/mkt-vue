<template>
  <section class="c-filter">
    <div class="c-filter__l-container">
      <span class="c-filter__l-container__search-text">
        {{ total && total > 0 ? `${total} produtos encontrados` : 'nenhum produto encontrado' }}
      </span>
    </div>
    <div class="c-filter__l-container">
      <div class="c-filter__l-container__box">
        <span class="c-filter__l-container__box__text" @click="clearSearch()">Limpar busca</span>
        <div class="c-filter__l-container__box__input-search">
          <input
            type="text"
            placeholder='Busque: "Bicicleta"'
            v-model="valueSearch"
            v-on:keyup.13="buttonClick()"
          />
          <button
            title="Pesquisar"
            class="c-filter__l-container__box__input-search__button"
            @click="buttonClick()"
          >
            <img
              src="@/assets/search-icon.svg"
              alt="logo-enjoei"
              class="c-filter__l-container__box__input-search__button__image"
            />
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      valueSearch: ''
    };
  },
  props: {
    total: {
      type: Number,
      require: false
    }
  },
  created() {
    const { search } = this.$route.query;
    if (search) {
      this.valueSearch = search;
    }
  },
  methods: {
    buttonClick() {
      this.$emit('clicked', this.valueSearch);
    },
    clearSearch() {
      this.valueSearch = '';
      this.$emit('clearSearch', this.valueSearch);
    }
  }
};
</script>
<style lang="scss">
@import './filter';
</style>
