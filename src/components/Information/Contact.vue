<template>
  <div class="row">
    <div class="col-xs-12 col-sm-12 col-md-5 col-lg-4">
      <img class="contactCard" src="@/assets/contact.png" />
    </div>
    <div class="col-xs-12 col-sm-12 col-md-7 col-lg-8 align-left">
      <h1 class="white-color">Sidharth Patnaik</h1>
      <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
          <i class="fa fa-envelope padding-10"></i>
          <a href="mailto:patnaik.sid96@gmail.com" target="_blank">
            <u>patnaik.sid96@gmail.com</u>
          </a>
          <br />
          <i class="fa fa-mobile padding-10"></i>
          +91 8249335342
          <br />
          <i class="fa fa-map-marker-alt padding-10"></i>
          Bangalore Urban, 560078
          <br />
        </div>
        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
          <iframe
            width="100%"
            src="https://maps.google.com/maps?q=Esteem%20Enclave%2C%20bannerghetta%20road&t=&z=17&ie=UTF8&iwloc=&output=embed"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
          ></iframe>
        </div>
      </div>
      <h2 class="white-color">Useful Links</h2>
      <div class="row">
        <div v-for="link in links" :key="link.text" class="col-xs-6 col-sm-6 col-md-4 col-lg-4">
          <i :class="['padding-10', link.icon]"></i>
          <a :href="link.link" target="_blank">
            <u>{{link.text}}</u>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    mobile: "8249335342",
    email: "patnaik.sid96@gmail.com",
    address: "Bangalore Urban, 560078",
    iframeUrl: "",
    links: [
      {
        icon: "fa fa-medium",
        text: "Medium",
        link: "https://medium.com/@mrsid96"
      },
      {
        icon: "fa fa-github",
        text: "GitHub",
        link: "https://github.com/mrsid96"
      },
      {
        icon: "fab fa-hackerrank",
        text: "HackerRank",
        link: "https://www.hackerrank.com/mrSid96"
      },
      {
        icon: "fa fa-linkedin",
        text: "LinkedIn",
        link: "https://www.linkedin.com/in/sidharthpatnaik96/"
      },
      {
        icon: "fa fa-twitter",
        text: "Twitter",
        link: "https://twitter.com/mrsid96"
      }
    ]
  })
};
</script>

<style scoped>
.contactCard {
  width: 100%;
}
a {
  display: inline;
  color: white;
  text-decoration: none;
}
</style>