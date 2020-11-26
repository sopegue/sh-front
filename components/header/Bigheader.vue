<template>
  <div class="home w-full">
    <div
      class="bgcolor z-30"
      :class="{
        ends: quart,
        shadow: scrollpos > 1,
      }"
    ></div>
    <div class="d-home sticky top-0">
      <div class="real-home container">
        <Header
          :scroll="scroll"
          :scrollpos="scrollpos"
          class="home-header"
          :class="{
            'real-home-scrolled': scrollpos > 1,
          }"
        />
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
.ends {
  background: rgb(255, 255, 255, 1) !important;
}
.real-home {
  margin: 0 auto;
  margin-top: 1.5rem !important;
}
.home-header {
  animation: 0.2s appearup;
}
.real-home-scrolled {
  animation: 0.2s appear;
  animation: 0.2s appeardown;
  position: relative;
  top: -1rem;
}

.d-home {
  margin: 0 auto;
  z-index: 30;
  width: 100%;
  position: fixed;
}
.bgcolor {
  width: 100%;
  height: 88px;
  position: fixed;
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
.welcome {
  width: 100%;
  background-color: white !important;
}
.home {
  margin-top: -0.5rem;
  height: 88px;
  background-image: url('/assets/images/bgcover/3.jpg');
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: 100%;
}
.links {
  padding-top: 15px;
}
@keyframes appear {
  0% {
    opacity: 0;
  }
}
@keyframes appearup {
  0% {
    transform: translateY(-10px);
  }
}
@keyframes appeardown {
  0% {
    transform: translateY(10px);
  }
}
</style>
