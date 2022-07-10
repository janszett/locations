<template>
  <article class="molecule-teaser-card">
    <a :href="`https://www.eventlocations.com/de/venues/${slug}`"  target="_blank"  class="image-wrap relative z-1 mb-2 block overflow-hidden rounded">
      <nuxt-img
        provider="imgix"
        :src="image.storage_name"
        width="640"
        fit="crop"
        :modifiers="{ auto: 'compress', crop: 'faces', ar: '5:3'}"
      />
    </a>
    <section>
      <div class="flex justify-between">
        <a class="text-lg font-semibold" :href="`https://www.eventlocations.com/de/venues/${slug}`" target="_blank" v-html="name"></a>
        <div class="z-2 ml-3">
          <AtomSvgIcon v-if="virtual_tour_url" name="vr" class="vr-icon relative text-lightergray"></AtomSvgIcon>
        </div>
      </div>
      <div class="text-xs location text-blue" v-if="address.address_line" v-html="address.address_line" />

      <div class="mt-1 flex items-center" v-if="getLocationSizeLabel">
        <AtomSvgIcon name="user" class="icon mr-2"></AtomSvgIcon>
        <span class="text-xs text-lightergray" v-html="getLocationSizeLabel"></span>
      </div>

      <div class="mt-1 flex items-center">
        <AtomSvgIcon name="catering" class="icon mr-2"></AtomSvgIcon>
        <span class="text-xs text-lightergray" >Fester Partner</span>
      </div>

    </section>

  </article>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    name: {
      type: String,
      required: true
    },
    slug: {
      type: String,
      required: true
    },
    virtual_tour_url: {
      type: String,
      default: null
    },
    image: {
      type: Object,
      required: true
    },
    areas: {
      type: Number,
      default: 1
    },
    min_pax: {
      type: Number,
      default: null
    },
    max_seated: {
      type: Number,
      default: null
    },
    address: {
      type: Object,
      required: true
    }
  },
  computed: {
    getLocationSizeLabel () {
      if (!this.min_pax || !this.max_seated) return null;

      const peopleCount = `${this.min_pax} - ${this.max_seated}`;
      return this.areas > 1 ? `${this.areas} Räume (${peopleCount})` : `${peopleCount}`;
    }
  }
};
</script>

<style lang="postcss" scoped>
  .molecule-teaser-card {
    position: relative;
    font-family: Inter, Arial, sans-serif;

    & >>> .vr-icon {
      width: 30px;
      height: 24px;
    }

    & >>> .icon {
      width: 16px;
      height: 16px;
    }

    & .image-wrap {
      & img {
        position: relative;
        border: none;
        outline: none;
        transition: transform 350ms;
      }

      &:hover {
        & img {
          transform: scale(1.1);
          transform-origin: 50% 50%;
        }
      }
    }
  }
</style>
