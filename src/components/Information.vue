<template>
  <div class="splash card mrSidInfo">
    <div class="topnav" id="myTopnav">
      <a v-if="isMobile">{{getSelectedMenu()}}</a>
      <a
        v-for="(child, i) in menuItems"
        :key="i"
        :class="$route.path.includes(child.path) ? 'active' : ''"
        @click="$router.push({path: child.path})"
      >{{child.displayText}}</a>
      <a href="javascript:void(0);" class="icon" @click="toogleNav()">
        <i class="fa fa-bars"></i>
      </a>
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
    isMobile: /Android|iPhone|iPad|iPod/i.test(navigator.userAgent),
    menuItems: [
      {
        displayText: "Contact",
        path: "/more/contact"
      },
      {
        displayText: "Projects",
        path: "/more/projects"
      },
      {
        displayText: "Experience",
        path: "/more/experience"
      },
      {
        displayText: "Skills",
        path: "/more/skills"
      },
      {
        displayText: "About",
        path: "/more/about"
      }
    ]
  }),
  methods: {
    toogleNav() {
      var x = document.getElementById("myTopnav");
      if (x.className === "topnav") {
        x.className += " responsive";
      } else {
        x.className = "topnav";
      }
    },
    getSelectedMenu() {
      let path = this.$route.path;
      let selectedMenu = this.menuItems.filter(item =>
        path.includes(item.path)
      );
      if(selectedMenu[0]){
        return selectedMenu[0]["displayText"]
      }
    }
  },
  created() {}
};
</script>

<style scoped>
.mrSidInfo {
  background-color: rgba(51, 51, 51, 0.8);
  color: white;
  width: 80vw;
  max-height: 75vh;
  overflow: auto;
  z-index: 1;
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
.glitchyBtn {
  width: 50vw;
}

.topnav {
  overflow: hidden;
  background-color: #333;
}

.topnav a {
  float: right;
  display: block;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}

.topnav a:hover {
  background-color: #ddd;
  color: black;
}

.topnav a.active {
  background-color: #181818;
  color: white;
}

.topnav .icon {
  display: none;
}

@media screen and (max-width: 600px) {
  .topnav a:not(:first-child) {
    display: none;
  }
  .topnav a.icon {
    float: right;
    display: block;
  }
}

@media screen and (max-width: 600px) {
  .topnav.responsive {
    position: relative;
  }
  .topnav.responsive .icon {
    position: absolute;
    right: 0;
    top: 0;
  }
  .topnav a {
    float: left;
  }
  .topnav.responsive a {
    float: none;
    display: block;
    text-align: left;
  }
}
</style>