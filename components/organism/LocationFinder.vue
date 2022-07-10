<template>
  <div
    class="organism-location-finder "
  >
    <MoleculeTeaserWall :teasers="teasers" />
  </div>
</template>

<script>

export default {
  name: 'OrganismLocationFinder',
  data () {
    return {
      teasers: []
    };
  },
  async fetch () {
    this.teasers = await fetch(
      process.env.apiEndpointLocations
    ).then(res => res.json());
  }

};
</script>

<style lang="postcss" scoped>
  .organism-location-finder {
    margin-top: 4em;
  }
</style>
