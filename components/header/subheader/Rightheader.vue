<template>
  <div class="flex items-center content-end right space-x-24">
    <div class="w-full">
      <Search :scroll="scroll" :scrollpos="scrollpos" />
    </div>
    <div class="flex space-x-20 b">
      <div class="flex space-x-10 c">
        <Devise :scroll="scroll" :scrollpos="scrollpos" />
        <Lang :scroll="scroll" :scrollpos="scrollpos" />
      </div>
      <User :scroll="scroll" :scrollpos="scrollpos" />
    </div>
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
.right {
  width: 75%;
}
</style>
