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
      id="svg4488"
      class="absolute left-0 ml-1"
      height="36"
      fill="#008489"
      version="1.1"
      width="36"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:svg="http://www.w3.org/2000/svg"
    >
      <defs id="defs4490" />
      <g id="layer1" transform="translate(0,-1016.3622)">
        <path
          id="path4403-1"
          d="m 18,1020.3622 c 0.55821,0 1,0.4418 1,1 0,0.5582 -0.44179,1 -1,1 -0.55821,0 -1,-0.4418 -1,-1 0,-0.5582 0.44179,-1 1,-1 z m -6.10352,1.0001 6.10352,0 6.10156,0 2.64258,11.4434 c -0.34476,-0.208 -0.69045,-0.4473 -1.14453,-0.4473 -0.59175,0 -0.97732,0.3698 -1.27344,0.6211 -0.29612,0.2513 -0.50263,0.3826 -0.62695,0.3828 -0.0631,0 -0.14558,-0.032 -0.25,-0.096 -0.10443,-0.064 -0.23084,-0.1589 -0.37891,-0.2832 -0.29614,-0.2485 -0.68026,-0.6152 -1.26953,-0.6152 -0.58891,0 -0.97496,0.3648 -1.27148,0.6133 -0.29585,0.2479 -0.50331,0.38 -0.62891,0.3808 -0.12726,0 -0.33432,-0.1309 -0.63086,-0.3769 -0.29654,-0.2461 -0.68287,-0.6074 -1.26953,-0.6074 -0.14666,0 -0.28096,0.023 -0.4043,0.061 -0.37002,0.1131 -0.64272,0.3623 -0.86523,0.5468 -0.14834,0.1231 -0.27411,0.2178 -0.37891,0.2813 -0.1048,0.063 -0.18864,0.096 -0.25195,0.096 -0.12663,0 -0.33418,-0.1309 -0.63086,-0.377 -0.29668,-0.2461 -0.68287,-0.6074 -1.26953,-0.6074 -0.58717,0 -0.97125,0.3632 -1.26758,0.6094 -0.29633,0.2462 -0.50412,0.3754 -0.63086,0.375 -0.12405,0 -0.33261,-0.1309 -0.6289,-0.3809 -0.29631,-0.2499 -0.68087,-0.6172 -1.27149,-0.6172 -0.45358,0 -0.79945,0.2383 -1.14453,0.4453 z M 18,1033.378 c 0.10472,0 0.27997,0.1091 0.5,0.2793 l 0,1.6738 -1,0 0,-1.6738 c 0.087,-0.067 0.17951,-0.1421 0.24805,-0.1836 0.1048,-0.063 0.18863,-0.096 0.25195,-0.096 z m -1.30078,2.9843 2.60742,0 c 0.49289,0.3073 0.76046,0.6299 0.87891,1.0332 0.12606,0.4293 0.10707,0.9748 -0.0176,1.6231 -0.22692,1.1804 -0.77084,2.7114 -1.07422,4.3437 l -2.20117,0 c -0.29211,-1.6283 -0.81051,-3.156 -1.02539,-4.3379 -0.11809,-0.6494 -0.13551,-1.1996 -0.0117,-1.6328 0.1158,-0.4053 0.37647,-0.725 0.84375,-1.0293 z m -0.19922,8 2.98438,0 0.0156,0 c 0.28565,0 0.5,0.2144 0.5,0.5 0,0.2857 -0.21435,0.5 -0.5,0.5 l -3,0 c -0.28565,0 -0.5,-0.2143 -0.5,-0.5 0,-0.2856 0.21435,-0.5 0.5,-0.5 z m -1.5,2 6,0 c 0.56265,0 1,0.4374 1,1 l 0,1 -1,0 -6,0 -1,0 0,-1 c 0,-0.5626 0.43735,-1 1,-1 z"
          style="
            font-size: medium;
            font-style: normal;
            font-variant: normal;
            font-weight: normal;
            font-stretch: normal;
            text-indent: 0;
            text-align: start;
            text-decoration: none;
            line-height: normal;
            letter-spacing: normal;
            word-spacing: normal;
            text-transform: none;
            direction: ltr;
            block-progression: tb;
            writing-mode: lr-tb;
            text-anchor: start;
            baseline-shift: baseline;
            color: #008489;
            fill: #008489;
            fill-opacity: 1;
            fill-rule: nonzero;
            stroke: none;
            visibility: visible;
            display: inline;
            overflow: visible;
            enable-background: accumulate;
            font-family: sans-serif;
          "
        />
      </g>
    </svg>
    <div class="pl-5 bbtn-search">
      <button
        id="options-menu"
        type="button"
        class="semibold-14px mt-1 inline-flex justify-center w-full ml-1 px-4 py-1 text-sm font-medium hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
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
