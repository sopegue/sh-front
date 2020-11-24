<template>
  <div
    class="relative search text-gray-600"
    :class="{ 'border rounded-full': scrollpos > 1 }"
  >
    <client-only>
      <div v-click-outside="hide" class="absolute h-10 left-0 top-0 text-left">
        <div>
          <button
            id="options-menu"
            type="button"
            class="inline-flex font-bold color-008489 justify-center w-full rounded-full borde-0 border-white ml-1 px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
            aria-haspopup="true"
            aria-expanded="true"
            @click="
              {
                showed = !showed
              }
            "
          >
            {{ $store.state.currentSearch }}
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
          class="search-dropdown z-10 absolute top-5 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
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
                class="w-2 h-6 rounded-full font-bold bgcolor-008489 mr-2"
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
                class="w-2 h-6 rounded-full font-bold bgcolor-008489 mr-2"
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
      <input
        id="input-id"
        type="search"
        name="serch"
        :placeholder="placeholder"
        class="bg-white text-base h-10 search-input pr-10 rounded-full text-sm focus:outline-none text-gray-800 font-semibold"
        autocomplete="off"
      />
      <button
        type="submit"
        class="w-8 h-8 rounded-full absolute btn-search color-008489 right-0 top-0 mt-1 mr-2"
      >
        <svg
          id="Capa_1"
          class="h-4 w-4 fill-current margin-0-auto icon-search"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          version="1.1"
          x="0px"
          y="0px"
          viewBox="0 0 56.966 56.966"
          style="enable-background: new 0 0 56.966 56.966"
          xml:space="preserve"
          width="512px"
          height="512px"
        >
          <path
            d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z"
          />
        </svg>
      </button>
    </client-only>
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
        ? 'Paris Gros Caillou, private yard...'
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
