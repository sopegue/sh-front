<template>
  <div
    class="w-16 h-16 flex my-avatar rounded-full items-center content-center"
    :class="{ scrollvatar: scrollpos > 1 }"
  >
    <div class="margin-0-auto w-8 h-8 flex items-center relative mb-4">
      <div class="margin-0-auto rounded-full">
        <div
          class="group w-full h-full rounded-full overflow-hidden text-center bg-purple table cursor-pointer"
        >
          <span
            class="hidden group-hover:table-cell text-white font-bold align-middle"
            >KR</span
          >
          <svg
            class="w-10 h-10"
            :fill="[scrollpos <= 1 ? '#fff' : '#6d6d6d']"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
              clip-rule="evenodd"
            ></path>
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
