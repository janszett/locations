<template>
  <i
    class="atom-svg-icon"
    v-html="require(`@/assets/svg/${name}.svg?raw`)"
  />
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: 'heart'
    }
  }
};
</script>

<style lang="postcss" scoped>
  .atom-svg-icon {
    display: inline-flex;
    align-items: center;

    & >>> svg {
      display: block;
      width: 100%;
      height: auto;
      pointer-events: none;
    }
  }
</style>
