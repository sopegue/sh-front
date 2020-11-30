<template>
  <div>
    <div class="w-full font-semibold">
      <div class="absolute select-none text-white placehold w-full break-words">
        <span :class="{ 'color-008489': scrollpos > 1 }">Leaving date</span>
      </div>
      <client-only
        ><div class="relative flex date-input">
          <input
            v-model="dates"
            class="input-input none-outline"
            type="date"
            :min="arrival"
          />
        </div>
      </client-only>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    arrival: {
      type: String,
      default: '',
    },
    scroll: Boolean,
    scrollpos: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      currentdate: new Date(),
      date: this.$moment().format('YYYY-MM-DD'),
      disabledDates: [
        function (date) {
          const today = new Date()
          today.setDate(today.getDate() - 1)
          return date < today
        },
      ],
    }
  },
  computed: {
    dates: {
      get() {
        return this.$moment(this.date).format('YYYY-MM-DD')
      },
      set(newvalue) {
        if (new Date(newvalue) < new Date(this.arrival)) {
          this.date = this.arrival
        } else this.date = newvalue
      },
    },
  },
  watch: {
    arrival: {
      immediate: true,
      handler(newVal, oldVal) {
        if (new Date(this.date) < new Date(newVal)) {
          this.date = newVal
        }
      },
    },
    date: {
      deep: true,
      handler(newVal, oldVal) {
        this.dates = newVal
      },
    },
  },
  methods: {
    dateFormatter(date, format) {
      return this.$moment(date).format(format)
    },
    dateFormatterDefault(date) {
      return this.$moment(date).format()
    },
    dateParser(date, format) {
      return this.$moment(date, format).toDate()
    },
  },
}
</script>

<style></style>
<style scoped></style>
