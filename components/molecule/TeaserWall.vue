<template>
  <div class="molecule-teaser-wall grid gap-5 gap-y-8 px-5 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-2 2xl:grid-cols-3 3xl:grid-cols-4">
    <MoleculeTeaserCard v-for="(teaser, index) in teasers" :key="`teaser-${index}`" v-bind="teaser"/>
  </div>
</template>

<script>
export default {
  props: {
    teasers: {
      type: Array,
      default () {
        return [];
      }
    }
  }
};
</script>

<style lang="postcss" scoped>
.molecule-teaser-wall {
  position: relative;
}
</style>
