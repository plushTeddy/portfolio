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

    <br><br><br><br><br><br><br><br><br>

    <div class="scroll-downs">
      <div class="mouse">
        <div class="scroller"></div>
      </div>
    </div>
  </section>

  <div class="spacer"></div>

  <section id="home_country">
    <div v-motion-slide-visible-once-left>
      <h1><Icon icon="pixelarticons:pin" /> Switzerland, CH</h1>
    </div>
  </section>

  <div class="spacer"></div>

  <section id="home_what">
    <div v-motion-slide-visible-once-left>
      <h1>Fullstack Developer</h1>
    </div>
  </section>


  <div class="spacer"></div>

  <section id="home_technologies">
    <div v-motion-slide-visible-once-left>
      <h1>technologies</h1>
      <div style="padding: 20px; width: 20%; margin: 0 auto; font-size: 40px;">
        <Icon icon="logos:python" style="margin-bottom: 10px; padding-inline: 10px;" />
        <Icon icon="devicon:kotlin" style="margin-bottom: 10px; padding-inline: 10px;" />
        <Icon icon="logos:html-5" style="margin-bottom: 10px; padding-inline: 10px;" />
        <Icon icon="vscode-icons:file-type-css" style="margin-bottom: 10px; padding-inline: 10px;" />
        <Icon icon="devicon:vuejs" style="margin-bottom: 10px; padding-inline: 10px;" />
        <Icon icon="devicon:github" style="margin-bottom: 10px; padding-inline: 10px;" />
        <Icon icon="wpf:mac-os" style="margin-bottom: 10px; padding-inline: 10px;" />
        <Icon icon="ri:windows-fill" style="margin-bottom: 10px; padding-inline: 10px;" />
        <Icon icon="logos:debian" style="margin-bottom: 10px; padding-inline: 10px;" />
        <Icon icon="logos:ubuntu" style="margin-bottom: 10px; padding-inline: 10px;" />
        <Icon icon="simple-icons:plesk" style="margin-bottom: 10px; padding-inline: 10px;" />
        <Icon icon="logos:nginx" style="margin-bottom: 10px; padding-inline: 10px;" />
        <Icon icon="skill-icons:docker" style="margin-bottom: 10px; padding-inline: 10px;" />
        <Icon icon="logos:jetbrains" style="margin-bottom: 10px; padding-inline: 10px;" />
        <Icon icon="devicon:mysql-wordmark" style="margin-bottom: 10px; padding-inline: 10px;" />
      </div>

    </div>
  </section>

  <div class="spacer"></div>

  <!--<section id="home_projects">
    <div v-motion-slide-visible-once-left>
      <h1>my projects</h1>
      <h4>Weather Cast</h4>
      <p><a href="https://w" class="link">Snow-Client.com</a> | Founder</p>
    </div>
  </section>-->

  <div class="spacer"></div>

  <section id="home_experience">
    <div v-motion-slide-visible-once-left>
      <h1>where I work at the moment</h1>
        <p>-</p>
      <h1>where I was working</h1>
        <p>TeamMLG.net | Developer</p>
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
  created() {
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