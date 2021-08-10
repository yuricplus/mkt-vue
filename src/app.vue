<template>
  <div id="app">
    <vContainer :gutter="false" :border="true">
      <a href="/">
        <img src="@/assets/enjoei-logo.svg" alt="logo-enjoei" />
      </a>
    </vContainer>

    <vContainer :gutter="true">
      <RouterView />
    </vContainer>
  </div>
</template>

<script>
import vContainer from '@/components/container.vue';

export default {
  components: {
    vContainer
  }
};
</script>

<style lang="scss">
body {
  margin: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: var(--font-family);
  color: var(--color-text-3);
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

button,
input,
select,
textarea {
  font: inherit;
  margin: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

a {
  color: var(--color-highlight);
  text-decoration: none;
}
</style>
