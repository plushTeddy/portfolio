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
  mounted() {
    let startDate = new Date(2022, 0, 1);
    let currentDate = new Date();
    let timeDiff = Math.abs(currentDate.getTime() - startDate.getTime());
    this.yearsPassed = (timeDiff / (1000 * 3600 * 24 * 365.25)).toFixed(3);
  }
}
</script>
