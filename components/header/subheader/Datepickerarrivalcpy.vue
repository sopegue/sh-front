<template>
  <div>
    <div class="w-full font-semibold">
      <div class="absolute select-none text-white placehold w-full break-words">
        <span :class="{ 'color-008489': scrollpos > 1 }">Arrival date</span>
      </div>
      <client-only
        ><div class="relative flex date-input">
          <input
            v-model="dates"
            class="input-input none-outline"
            type="date"
            :min="this.$moment(new Date()).format('YYYY-MM-DD')"
          />
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
      date: this.$moment().format('YYYY-MM-DD'),
    }
  },
  computed: {
    dates: {
      get() {
        return this.$moment(this.date).format('YYYY-MM-DD')
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
