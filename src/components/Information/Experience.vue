<template>
  <div>
    <h1 class="white-color">Down the timeline</h1>
    <div class="timelineContainer">
      <div v-for="(item, i) in experiences" :key="item.name">
        <div
          :class="i%2==0 ? 'timeline-block timeline-block-left' : 'timeline-block timeline-block-right'"
        >
          <div class="marker"></div>
          <div class="timeline-content">
            <h3>{{item.name}}</h3>
            <span>{{item.span}}</span>
            <p>{{item.content}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    experiences:[
      {
        name: "Signzy Technologies Pvt. Ltd",
        span: "March 2018 - Present",
        content: "Full Stack Developer with 2+ years of experience in developing  fault-tolerant SAAS and on-premise consumer onboarding products for multiple financial segments of India. Currently leading the tech team developing V-CIP (Video-based Customer Identification  Process) solution that would enable Financial Institutions to onboard users in near real-time."
      }, 
      {
        name: "NIST Technology consulting services",
        span: "June 2017 - Oct 2017",
        content: "Was working as an embedded intern and actively participated in ongoing projects, including a vehicle tracking system, and realtime monitoring of weather parameters."
      }
    ]
  })
};
</script>

<style scoped>
* {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  outline: none;
}

.timelineContainer {
  width: 80%;
  padding: 50px 0;
  margin: 50px auto;
  position: relative;
  overflow: hidden;
  text-align: initial;
}

.timelineContainer:before {
  content: "";
  position: absolute;
  top: 0;
  left: 50%;
  margin-left: -1px;
  width: 2px;
  height: 100%;
  background: #ccd1d9;
  z-index: 1;
}

.timeline-block {
  width: -webkit-calc(50% + 8px);
  width: -moz-calc(50% + 8px);
  width: calc(50% + 8px);
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: flex;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -moz-box-pack: justify;
  justify-content: space-between;
  clear: both;
}

.timeline-block-right {
  float: right;
}

.timeline-block-left {
  float: left;
  direction: rtl;
}

.marker {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 2px solid #f5f7fa;
  background: #4fc1e9;
  margin-top: 10px;
  z-index: 9999;
}

.timeline-content {
  width: 95%;
  padding: 0 15px;
}

.timeline-content h3 {
  margin-top: 5px;
  margin-bottom: 5px;
  font-size: 25px;
  font-weight: 500;
  color: white;
}

.timeline-content span {
  font-size: 15px;
  color: #a4a4a4;
}

.timeline-content p {
  font-size: 14px;
  line-height: 1.5em;
  word-spacing: 1px;
}

@media screen and (max-width: 1440px) {
  .timelineContainer:before {
    left: 8px;
    width: 2px;
  }
  .timeline-block {
    width: 100%;
    margin-bottom: 30px;
  }
  .timeline-block-right {
    float: none;
  }

  .timeline-block-left {
    float: none;
    direction: ltr;
  }
}
</style>