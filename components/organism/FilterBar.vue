<template>
  <div class="organism-filter-bar fixed top-0 left-0 w-screen p-2">
    <button
      class="rounded border border-lightergray"
      @click.prevent="toggleSidebar"
    >
      <span>
        Weitere Filter
      </span>
    </button>
  </div>
</template>

<script>
export default {
  methods: {
    toggleSidebar (e) {
      this.$store.dispatch('sidebar/toggleSidebar');
    }
  }
};
</script>

<style lang="postcss" scoped>
.organism-filter-bar {
  z-index: 100;
  display: block;
  text-align: right;
  background: white;

  & button {
    display: inline-flex;
    align-items: center;
    height: 40px;
    padding: 0 1rem;
    appearance: none;
  }
}
</style>
