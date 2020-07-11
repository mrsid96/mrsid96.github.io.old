<template>
  <div>
    <div v-if="showProjectDetails" class="row">
      <div class="col-xs-12 col-sm-12 col-md-10 col-lg-8 align-left">
        <div @click="goBack()" class="pointer align-left">
          <i class="fa fa-arrow-left padding-10"></i>
          Back
        </div>
        <div class="padding-10">
          <h1 class="white-color">{{projects[currentProjectIdx].projectName}}</h1>
          <p>{{projects[currentProjectIdx].summary}}</p>
          <p>
            <b>Technologies:</b>
            <a
              class="skillHref"
              v-for="tech in projects[currentProjectIdx].technologies"
              :key="tech"
            >#{{tech}}</a>
          </p>
          <p v-if="projects[currentProjectIdx].demo">
            <b>Demo/ Video:</b>
            <a
              class="skillHref"
              :href="projects[currentProjectIdx].demo.link"
            >{{projects[currentProjectIdx].demo.text}}</a>
          </p>
          <ul>
            <li v-for="det in projects[currentProjectIdx].details" :key="det">{{det}}</li>
          </ul>
        </div>
      </div>
    </div>
    <div v-if="!showProjectDetails" class="row">
      <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 align-left" v-if="filterItem">
        <h2 class="white-color">
          Filter: {{filterItem}}
          <i @click="clearFilter()" class="fa fa-times filterClose"></i>
        </h2>
      </div>
      <div
        v-for="(item,idx) in displayProjects"
        :key="item.id"
        class="col-xs-12 col-sm-12 col-md-6 col-lg-6"
      >
        <div class="card align-left">
          <div class="card-title">
            <span class="project-title">{{item.projectName}}</span>
          </div>
          <div class="card-body">
            <p>{{item.summary}}</p>
            <p>
              <b>Technologies:</b>
              <a
                class="skillHref"
                @click="setFilter(tech)"
                v-for="tech in item.technologies"
                :key="tech"
              >#{{tech}}</a>
            </p>
            <div class="pointer align-right">
              <a class="viewMore" @click="viewDetails(idx)">
                <b>View more details</b>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    setFilter(skill) {
      this.filterItem = skill;
    },
    clearFilter() {
      this.filterItem = "";
    },
    viewDetails(idx) {
      this.showProjectDetails = true;
      this.currentProjectIdx = idx;
    },
    goBack() {
      this.showProjectDetails = false;
      this.currentProjectIdx = 0;
    }
  },
  computed: {
    displayProjects: function() {
      return this.projects.filter(
        item =>
          item.technologies.includes(this.filterItem) || this.filterItem == ""
      );
    }
  },
  data: () => ({
    showProjectDetails: false,
    currentProjectIdx: 0,
    filterItem: "",
    projects: [
      {
        id: "#1",
        projectName: "Video KYC Solution",
        technologies: ["NodeJs", "VueJs", "MongoDb", "RabbitMQ", "Socket.io"],
        summary:
          "Designed and developed a scalable video conferencing solution for KYC of end consumers. Providing this solution for leading banks of India. Features include scheduling, round-robin allocation, direct assignments, priority allocations, and more.",
        details: [
          "Designed and developed a video Conferencing solution for real-time KYC.",
          "Features include client to client communication, taking screenshots while conferencing, scheduling, direct assignments, missed call alerts, agent call audits, capturing essential data as per RBI norms",
          "Developed an admin portal where roles can be created and assigned, this helped in achieving a perfect user management system.",
          "Features like flows, scheduled call options, instruction sets, feedback forms, end-user call priorities can be configured in the portal itself.",
          "Mapping a list of instructions/Questions which were configured in the portal, along with runtime generation of HTML Forms associated with each instruction.",
          "Scalable and Highly available system"
        ]
      },
      {
        id: "#2",
        projectName: "Current Account Solution",
        technologies: ["NodeJs", "Flutter", "MongoDb"],
        summary:
          "Developed an end to end solution for one the leading bank in India, which includes the mobile application as well as the microservices. Integrating third party services provided by the bank, and pushing data to core banking systems.",
        details: [
          "Developed a workflow solution for onboarding a current account customer",
          "Developed a Flutter mobile application, using MVVM architecture, building UI from JSON, dynamic components, interceptors for data encryption in transit",
          "Integrated RDMorpho SDK with flutter using channels, for biometric finger verification from the bank's Aadhaar microservice",
          "Designed and Developed microservices for internal communications with the application.",
          "Developed an integration wrapper, which accepts modules, i.e bank integrations seamlessly"
        ]
      },
      {
        id: "#3",
        projectName: "Modular Application Toolkit",
        technologies: ["NodeJs", "VueJs", "Flutter"],
        summary:
          "This is an application development toolkit, which will help in catalyzing the speed of application development. There are built-in modules, which have a plug and play capabilities. Helped to build frontend applications as well as backend microservices.",
        details: [
          "Developed an npm like application, where prebuild components are hosted in the cloud",
          "Various modules which can be reused extensively were developed as a single module, that accepts multiple parameters and can perform proactively",
          "For backend, we had developed ready to be imported proprietary middlewares and code blocks which helped in creating the microservice up and running in no time",
          "For the frontend, we had developed reactive components, which when passed certain properties generate desirable output in no time",
          "A Full POC which included a standard KYC and few forms took us 15 minutes to develop when used with this toolkit."
        ]
      },
      {
        id: "#4",
        projectName: "Current Account Mobile Application",
        technologies: ["Android", "Java"],
        summary:
          "Took responsibility for developing a complete android application for India's one of the leading banks. The application had to handle caching, encryption in transit, and render almost all 7 types of entities in a current account journey with a small footprint.",
        details: [
          "Transformed an entire offline form to Smart digital form",
          "Encapsulated all the entities for a current account journey with their workflows",
          "Have developed features are ID card classification, Image compressions and watermarking with geo coordinates",
          "Encrypted data in transit as well as caching of frequent requests were done using interceptors in RetroFit2",
          "Build the entire application on MVVM architecture and live data."
        ]
      },
      {
        id: "#5",
        projectName: "Natasha - Smart home assistant",
        technologies: ["Python", "HTML", "JS", "Android", "Java"],
        demo: {
          link: "https://www.youtube.com/watch?v=nfbc5-p6r7A",
          text: "Natasha - Voice controlled assistant using raspberry pi "
        },
        summary:
          "Enginereed a 3D printed model housing a raspberry pi, the brain of the enitre system. This prototype is similar to that of an echo dot or a google home. It can almost do all those thigns which a basic smart home should be capable of, i.e reacting on voices.",
        details: [
          "Designed and 3D printed model using SketchUp",
          "Developed a small intent parser, for understanding the input text",
          "Used SPINX for hotword detections, and Google's STT for recognizing sentences",
          "Integrated dlib for face recognition, such that it can identify who is currently speaking",
          "Developed a dummy home, having four devices, and used this assistant to toggle the controls"
        ]
      },
      {
        id: "#6",
        projectName: "Bus Schedule App",
        technologies: ["Android", "Java"],
        demo: {
          link:
            "https://play.google.com/store/apps/details?id=com.thecodermag.nistbusschedule",
          text: "Nist Bus Schedule - Google Play"
        },
        summary:
          "Developed an android application that scrapped the college's website for the bus schedule of the day. Included features like route matching, notifying the user about the bus number. Also had integrated vehicle tracking system API, thereby leveraging real-time locations of bus.",
        details: [
          "Used jsoup for scrapping the webpage",
          "The schedules, when pulled once, are then maintained offline in local SQLite DB, to prevent repeated network calls",
          "Integrated Google maps for detecting the exact locations using vehicle tracking APIs",
          "Had a smart switch feature, which when scaps Intranet website, when the Internet's website is not accessible."
        ]
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
.card-title {
  background: #181818;
  padding: 5px 10px;
  font-size: 1.2em;
}
.card-body {
  padding: 10px;
}
.card {
  margin-bottom: 10px;
}
.pointer {
  cursor: pointer;
}
.skillHref {
  cursor: pointer;
  padding: 0px 3px;
  text-decoration: underline;
}
.filterClose {
  font-size: 0.7em;
  float: right;
}
.filterClose:hover {
  transform: scale(1.3) rotate(360deg);
  transition: 0.8s;
  cursor: pointer;
}
.viewMore {
  display: inline;
  color: black;
  text-decoration: none;
  background: white;
  padding: 5px;
  border-radius: 10px 0px 0px 0px;
}
</style>