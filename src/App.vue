<template>
  <div id="app">
    <Header/>
    <FocusContainer/>
    <!-- <div class="glitch">
      <h1>mrSid96</h1>
      <h1>mrSid96</h1>
      <h1>mrSid96</h1>
    </div> -->
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import FocusContainer from "@/components/FocusContainer.vue";
export default {
  name: "App",
  components: {
    Header,
    FocusContainer
  }
};
</script>

<style>
body {
  background-color: #333;
}
</style>
