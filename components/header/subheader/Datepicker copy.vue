<template>
  <VueTailWindPicker @change="(v) => (value = v)">
    <input type="text" v-model="value" />
  </VueTailWindPicker>
</template>
<script>
export default {
  components: { VueTailWindPicker: () => import('vue-tailwind-picker') },
  props: {
    scroll: Boolean,
    scrollpos: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      value: '',
    }
  },
}
</script>
