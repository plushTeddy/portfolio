<template>
  <h1>About</h1>

  <section id="about_text">
    <div class="spacer_inline">
    <p>I'm plushTeddy, or as most people call me Teddy. I'm a fullstack developer and have been coding for ~{{ yearsPassed }} years. I work on various projects, some of which are open source and some are not. I am currently programming mainly in Python, HTML and CSS. I would like to learn dart, golang and kotlin this year. My hobbies outside of programming are sailing and gaming.</p>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      yearsPassed: 0
    }
  },
  created() {
    let startDate = new Date(2022, 0, 1); // January 1st, 2022
    let currentDate = new Date();
    let timeDiff = Math.abs(currentDate.getTime() - startDate.getTime());
    let diffYears = (timeDiff / (1000 * 3600 * 24 * 365.25)).toFixed(3);
    this.yearsPassed = diffYears;
  }
}
</script>
