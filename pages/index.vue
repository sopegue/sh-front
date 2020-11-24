<template>
  <div classe="welcome">
    <Bigheader :scroll="scroll" :scrollpos="scrollpos" :opacity="opacity" />
    <Searchpage :scroll="scroll" :scrollpos="scrollpos" />
    <Header class="home-header" />
    <Header class="home-header" />
    <Header class="home-header" />
    <Header class="home-header" />
    <Header class="home-header" />
    <Header class="home-header" />
    <Header class="home-header" />
    <Header class="home-header" />
    <Header class="home-header" />
    <Header class="home-header" />
    <Header class="home-header" />
    <Header class="home-header" />
    <Header class="home-header" />
    <Header class="home-header" />
    <Header class="home-header" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      scroll: false,
      scrollpos: 0,
      opacity: -1,
    }
  },
  computed: {
    isScrolled() {
      if (this.scroll) return true
      return false
    },
  },
  beforeMount() {
    window.addEventListener('scroll', this.handleScroll)
    window.addEventListener('beforeunload', this.handler)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      if (window.scrollY > 0) {
        this.scroll = true
      } else {
        this.scroll = false
      }
      this.scrollpos =
        Math.abs(window.scrollY) ||
        Math.abs(window.scrollTop) ||
        Math.abs(document.getElementsByTagName('html')[0].scrollTop)
    },
  },
}
</script>

<style scoped>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
</style>
