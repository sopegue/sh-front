<template>
  <div
    v-click-outside="hide"
    style="height: 40px !important"
    class="relative text-left ssearch font-semibold"
  >
    <div class="absolute select-none text-white aplacehold w-full break-words">
      <span :class="{ 'color-008489': scrollpos > 1 }">Price</span>
    </div>
    <svg
      class="absolute beds color-008489 left-0 ml-3 mt-2 h-5 w-5"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"
        clip-rule="evenodd"
      ></path>
    </svg>
    <div class="pl-5 bbtn-search">
      <button
        id="options-menu"
        type="button"
        class="semibold-14px bed mt-1 inline-flex justify-center w-full ml-1 px-4 py-1 text-sm font-medium hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
        aria-haspopup="true"
        aria-expanded="true"
        @click="
          {
            showed = !showed
          }
        "
      >
        <span style="width: 100px">400B ~ 400B €</span>
        <!-- Heroicon name: chevron-down -->
        <svg
          class="font-bold -mr-1 ml-2 pt-1 h-5 w-5"
          :class="[show ? 'rotate mt-1' : 'unrotate']"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fill-rule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
    </div>
    <div
      v-show="show"
      class="search-dropdown border z-10 absolute top-5 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
    >
      <div
        class="py-1"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="options-menu"
      >
        <a
          class="block flex select-none px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
          :class="{ 'color-008489': $store.state.currentSearch === 'Sale' }"
          role="menuitem"
          @click="$store.commit('setRorS', 'Sale'), (showed = false)"
        >
          <div
            v-if="$store.state.currentSearch === 'Sale'"
            class="w-1 h-6 rounded-full font-bold bgcolor-008489 mr-2"
          >
            <path
              fill-rule="evenodd"
              d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </div>
          Sale</a
        >
        <a
          class="block flex select-none px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
          :class="{ 'color-008489': $store.state.currentSearch === 'Rent' }"
          role="menuitem"
          @click="$store.commit('setRorS', 'Rent'), (showed = false)"
        >
          <div
            v-if="$store.state.currentSearch === 'Rent'"
            class="w-1 h-6 rounded-full font-bold bgcolor-008489 mr-2"
          >
            <path
              fill-rule="evenodd"
              d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </div>
          Rent</a
        >
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
.bed {
  margin-top: 0.4rem;
}
.beds {
  margin-top: 0.7rem;
}
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
