<template>
  <div id="app">
    <div class="splash-container" id="vanta">
      <router-view />
    </div>
    <div class="footer">© Sidharth Patnaik</div>
  </div>
</template>

<script>
import * as THREE from "three";
import NET from "vanta/dist/vanta.net.min";
export default {
  name: "App",
  data: () => ({
    isMobile: /Android|iPhone|iPad|iPod/i.test(navigator.userAgent)
  }),
  created() {
    setTimeout(() => {
      NET({
        el: "#vanta",
        mouseControls: true,
        touchControls: true,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,
        THREE: THREE,
        points: this.isMobile ? 3 : 10,
        maxDistance: this.isMobile ? 14 : 20,
        color: 0xbb909f,
        backgroundColor: 0x232028
      });
    }, 200);
  }
};
</script>

<style>
body {
  background-color: #333;
}
</style>
