<template>
   <div class="mt-1 flex items-center" v-if="getLocationSizeLabel">
        <AtomSvgIcon name="user" class="icon mr-2"></AtomSvgIcon>
        <span class="text-xs text-lightergray" v-html="getLocationSizeLabel"></span>
      </div>
</template>
