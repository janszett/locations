<template>
  <div
    class="atom-fact-with-icon mt-1 flex items-center"
  >
    <AtomSvgIcon
      :name="iconName"
      class="icon mr-2"
    />
    <slot name="content">
      <span
        class="text-lightergray"
        v-html="content"
      />
    </slot>
  </div>
</template>

<script>
export default {
  props: {
    iconName: {
      type: String,
      required: true
    },
    content: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="postcss" scoped>
.atom-fact-with-icon {
  & >>> span {
    font-size: 0.8125rem;
  }
}
</style>
