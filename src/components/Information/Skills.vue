<template>
  <div>
    <h3 class="white-color mrSidHeader">Skills</h3>
    <hr align="right" class="mrSidHR" />
    <div class="row">
      <div
        v-for="skill in skills"
        :key="skill.name"
        class="hoverCard col-xs-12 col-sm-12 col-md-6 col-lg-4"
      >
        <div class="row skillCard">
          <div align="left" class="col-xs-9 col-sm-9 col-md-9 col-lg-9">
            <b>#{{skill.rate}}</b>
            <ul>
              <li v-for="(item,i) in skill.experience" :key="skill.name+i">{{item}}</li>
            </ul>
          </div>
          <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
            <img class="skillImg" :src="skill.image" width="100px" />
          </div>
        </div>
        <b class="skillHolder" data-text="$$$$$$$$">{{skill.name}}</b>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
        <div class="row padding-10">
          <h3 class="white-color mrSidHeader">Frameworks</h3>
          <hr align="right" class="mrSidHR" />
          <div
            v-for="framwork in frameworks"
            :key="framwork"
            class="col-xs-6 col-sm-6 col-md-4 col-lg-3"
          >
            <b class="restHolder" data-text="$$$$$$$$">{{framwork}}</b>
          </div>
        </div>
      </div>
      <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
        <div class="row padding-10">
          <h3 class="white-color mrSidHeader">Platforms</h3>
          <hr align="right" class="mrSidHR" />
          <div
            v-for="platform in developmentPlatforms"
            :key="platform"
            class="col-xs-6 col-sm-6 col-md-4 col-lg-3"
          >
            <b class="restHolder" data-text="$$$$$$$$">{{platform}}</b>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    developmentPlatforms: ["Firebase", "Pusher"],
    frameworks: ["Koa", "Fastify", "Vuetify", "Material UI"],
    skills: [
      {
        name: "Javascript",
        image: require("@/assets/js.png"),
        rate: "Proficient",
        experience: [
          "Experience in ES6, ES5",
          "Strict to pure functions, event driven approach"
        ]
      },
      {
        name: "VueJs",
        image: require("@/assets/vuejs.png"),
        rate: "Proficient",
        experience: [
          "Build highly intutive and responsive applications",
          "Reactive paradigm"
        ]
      },
      {
        name: "NodeJs",
        image: require("@/assets/nodejs.png"),
        rate: "Proficient",
        experience: [
          "Strict to design patterns",
          "Build scalable and fault tollerant microservices"
        ]
      },
      {
        name: "MongoDb",
        image: require("@/assets/mongodb.png"),
        rate: "Intermediate",
        experience: [
          "Experience in Query optimizations",
          "Experience in HA Setup"
        ]
      },
      {
        name: "Java",
        image: require("@/assets/java.png"),
        rate: "Beginner",
        experience: [
          "Good with fundamentals",
          "DAO, SAO patterns",
          "Experience in build tools"
        ]
      },
      {
        name: "ReactJs",
        image: require("@/assets/react.png"),
        rate: "Beginner",
        experience: [
          "Build resposive SPAs",
          "Lazy loading routes for efficient page loading"
        ]
      },
      {
        name: "Docker",
        image: require("@/assets/docker.png"),
        rate: "Beginner",
        experience: [
          "Experience in dockerized deployments",
          "Hands on with docker swarms"
        ]
      },
      {
        name: "Git",
        image: require("@/assets/git.png"),
        rate: "Proficient",
        experience: [
          "Familiar with git rebase, git squash, and other concepts",
          "Good understanding in git tree"
        ]
      },
      {
        name: "Android",
        image: require("@/assets/android.png"),
        rate: "Intermediate",
        experience: [
          "Building applications with MVVM Architecture",
          "Retofit 2, and Dagger 2"
        ]
      },
      {
        name: "Flutter",
        image: require("@/assets/flutter.png"),
        rate: "Intermediate",
        experience: [
          "Native SDK integrations with flutter channels",
          "Efficient state management"
        ]
      },
      {
        name: "Linux",
        image: require("@/assets/linux.png"),
        rate: "Proficient",
        experience: [
          "Handling cronjobs, services, IPTables, and lots more.",
          "Familiar with Centos, Debian, "
        ]
      },
      {
        name: "Nginx",
        image: require("@/assets/nginx.png"),
        rate: "Beginner",
        experience: [
          "Experience in load balancing",
          "Routing multiple FEs and BEs in same domain"
        ]
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
}
.restHolder {
  display: block;
  font-size: 0.5rem;
  letter-spacing: 0.25em;
  text-align: center;
  text-transform: uppercase;
  border: 1px solid rgba(255, 255, 255, 0.2);
  background: #2e2e2e;
  color: white;
  margin-bottom: 1vh;
}
.mrSidHeader {
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
.skillImg {
  width: 60vw;
  max-width: 50px;
  padding: 5px;
}
.skillCard {
  height: 150px;
  overflow: scroll;
}
</style>