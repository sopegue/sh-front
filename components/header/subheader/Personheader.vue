<template>
  <div
    v-click-outside="hide"
    style="height: 40px !important"
    class="relative text-left ssearch font-semibold"
  >
    <div class="absolute select-none text-white aplacehold w-full break-words">
      <span :class="{ 'color-008489': scrollpos > 1 }">Bedroom</span>
    </div>
    <svg
      id="Layer_1"
      class="absolute color-008489 beds left-0 ml-2 mt-2 h-5 w-5"
      height="240px"
      style="enable-background: new 0 0 240 240"
      version="1.1"
      viewBox="0 0 240 240"
      width="240px"
      xml:space="preserve"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
    >
      <path
        fill="#008489"
        d="M80,119.834c0,13.241-10.729,23.979-23.963,23.979c-13.232,0-23.962-10.737-23.962-23.979  c0-13.239,10.729-23.975,23.962-23.975C69.271,95.859,80,106.595,80,119.834z M80,143.812c42.6,0,85.201,0,127.801,0  C162.759,100.185,125.654,102.203,80,143.812L80,143.812z M224.025,112.094v47.953H15.975V80H0v127.875h15.975v-16.109h208.05V208  H240v-95.906H224.025z"
      />
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
        <span style="width: 77px">10 person(s)</span>
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
  margin-top: 0.6rem;
  color: #008489 !important;
}
.ssearch {
  z-index: 0;
  background: transparent !important;
}
.bbtn-search {
  width: fit-content !important;
}
.search-dropdown {
  width: 256px !important;
  margin-top: 0.4rem;
  margin-left: -3rem;
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
