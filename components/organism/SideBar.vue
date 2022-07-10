<template>
  <div
    class="organism-sidebar fixed h-screen w-screen top-0 left-0 duration-500"
    :class="sidebarClass"
    @click="onClickClose"
  >
    <aside
      class="h-screen fixed right-0 top-0"
      @click.stop="onClickSidebar"
    >
      <header class="flex h-header flex-shrink-0 items-center justify-between bg-gray-100 pl-5 text-xl font-bold">
        <span>Sidebar</span>
        <AtomSvgIcon
          class="close"
          name="cancel"
          @click.native.stop="onClickClose"
        />
      </header>
    </aside>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  computed: {
    ...mapState('sidebar', [
      'enabled'
    ]),
    sidebarClass () {
      return {
        'style-active': this.enabled
      };
    }
  },
  methods: {
    onClickClose () {
      this.$store.dispatch('sidebar/toggleSidebar');
    },
    onClickSidebar (e) {
      e.stopPropagation();
    }
  }

};
</script>

<style lang="postcss" scoped>
.organism-sidebar {
  z-index: 250;
  pointer-events: none;

  & aside {
    width: 100%;
    background: white;
    transition: 350ms;
    transform: translateX(100%);

    @media (--sm) {
      width: 500px;
    }

    & header {
      height: 65px;
    }

    & .close {
      width: 35px;
      height: 35px;
      cursor: pointer;

      & >>> svg {
        width: 24px;
        height: 24px;

        @media (--sm) {
          width: 18px;
          height: 18px;
        }
      }
    }
  }

  &.style-active {
    pointer-events: auto;
    background: rgb(0 0 0 / 50%);

    & aside {
      transition: 350ms;
      transform: translateX(0);
    }
  }
}
</style>
