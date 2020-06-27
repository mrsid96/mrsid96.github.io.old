<template>
  <div class="timeline">
    <div class="entry">
      <div class="title">
        <h3>2014 - Present</h3>
        <p>Title, Company</p>
      </div>
      <div class="body">
        <p>Voluptatibus veniam ea reprehenderit atque reiciendis non laborum adipisci ipsa pariatur omnis.</p>
        <ul>
          <li>Rerum sit libero possimus amet excepturi</li>
          <li>Exercitationem enim dolores sunt praesentium dolorum praesentium</li>
          <li>Modi aut dolores dignissimos sequi sit ut aliquid molestias deserunt illo</li>
        </ul>
      </div>
    </div>
    <div class="entry">
      <div class="title">
        <h3>2010 - Present</h3>
        <p>Title, Company</p>
      </div>
      <div class="body">
        <p>Voluptatibus veniam ea reprehenderit atque reiciendis non laborum adipisci ipsa pariatur omnis.</p>
        <ul>
          <li>Rerum sit libero possimus amet excepturi</li>
          <li>Exercitationem enim dolores sunt praesentium dolorum praesentium</li>
          <li>Modi aut dolores dignissimos sequi sit ut aliquid molestias deserunt illo</li>
        </ul>
      </div>
    </div>
    <div class="entry">
      <div class="title">
        <h3>2009 - 2010</h3>
        <p>Title, Company</p>
      </div>
      <div class="body">
        <p>Voluptatibus veniam ea reprehenderit atque reiciendis non laborum adipisci ipsa pariatur omnis.</p>
        <ul>
          <li>Rerum sit libero possimus amet excepturi</li>
          <li>Exercitationem enim dolores sunt praesentium dolorum praesentium</li>
          <li>Modi aut dolores dignissimos sequi sit ut aliquid molestias deserunt illo</li>
        </ul>
      </div>
    </div>
    <div class="entry">
      <div class="title">
        <h3>2006 - 2008</h3>
        <p>Title, Company</p>
      </div>
      <div class="body">
        <p>Voluptatibus veniam ea reprehenderit atque reiciendis non laborum adipisci ipsa pariatur omnis.</p>
        <ul>
          <li>Rerum sit libero possimus amet excepturi</li>
          <li>Exercitationem enim dolores sunt praesentium dolorum praesentium</li>
          <li>Modi aut dolores dignissimos sequi sit ut aliquid molestias deserunt illo</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({})
};
</script>

<style lang="scss" scoped>
$gutter: 30px;
$border-width: 4px;
$dot-diameter: 8px;

.timeline {
  width: 90%;
  padding: 100px 50px;
  position: relative;
  &:before {
    content: "";
    position: absolute;
    top: 0px;
    left: calc(20% + 28px); //$gutter/2
    bottom: 0px;
    width: $border-width;
    background: #ddd;
  }
  &:after {
    content: "";
    display: table;
    clear: both;
  }
}

.entry {
  clear: both;
  text-align: left;
  position: relative;
  .title {
    margin-bottom: 0.5em;
    float: left;
    width: 20%;
    padding-right: $gutter;
    text-align: right;
    position: relative;
    &:before {
      content: "";
      position: absolute;
      width: $dot-diameter;
      height: $dot-diameter;
      border: $border-width solid salmon;
      background-color: #fff;
      border-radius: 100%;
      top: 15%;
      right: -$dot-diameter;
      z-index: 99;
    }
    h3 {
      margin: 0;
      font-size: 120%;
    }
    p {
      margin: 0;
      font-size: 100%;
    }
  }
  .body {
    margin: 0 0 3em;
    float: right;
    width: 66%;
    padding-left: $gutter;
    p {
      line-height: 1.4em;
      &:first-child {
        margin-top: 0;
        font-weight: 400;
      }
    }
    ul {
      color: #aaa;
      padding-left: 0;
      list-style-type: none;
      li:before {
        content: "–";
        margin-right: 0.5em;
      }
    }
  }
}
</style>