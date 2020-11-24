<template>
  <div
    class="flex items-center margin-0-auto z-10 w-3/4 rentt"
    :class="{ 'border-2': scrollpos > 1 }"
  >
    <input type="text" data-role="calendarpicker" data-dialog-mode="true" />
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
.rentt {
  background-color: #fff !important;
  height: 32px;
}
</style>
