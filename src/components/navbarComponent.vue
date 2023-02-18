<template>
  <div class="navbar">
    <nav>
      <router-link to="/">/</router-link>
      <router-link to="/about">/about</router-link>
      <router-link to="/projects">/projects</router-link>
      <router-link to="/socials">/socials</router-link>
      <router-link to="/contact">/contact</router-link>
    </nav>
    <div class="theme_button_div">
      <button class="theme_button" id="theme-button" @click="toggleTheme">
        <transition name="fade">
          <Icon :icon="currentIcon" v-show="!changingIcon" style="width: 35px; height: 35px;"/>
        </transition>
      </button>
    </div>
  </div>
</template>

<script>



export default {
  data() {
    return {
      currentIcon: 'ph:moon-stars',
      changingIcon: false,
      icons: ['ph:moon-stars', 'ph:sun'],
      theme: 'light',
    };
  },
  mounted() {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      this.currentIcon = 'ph:sun';
      this.theme = 'dark';
      this.toggleThemeCss()
      this.changeIcon()
    } else {
      this.currentIcon = 'ph:moon-stars';
      this.theme = 'light';
    }
  },

  methods: {
    toggleTheme() {
      this.theme = this.theme === 'light' ? 'dark' : 'light';
      this.toggleThemeCss()
    },
    toggleThemeCss() {
      if (this.theme === 'dark') {
        document.documentElement.style.setProperty('--bg-color', '#2c3e50');
        document.documentElement.style.setProperty('--text-color', 'whitesmoke');
        document.documentElement.style.setProperty('--line-color', 'azure');
        this.changeIcon();
      } else {
        document.documentElement.style.setProperty('--bg-color', 'whitesmoke');
        document.documentElement.style.setProperty('--text-color', '#2c3e50');
        document.documentElement.style.setProperty('--line-color', '#6a5acd');
        this.changeIcon();
      }
    },
    changeIcon() {
      const currentIndex = this.icons.indexOf(this.currentIcon)
      const nextIndex = (currentIndex + 1) % this.icons.length
      this.changingIcon = true
      setTimeout(() => {
        this.currentIcon = this.icons[nextIndex]
        this.changingIcon = false
      }, 500) // Wartezeit in Millisekunden, bis das nächste Icon angezeigt wird
    }
  },
};

</script>




<style>



nav {
  position: fixed;
  top: 0;
  z-index: 1;
  margin-top: 8px;
  padding-inline: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50vw;
  height: 6vh;
  color: var(--text-color);
  border-radius: 20px;
  background-color: var(--bg-color);

}


.navbar {
  display: flex;
  justify-content: center;
}

nav a {
  text-align: center;
  margin: 20px;
  text-decoration: none;
  color: var(--text-color);
  padding: 8px;
}

nav a:hover {
  text-align: center;
  margin: 20px;
  text-decoration: none;
  color: var(--text-color);
  padding: 7px;
  border: solid 1px #e5e7eb;
  border-radius: 20px;
}

/*noinspection ALL*/
nav a.router-link-exact-active {
  color: #708090;
}

.theme_button {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 1;
  margin-top: 8px;
  margin-right: 8px;
  background-color: transparent;
  border: none;
  color: var(--text-color);
  display: flex;
  font-size: 35px;
}


.theme_button_div {
  margin-left: auto;
}

/*noinspection CssUnusedSymbol*/
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s, width 0.5s, height 0.5s;
}

/*noinspection CssUnusedSymbol*/
.fade-enter, .fade-leave-to {
  opacity: 0;
  width: 0;
  height: 0;
}

</style>
