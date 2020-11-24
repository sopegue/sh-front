<template>
  <div>
    <Logo2 :scroll="scroll" :scrollpos="scrollpos" />
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
<style scoped></style>
