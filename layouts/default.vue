<template>
  <div>
    <Nuxt />
    <OrganismSideBar />
  </div>
</template>

<script>
import { mapState } from 'vuex';

const DATA_ATTR_PREVENT_SCROLLING = 'data-prevent-scrolling';
export default {
  head () {
    const i18nHead = this.$nuxtI18nHead({ addSeoAttributes: true });
    return {
      htmlAttrs: {
        'data-prevent-scrolling': this.preventScrolling,
        ...i18nHead.htmlAttrs
      }
    };
  },
  headddd () {
    const seo = this.$nuxtI18nSeo();

    seo.htmlAttrs[String(DATA_ATTR_PREVENT_SCROLLING)] = this.preventScrolling;
    return seo;
  },
  computed: {
    ...mapState('layout', [
      'preventScrolling'
    ])
  }
};
</script>

<style lang="postcss">
html[data-prevent-scrolling="true"] {
  & body {
    position: relative;
    overflow: hidden;
    touch-action: none;
  }
}
</style>
