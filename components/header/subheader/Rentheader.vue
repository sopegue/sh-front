<template>
  <div
    class="flex items-center space-x-1 divide-x-2 divide-gray-500 margin-0-auto z-10 w-3/4 rentt rounded-md"
    :class="{ 'border border-008489': scrollpos > 1 }"
  >
    <Locationheader class="location-header" :scrollpos="scrollpos" />
    <div
      class="rightpart flex items-center space-x-1 divide-x-2 divide-gray-500"
    >
      <Priceheader :scrollpos="scrollpos" />
      <Personheader :scrollpos="scrollpos" />
      <Datepickerarrival
        class="width-185"
        :scroll="scroll"
        :scrollpos="scrollpos"
        @arrivaldate="setarrivaldate"
      />
      <Datepickerleaving
        class="width-185"
        :scroll="scroll"
        :scrollpos="scrollpos"
        :arrival="arrival"
      />
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
  data() {
    return {
      arrival: new Date(),
      date: new Date(),
    }
  },
  methods: {
    setarrivaldate(value) {
      this.arrival = new Date(value)
    },
  },
}
</script>
<style scoped>
.rightpart {
  justify-self: center !important;
}
.rentt {
  background-color: #fff !important;
  height: 40px;
}
.location-header {
  width: 100%;
}
</style>
