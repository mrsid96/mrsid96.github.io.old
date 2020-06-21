<template>
  <div class="splash card mrSidInfo">
    <div class="pure-menu pure-menu-horizontal">
      <ul class="pure-menu-list">
        <li class="pure-menu-item active">
          <a href="#" class="pure-menu-link">About</a>
        </li>
        <!-- <li class="pure-menu-item">
          <a href="#" class="pure-menu-link">Skills</a>
        </li>
        <li class="pure-menu-item">
          <a href="#" class="pure-menu-link">Experience</a>
        </li> -->
      </ul>
    </div>
    <div class="mrSidContainer">
      <router-view />
    </div>
    <a
      @click="$router.push({path: '/'})"
      target="_blank"
      class="glitchyBtn"
      data-text="#@#@#@#@"
    >Go Home</a>
  </div>
</template>

<script>
export default {
  name: "Informations",
  data: () => ({
    isMobile: /Android|iPhone|iPad|iPod/i.test(navigator.userAgent)
  }),
  created() {}
};
</script>

<style scoped>
.mrSidInfo {
  background-color: rgba(51, 51, 51, 0.8);
  color: white;
  width: 80vw;
  z-index:1;
}
.active {
  background: #181818;
}
.pure-menu {
  margin-bottom: 2vh;
}
.mrSidContainer {
  padding: 2vw;
}
@media (min-width: 48em) {
  .pure-menu {
    text-align: right;
  }
}
.glitchyBtn{
  width: 50vw;
}
</style>