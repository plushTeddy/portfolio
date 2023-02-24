<template>

  <div class="spacer_min"></div>

  <section id="home_start">
    <div>
      <div>
        <div v-if="!imageLoaded" class="loader loader--style3" title="2">
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40px" height="40px" viewBox="0 0 50 50" style="enable-background:new 0 0 50 50;" xml:space="preserve">
            <path fill="#000" d="M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z">
            <animateTransform attributeType="xml" attributeName="transform" type="rotate" from="0 25 25" to="360 25 25" dur="0.75s" repeatCount="indefinite"/>
            </path>
        </svg>
        </div>
        <!--suppress HtmlRequiredAltAttribute -->
        <img id="img_url" :src="image_url" @load="imageLoaded = true">
      </div>
      <h1>Hey, I'm plushTeddy ✌️</h1>
    </div>

    <br><br><br>

    <div class="scroll-downs">
      <div class="mouse">
        <div class="scroller"></div>
      </div>
    </div>
  </section>

  <div class="spacer"></div>

  <section id="home_country">
    <div v-motion-slide-visible-once-left>
      <h1>Switzerland, CH</h1>
    </div>
  </section>

  <div class="spacer"></div>

  <section id="home_what">
    <div v-motion-slide-visible-once-left>
      <h1>Fullstack Developer</h1>
    </div>
  </section>

  <div class="spacer"></div>

  <section id="home_languages">
    <div v-motion-slide-visible-once-left>
      <h1>how I code now</h1>
      <p>Python</p>
      <p>HTML, CSS</p>
      <h1>how I wan't to code in future</h1>
      <p>Dart</p>
      <p>Golang</p>
      <p>Kotlin</p>
    </div>
  </section>

  <div class="spacer"></div>

  <section id="home_experience">
    <div v-motion-slide-visible-once-left>
      <h1>where I work now</h1>
        <p>TeamMLG.net | Developer</p>
        <p>-</p>
      <h1>where I was working</h1>
        <p>Wasserkampf.eu | Supporter</p>
    </div>
  </section>

  <div class="spacer_min"></div>
</template>

<script>

export default {
  data() {
    return {
      image_url: null,
      imageLoaded: false
    }
  },
  mounted() {
    fetch('https://dcl.flawcra.cc/755112341548433489')
        .then(response => response.json())
        .then(data => {
          this.image_url = `https://cdn.discordapp.com/avatars/${data.user.id}/${data.user.avatar}.png`;
        });
  }
}
</script>


<style>
#img_url {
  border-radius: 100px;
  transition: transform 1s ease-in-out;
}
#img_url:hover {
  border-radius: 100px;
  -ms-transform: scale(4.6);
  transform: scale(1.25);
}

.scroll-downs {
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;

  width :34px;
  height: 55px;
}
.mouse {
  width: 3px;
  padding: 10px 15px;
  height: 35px;
  border: 2px solid var(--text-color);
  border-radius: 25px;
  opacity: 0.75;
  box-sizing: content-box;
}
.scroller {
  width: 3px;
  height: 10px;
  border-radius: 25%;
  background-color: var(--text-color);
  animation-name: scroll;
  animation-duration: 2.2s;
  animation-timing-function: cubic-bezier(.15,.41,.69,.94);
  animation-iteration-count: infinite;
}
@keyframes scroll {
  0% { opacity: 0; }
  10% { transform: translateY(0); opacity: 1; }
  100% { transform: translateY(15px); opacity: 0;}
}

.loader{
  margin: 0 0 2em;
  height: 100px;
  width: 20%;
  text-align: center;
  padding: 1em;
  display: inline-block;
  vertical-align: top;
}
</style>