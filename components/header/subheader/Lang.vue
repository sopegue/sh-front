<template>
  <div
    class="w-16 h-16 flex my-avatar rounded-full items-center content-center"
    :class="{ scrollvatar: scrollpos > 1 }"
  >
    <div class="margin-0-auto w-8 h-8 flex items-center relative mb-4">
      <div class="margin-0-auto w-8 h-8 rounded-full">
        <div
          class="ml-1 group w-full h-full rounded-full overflow-hidden text-center bg-purple table cursor-pointer"
        >
          <span
            class="hidden group-hover:table-cell text-white font-bold align-middle"
            >KR</span
          >
          <svg
            id="Layer_1"
            class="border-0"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 512 512"
          >
            <circle style="fill: #fff" cx="256" cy="256" r="250" />
            <path
              style="fill: #d80027"
              d="M512,256c0-110.071-69.472-203.906-166.957-240.077v480.155C442.528,459.906,512,366.071,512,256z"
            />
            <path
              style="fill: #0052b4"
              d="M0,256c0,110.071,69.473,203.906,166.957,240.077V15.923C69.473,52.094,0,145.929,0,256z"
            />
          </svg>
        </div>
      </div>
    </div>
    <svg
      class="w-6 h-6"
      :fill="[scrollpos <= 1 ? '#fff' : '#6d6d6d']"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
        clip-rule="evenodd"
      ></path>
    </svg>
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
}
</script>
<style scoped>
.my-avatar:hover {
  animation: ease-in;
  background-color: rgba(255, 255, 255, 0.116);
}
.scrollvatar:hover {
  animation: ease-in;
  background-color: #6d6d6d10;
}
@keyframes appear {
}
</style>
