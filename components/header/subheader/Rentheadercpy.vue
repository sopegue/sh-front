<template>
  <div class="relative margin-0-auto z-10 w-3/4">
    <span
      class="absolute font-semibold select-none text-white placehold"
      :class="{ 'text-gray-800': scrollpos > 1 }"
      >180 result(s) found</span
    >
    <div class="space-x-2">
      <div
        class="flex items-center space-x-1 divide-x-2 divide-gray-500 rentt rounded-md"
        :class="{ 'border border-008489': scrollpos > 1 }"
      >
        <Locationheader class="location-header" :scrollpos="scrollpos" />
        <div
          class="rightpart flex items-center space-x-1 divide-x-2 divide-gray-500"
        >
          <Priceheader :scrollpos="scrollpos" />
          <Personheader :scrollpos="scrollpos" />
          <Datepickerarrivalcpy
            class="width-185"
            :scroll="scroll"
            :scrollpos="scrollpos"
            @arrivaldate="setarrivaldate"
          />
          <Datepickerleavingcpy
            class="width-185"
            :scroll="scroll"
            :scrollpos="scrollpos"
            :arrival="arrival"
          />
        </div>
      </div>
      <div
        class="flex hover:shadow border look shadow-md absolute items-center cursor-pointer top-0 right-0 bull rounded-full bg-white"
      >
        <svg
          class="w-6 h-6 margin-0-auto"
          fill="#008489"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </div>
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
      arrival: this.$moment().format('YYYY-MM-DD'),
      date: new Date(),
    }
  },
  methods: {
    setarrivaldate(value) {
      this.arrival = value
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
.bull {
  right: -3rem;
  height: 40px !important;
  width: 40px !important;
}
.location-header {
  width: 100%;
}
.look {
  border-color: #008489;
}
.look:hover {
  border: none;
  background-color: #008489;
}
.look:hover svg {
  fill: #ffffff;
}
</style>
