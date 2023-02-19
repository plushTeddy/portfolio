<template>

  <section id="navbar">
    <div>
      <Navbar/>
    </div>
  </section>

  <div style="margin-top: 75px;"></div>

  <router-view/>

  <section id="footer">
    <div class="footer">
      <div class="line"></div>
      <h1>plushTeddy</h1>
      <div class="social">
        <a href="https://discordapp.com/users/755112341548433489/" class="link">
          <Icon icon="ic:baseline-discord"/>
        </a>
        &nbsp;
        <a href="https://twitter.com/LiLplushTeddy/" class="link">
          <Icon icon="mdi:twitter"/>
        </a>
        &nbsp;
        <a href="https://github.com/plushTeddy/" class="link">
          <Icon icon="mdi:github"/>
        </a>
      </div>
      <div>
        <router-link to="/contact" class="link">Contact</router-link>
        &nbsp;
        <a class="link" href="https://github.com/plushTeddy/portfolio/">Source</a>
      </div>
      <p>Software Engineer • 2023</p>
    </div>
  </section>
</template>

<script>


import Navbar from './components/navbarComponent.vue';
import { useFavicon } from '@vueuse/core'

export default {
  components: {
    Navbar
  },
  mounted() {
    const icon_fav = useFavicon()
    fetch('https://dcl.flawcra.cc/755112341548433489').then(response => response.json()).then(data => {
      icon_fav.value = `https://cdn.discordapp.com/avatars/${data.user.id}/${data.user.avatar}.png`;
    });
  }
}
</script>

<style>
/*noinspection ALL*/
#app {
  font-family: 'Rubik', sans-serif;
  text-align: center;
  color: var(--text-color);
}

.footer {
  float: bottom;
  bottom: 0;
  width: 100%;
  font-size: 10px;
  color: var(--text-color);
  text-align: center;
  margin-top: 800px;
  margin-bottom: 20px;
}

.line {
  border: solid var(--line-color) 1px;
  border-radius: 10px;
  margin-left: 10%;
  margin-right: 10%;
  margin-top: 90px;
  opacity: 0.25;
}

.social {
  text-align: center;
  font-size: 20px;
}
</style>
