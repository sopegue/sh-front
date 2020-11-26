<template>
  <div class="relative rent full margin-0-auto">
    <div class="absolute w-full rend-d"></div>
    <div
      class="absolute pt-32 content w-full"
      :class="{
        end: quart,
      }"
    >
      <Rentheader :scroll="scroll" :scrollpos="scrollpos" />
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
  computed: {
    quart() {
      return this.scrollpos >= 1
    },
    aftdemi() {
      return this.scrollpos >= 250 && this.scrollpos < 375
    },
    end() {
      return this.scrollpos >= 375
    },
  },
}
</script>
<style scoped>
.content {
  z-index: 20 !important;
  height: 500px;
}
.rend-d {
  z-index: 0;
  height: 500px;
  background: rgb(2, 0, 36);
  background: -moz-linear-gradient(
    90deg,
    rgba(2, 0, 36, 0.8) 0%,
    rgba(0, 132, 137, 0.8) 100%,
    rgba(0, 212, 255, 0.8) 100%
  );
  background: -webkit-linear-gradient(
    90deg,
    rgba(2, 0, 36, 0.8) 0%,
    rgba(0, 132, 137, 0.8) 100%,
    rgba(0, 212, 255, 0.8) 100%
  );
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 0.8) 0%,
    rgba(0, 132, 137, 0.8) 100%,
    rgba(0, 212, 255, 0.8) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#020024",endColorstr="#00d4ff",GradientType=1);
}
.rent {
  height: 500px;

  background-image: url('/assets/images/bgcover/3.jpg');
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: 100%;
}
</style>
