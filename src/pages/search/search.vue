<template>
  <main>
    <VFilter @clicked="searchProducts" @clearSearch="searchProducts" :total="totalSearch" />
    <div class="c-products-list" v-if="products.length > 0">
      <div
        v-for="product in products"
        :key="product ? product.node.id : Math.random()"
        class="c-products-list__searched"
      >
        <VProductCard
          :imageId="product ? product.node.photo.image_public_id : ''"
          :title="product ? product.node.title.name : ''"
          :path="`https://www.enjoei.com.br/p/${product ? product.node.path : ''}`"
          :priceCurrent="product ? product.node.price.current : 0"
          :priceOriginal="product ? product.node.price.original : 0"
          :loading="loading"
        />
      </div>
    </div>
    <VProductNotFound v-if="products.length <= 0" :clickButton="clearSearhc" />
    <VPagination
      v-if="products.length > 0"
      @nextAction="next"
      @prevAction="prev"
      :disablePrev="disablePrevButton"
      :disableNext="disableNextButton"
    />
  </main>
</template>

<style lang="scss">
@import 'style';
</style>

<script>
import VProductCard from '@/components/product-card/product-card.vue';
import VFilter from '@/components/filter/filter.vue';
import VProductNotFound from '@/components/product-not-found/product-not-found.vue';
import VPagination from '@/components/pagination/pagination.vue';

import { post } from '@/tools/service';
import { PRODUCTS_QUERY } from '@/constants/graphql';

export default {
  components: {
    VProductCard,
    VFilter,
    VProductNotFound,
    VPagination
  },
  data() {
    return {
      loading: true,
      itemsToShow: 15,
      searchedTerms: '',
      totalSearch: 0
    };
  },
  beforeCreate() {
    this.$store.dispatch('setProducts', new Array(15));
  },
  methods: {
    async getProducts(value, after) {
      try {
        const products = await post('/graphql-search', PRODUCTS_QUERY({ term: value, after }));

        this.$store.dispatch(
          'setPrevSearch',
          this.$store.state.products[0] ? this.$store.state.products[0].cursor : null
        );

        if (products?.data?.data.search.products) {
          this.$store.dispatch('setProducts', products.data.data.search.products.edges);
          this.$store.dispatch(
            'setNextSearch',
            products.data.data.search.products.edges.slice(-1)[0].cursor
          );
          this.searchedTerms = value;
          this.totalSearch = products.data.data.search.products.total;
        }
        setTimeout(() => {
          this.loading = false;
        }, 1000);
      } catch (error) {
        this.$store.dispatch('setProducts', []);
        this.loading = false;
        this.totalSearch = 0;
      }
    },
    clearSearhc() {
      this.totalSearch = 0;
      this.$store.dispatch('setCurrentPageSearch', 1);
      this.$router.push({
        query: {
          search: ''
        }
      });
      this.getProducts('');
    },
    searchProducts(value) {
      this.loading = true;
      this.$router.push({
        query: {
          search: value
        }
      });
      this.$store.dispatch('setProducts', new Array(15));
      this.getProducts(value);
    },
    next() {
      let { currentPageSearch } = this.$store.state;
      const minimalPage = 1;
      currentPageSearch = currentPageSearch + minimalPage;
      this.loading = true;
      this.$store.dispatch('setCurrentPageSearch', currentPageSearch);
      this.getProducts(this.searchedTerms, this.$store.state.nextSearch);
    },
    prev() {
      let { currentPageSearch } = this.$store.state;
      const minimalPage = 1;
      if (currentPageSearch !== minimalPage) {
        currentPageSearch = currentPageSearch - minimalPage;
      }
      this.$store.dispatch('setCurrentPageSearch', currentPageSearch);
      this.loading = true;
      this.getProducts(this.searchedTerms, this.$store.state.prevSearch);
    }
  },
  computed: {
    products() {
      return this.$store.state.products;
    },
    disablePrevButton() {
      return (
        this.$store.state.prevSearch === null ||
        this.itemsToShow * this.$store.state.currentPageSearch === this.itemsToShow
      );
    },
    disableNextButton() {
      return this.itemsToShow * this.$store.state.currentPageSearch >= this.totalSearch;
    }
  },
  created() {
    const { search } = this.$route.query;
    this.getProducts(search ? search : '');
  }
};
</script>
