<template>
  <div id="app">
    <div class="nav" :style="navColor">
      <div class="full-container">
        <p @click="jumpTo('.home')">home</p>
        <p @click="jumpTo('.about-component')">About</p>
        <p @click="jumpTo('.skills-component')">Skills</p>
        <p @click="jumpTo('.projects-component')">Projects</p>
      </div>
    </div>
    <router-view />
    <footer>

    </footer>
  </div>
</template>

<script>
import jump from "jump.js";
export default {
  mounted() {
    window.addEventListener("scroll", () => {
    scrollY >= 918 && scrollY < 1490 ? this.navColor = 'color:#555;' 
    : scrollY >= 1490  && scrollY < 2423 ? this.navColor = 'color:rgb(214, 214, 214);' 
    : scrollY >= 2423 ? this.navColor = 'color:#555;' 
    : this.navColor = 'color:rgb(214, 214, 214);' 
    });
  },

  data() {
    return {
      navColor: ''
    };
  },
  methods: {
    jumpTo(section) {
      jump(section, {
        offset: 1
      });
    },
  
  }
};
</script>
<style lang="scss">
$primary: rgb(212, 97, 52);
$text: rgb(214, 214, 214);
$textOnWhite: rgb(148, 148, 148);


// font-family: 'Poiret One', cursive;
// font-family: 'Cinzel', serif;
body {
  margin: 0;
}
.full-container {
  width: 90%;
  margin: auto;
}

p {
  font-weight: 600;
}

:focus {
  outline: none;
}

.btn {
  padding: 15px 20px;
  border: solid $primary 2px;
  border-radius: 50px;
  background: transparent;
  color: $primary;
  text-transform: uppercase;
  letter-spacing: 1px;
  cursor: pointer;
  margin: 20px 0;
  transition: 0.3s;
}
#app {
  font-family: "Poiret One", cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 0;
  letter-spacing: 1px;

  .nav {
    padding: 10px 0;
    width: 100%;
    position: fixed;
    z-index: 10;
    color: $text;
    transition: .3s;
    p {
      display: inline-block;
      padding: 10px 30px;
      margin: 10px 20px;
      cursor: pointer;
      
    }
  }
 footer {
   height:20vh;
   color:#eee;
   background:#000;
 }
}
</style>
