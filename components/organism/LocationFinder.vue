<template>
  <div
    class="organism-location-finder container"
  >
  <MoleculeTeaserWall :teasers="teasers"/>
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

    console.log(this.teasers);
  }

};
</script>
