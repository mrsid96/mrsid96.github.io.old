<template>
  <div class="row">
    <div class="col-xs-12 col-sm-12 col-md-5 col-lg-4">
      <img src="@/assets/about.jpeg" />
    </div>
    <div class="col-xs-12 col-sm-12 col-md-7 col-lg-8 align-left">
      <h2 class="white-color">
        Hello,
        <br />I'm Sidharth Patnaik
      </h2>
      <p class="lead iq-tw-4">
        This dude {{isMobile ? "on the top": "to the left"}} is not just another developer!
        <br />Currently, he is working in a financial domain, building
        <b>Onboarding products and Solutions.</b>
      </p>
      <p>
        You Can drop him an email at
        <a href="mailto:patnaik.sidh96@gmail.com" target="_blank">
          <u>patnaik.sid96@gmail.com</u>
        </a>
      </p>
      <a class="button" target="_blank" href="./resume.pdf">
        Download his
        <u>Resume</u>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    isMobile: /Android|iPhone|iPad|iPod/i.test(navigator.userAgent)
  })
};
</script>

<style scoped>
a {
  display: initial;
}
</style>