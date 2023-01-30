<template>

  <div class="spacer_min"></div>

  <section id="home_start">
    <div>
      <img id="img_url" :src="image_url" alt="img">
      <h1>Hey, I'm plushTeddy ✌️</h1>
    </div>

    <br><br><br>

    <div class="scroll-downs">
      <div class="mousey">
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
      <h1>where do I work now</h1>
      <p>unviewed.xyz | Founder</p>
      <p>TeamMLG.net | Developer</p>
      <h1>where I was working</h1>
      <p>Wasserkampf.eu | Supporter</p>
    </div>
  </section>

  <div class="spacer_min"></div>
</template>


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
.mousey {
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
</style>