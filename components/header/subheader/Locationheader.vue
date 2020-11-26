<template>
  <div
    v-click-outside="hide"
    style="height: 40px !important"
    class="relative text-left ssearch font-semibold"
  >
    <svg
      class="absolute color-008489 left-0 ml-1 mt-2 h-6 w-6"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
        clip-rule="evenodd"
      ></path>
    </svg>
    <div class="pl-8">
      <input
        type="search"
        style="height: 40px"
        class="bg-transparent w-full none-outline border-0 px-1"
        placeholder="Location"
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
      showed: false,
    }
  },
  computed: {
    placeholder() {
      return this.$store.state.currentSearch === 'Sale'
        ? 'Paris gros caillou, private yard...'
        : 'Santorini New Harbor...'
    },
    show() {
      return this.showed === true
    },
    items() {
      return this.$store.state.items
    },
  },
  methods: {
    hide() {
      this.showed = false
    },
  },
}
</script>
<style scoped>
.ssearch {
  z-index: 0;
  background: transparent !important;
}
.bbtn-search {
  width: fit-content !important;
}
.search-dropdown {
  width: 501px !important;
  margin-top: 0.4rem;
}
@media screen and (max-width: 1280px) {
  .search-dropdown {
    width: 358px !important;
  }
}
@media screen and (max-width: 1024px) {
  .search-dropdown {
    width: 166px !important;
  }
}
#input-id::-webkit-search-cancel-button {
  position: relative;
  right: 0.5%;
}
#input-id::placeholder {
  font-size: 14px;
  font-weight: normal;
}
.search,
.search-input {
  width: 100% !important;
}
#input-id {
  z-index: 10;
}
.search-input {
  padding-left: 6rem;
}
.search:focus-within {
  --tw-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
    var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow) !important;
  transition: 200ms ease all;
}
.btn-search:hover {
  background-color: #008489;
}
.btn-search:active,
.btn-search:focus {
  animation: 1s appear;
  outline: none !important;
  background-color: #006669;
}
.btn-search:active .icon-search,
.btn-search:focus .icon-search,
.btn-search:hover .icon-search {
  color: #fff;
}
.rotate {
  -webkit-transform: rotate(180deg);
  -moz-transform: rotate(180deg);
  -ms-transform: rotate(180deg);
  -o-transform: rotate(180deg);
  transform: rotate(180deg);
  transition: 300ms ease all;
}
.unrotate {
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -ms-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  transition: 300ms ease all;
}
@keyframes appear {
  0% {
    opacity: 0;
  }
}
</style>
