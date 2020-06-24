<template>
  <div class="splash onTop">
    <img class="avatar" src="@/assets/avatar.jpeg" />
    <div class="glitch">
      <p class="text">mrSid96</p>
      <p class="text">mrSid96</p>
      <p class="text">mrSid96</p>
    </div>.
    <h1 class="splash-head" id="simpleUsage"></h1>
    <p class="splash-subhead">"Developing efficient solutions for modern experiences"</p>
    <a
      @click="$router.push({path: '/more'})"
      target="_blank"
      class="glitchyBtn"
      data-text="#@#@#@#@"
    >View More</a>
  </div>
</template>

<script>
import TypeIt from "typeit";
export default {
  name: "FocusContainer",
  data: () => ({
    isMobile: /Android|iPhone|iPad|iPod/i.test(navigator.userAgent)
  }),
  created() {
    setTimeout(() => {
      new TypeIt("#simpleUsage", {
        speed: 100
      })
        .type("JavaScript Fanboi", { delay: 400 })
        .delete(6, { delay: 100 })
        .type("<strong>Fanboi</strong>", { delay: 600 })
        .delete(undefined, { delay: 600 })
        .type("Linux Enthusiast", { delay: 600 })
        .delete(undefined, { delay: 600 })
        .type("Console Gamer", { delay: 200 })
        .move(-6, { speed: 25, delay: 100 })
        .delete(7, { delay: 300 })
        .type("Xbox", { delay: 200 })
        .move("END", { speed: 25, delay: 600 })
        .delete(undefined, { delay: 600 })
        .type("fullStack developer", { delay: 100 })
        .move(-14, { speed: 25, delay: 100 })
        .delete(1)
        .type(" S")
        .move(-5, { speed: 25, delay: 100 })
        .delete(1)
        .type("F")
        .move("END", { speed: 25, delay: 200 })
        .go();
    }, 200);
  }
};
</script>

<style scoped>
.onTop{
  z-index: 1;
}
@media (min-width: 48em) {
  .splash {
    width: 50%;
  }
}
</style>