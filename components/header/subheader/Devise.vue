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
          <svg
            class="w-10 h-10"
            :fill="[scrollpos <= 1 ? '#fff' : '#6d6d6d']"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.736 6.979C9.208 6.193 9.696 6 10 6c.304 0 .792.193 1.264.979a1 1 0 001.715-1.029C12.279 4.784 11.232 4 10 4s-2.279.784-2.979 1.95c-.285.475-.507 1-.67 1.55H6a1 1 0 000 2h.013a9.358 9.358 0 000 1H6a1 1 0 100 2h.351c.163.55.385 1.075.67 1.55C7.721 15.216 8.768 16 10 16s2.279-.784 2.979-1.95a1 1 0 10-1.715-1.029c-.472.786-.96.979-1.264.979-.304 0-.792-.193-1.264-.979a4.265 4.265 0 01-.264-.521H10a1 1 0 100-2H8.017a7.36 7.36 0 010-1H10a1 1 0 100-2H8.472c.08-.185.167-.36.264-.521z"
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
