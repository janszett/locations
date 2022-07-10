<template>
  <div class="atom-price-tag absolute bottom-0 left-0 bg-lighterblue px-2 py-1 text-sm text-white rounded-tr rounded-bl">
    <div
      v-if="getPriceLabel.overline"
      class="text-xs leading-tight"
      v-html="getPriceLabel.overline"
    />
    <div
      v-if="getPriceLabel.label"
      class="font-semibold"
      v-html="getPriceLabel.label"
    />
  </div>
</template>

<script>
export default {
  props: {
    price: {
      type: Object,
      default () {
        return null;
      }
    }
  },
  computed: {
    getPriceLabel () {
      // const label = this.price.values?.original?.gross ? `${this.price.values.original.gross} / Tag` : 'Auf Anfrage';
      let overline, label;

      switch (this.price?.type) {
        case 'minimum_consumption':
          overline = 'Mindesverzehr ab';
          label = this.price.values.original.gross;

          break;
        case 'daily_rent':
          overline = 'ab';
          label = `${this.price.values.original.gross} / Tag`;
          break;

        default:
          label = 'Auf Anfrage';
      }

      return {
        overline,
        label
      };
    }
  }
};
</script>

<style lang="postcss" scoped>
.atom-price-tag {
  & > * {
    pointer-events: none;
  }
}
</style>
