<template>
  <div class="atom-favorite-icon flex items-center justify-center rounded text-sm transition focus:outline-none favorite-button absolute right-0 top-0 z-2 m-2 text-red">
    <AtomSvgIcon
      class="icon"
      name="heart"
    />
  </div>
</template>

<script>
export default {
};
</script>

<style lang="postcss" scoped>
  .atom-favorite-icon {
    width: 40px;
    height: 50px;
    background: white;
    box-shadow: 0 4px 8px 0 rgb(0 0 0 / 30%), 0 2px 4px 0 rgb(0 0 0 / 25%);

    & .icon {
      width: 18px;
      height: 18px;
    }

    &:hover {
      transform: translateY(2px);
    }
  }
</style>
