<template>
  <div>
    <h3 class="white-color">Skills</h3>
    <hr align="right" class="mrSidHR" />
    <div class="row">
      <div v-for="skill in skills" :key="skill.name" class="col-xs-6 col-sm-6 col-md-4 col-lg-3">
        <img :src="skill.image" width="100px" />
        <b class="skillHolder" data-text="$$$$$$$$">{{skill.name}}</b>
      </div>
    </div>
    <h3 class="white-color">Frameworks</h3>
    <hr align="right" class="mrSidHR" />
    <div class="row">
      <div
        v-for="framwork in frameworks"
        :key="framwork.name"
        class="col-xs-6 col-sm-6 col-md-4 col-lg-3"
      >
        <img :src="framwork.image" width="100px" />
        <b class="skillHolder" data-text="$$$$$$$$">{{framwork.name}}</b>
      </div>
    </div>
    <h3 class="white-color">Development Platforms</h3>
    <hr align="right" class="mrSidHR" />
    <div class="row">
      <div
        v-for="platform in developmentPlatforms"
        :key="platform.name"
        class="col-xs-6 col-sm-6 col-md-4 col-lg-3"
      >
        <img :src="platform.image" width="100px" />
        <b class="skillHolder" data-text="$$$$$$$$">{{platform.name}}</b>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    developmentPlatforms: [
      {
        name: "Firebase",
        image: require("@/assets/firebase.png")
      },
      {
        name: "Pusher",
        image: require("@/assets/pusher.png")
      }
    ],
    frameworks: [
      {
        name: "Koa",
        image: require("@/assets/koa.png")
      },{
        name: "Fastify",
        image: require("@/assets/fastify.png")
      },{
        name: "Vuetify",
        image: require("@/assets/vuetify.png")
      },{
        name: "Material UI",
        image: require("@/assets/materialui.png")
      }
    ],
    skills: [
      {
        name: "Javascript",
        image: require("@/assets/js.png")
      },
      {
        name: "VueJs",
        image: require("@/assets/vuejs.png")
      },
      {
        name: "NodeJs",
        image: require("@/assets/nodejs.png")
      },
      {
        name: "MongoDb",
        image: require("@/assets/mongodb.png")
      },
      {
        name: "Java",
        image: require("@/assets/java.png")
      },
      {
        name: "ReactJs",
        image: require("@/assets/react.png")
      },
      {
        name: "Docker",
        image: require("@/assets/docker.png")
      },
      {
        name: "Git",
        image: require("@/assets/git.png")
      },
      {
        name: "Android",
        image: require("@/assets/android.png")
      },
      {
        name: "Flutter",
        image: require("@/assets/flutter.png")
      },
      {
        name: "Linux",
        image: require("@/assets/linux.png")
      },
      {
        name: "Nginx",
        image: require("@/assets/nginx.png")
      }
    ]
  })
};
</script>

<style scoped>
.skillHolder {
  display: block;
  font-size: 0.75em;
  letter-spacing: 0.35em;
  text-align: center;
  text-transform: uppercase;
  border: 1px solid rgba(255, 255, 255, 0.2);
  background: white;
  color: black;
  margin-bottom: 2vh;
}
.white-color {
  text-align: left;
  font-family: "Press Start 2P";
}
.mrSidHR {
  margin-bottom: 2vh;
  width: 60vw;
}
.fwdesc {
  text-align: left;
}
</style>