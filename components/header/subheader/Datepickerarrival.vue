<template>
  <div>
    <div class="w-full font-semibold">
      <div class="absolute select-none text-white placehold w-full break-words">
        <span :class="{ 'color-008489': scrollpos > 1 }">Arrival date</span>
      </div>
      <client-only
        ><div class="relative flex">
          <t-datepicker
            v-model="dates"
            :clearable="false"
            :class="'date-input'"
            placeholder="Select a date"
            :months-per-view="1"
            :date-formatter="dateFormatter"
            :date-parser="dateParser"
            date-format="YYYY-MM-DD"
            user-format="LL"
            :disabled-dates="disabledDates"
            :highlight-dates="disabledDates"
          />
          <svg
            class="color-008489 w-6 h-6 absolute right-0 mt-2 mr-2"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </div>
      </client-only>
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
      currentdate: new Date(),
      date: new Date(),
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
        return this.date
      },
      set(newvalue) {
        this.$emit('arrivaldate', newvalue)
        this.date = newvalue
      },
    },
  },
  methods: {
    dateFormatter(date, format) {
      return this.$moment(date).format(format)
    },
    dateParser(date, format) {
      return this.$moment(date, format).toDate()
    },
  },
}
</script>

<style></style>
<style scoped></style>
