<template>
  <div class="c-product-card">
    <div class="c-product-card__wrapper" v-if="!loading">
      <a :href="path" target="_blank" ref="no-refer">
        <img class="c-product-card__wrapper__image" :src="imageUrl" :alt="title" />

        <div class="c-product-card__wrapper__container">
          <div class="c-product-card__wrapper__container__tag">
            <span
              :class="[
                'c-product-card__wrapper__container__tag__price',
                { 'c-product-card__wrapper__container__tag__discount': hasDiscount() }
              ]"
            >
              R$ {{ priceCurrent }}
            </span>
            <span
              class="c-product-card__wrapper__container__tag__price-discount"
              v-if="hasDiscount()"
            >
              R$ {{ priceOriginal }}
            </span>
          </div>
        </div>

        <div class="c-product-card__wrapper__discount" v-if="hasDiscount()">
          <div class="c-product-card__wrapper__discount__tag">
            <span class="c-product-card__wrapper__discount__tag__value">
              {{ getPercentage() }}% off
            </span>
          </div>
        </div>
      </a>
    </div>
    <div class="c-product-card__skeletor" v-if="loading"></div>
  </div>
</template>

<script>
import { getImageUrl, IMAGE_PRESETS } from '@/tools/get-image-url';

export default {
  props: {
    imageId: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    path: {
      type: String,
      required: true
    },
    priceCurrent: {
      type: Number,
      require: true
    },
    priceOriginal: {
      type: Number,
      require: false
    },
    loading: {
      type: Boolean,
      require: true
    }
  },
  data() {
    return {
      imageUrl: getImageUrl(this.imageId, IMAGE_PRESETS.product.card)
    };
  },
  methods: {
    hasDiscount() {
      return this.priceCurrent < this.priceOriginal;
    },
    getPercentage() {
      return (((this.priceOriginal - this.priceCurrent) / this.priceOriginal) * 100).toFixed();
    }
  },
  computed: {
    href() {
      return `https://www.enjoei.com.br/p/${this.path}`;
    }
  }
};
</script>

<style scoped lang="scss">
@import 'product-card';
</style>
