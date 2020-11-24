<template>
  <div class="flex justify-between d-header items-center">
    <nuxt-link to="/"
      ><Logoheader :scroll="scroll" :scrollpos="scrollpos" class="logoheader"
    /></nuxt-link>
    <Rightheader :scroll="scroll" :scrollpos="scrollpos" class="ml-5" />
  </div>
</template>
<script>
export default {
  props: {
    scroll: Boolean,
    scrollpos: {
      type: Number,
      default: 0,
    },
  },
}
</script>
<style scoped>
.logoheader {
  width: fit-content;
  height: fit-content;
}
</style>
