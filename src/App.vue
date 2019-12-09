<template>
  <div id="app">
    <div class="nav" :style="navColor">
      <div class="hamburger" @click="navOpen = true">
        <i class="fas fa-bars"></i>
      </div>
      <transition name="bounce">
        <div class="tablet-links" v-if="navOpen">
          <div class="logo">
            <img src="./images/wolf-logo.png" alt="wolf logo" />
          </div>
          <div class="links-wrap">
            <p @click="jumpTo('.home')">home</p>
            <p @click="jumpTo('.about-component')">About</p>
            <p @click="jumpTo('.skills-component')">Skills</p>
            <p @click="jumpTo('.projects-component')">Projects</p>
          </div>
        </div>
      </transition>

      <div class="full-container">
        <div class="page-links">
          <p @click="jumpTo('.home')">home</p>
          <p @click="jumpTo('.about-component')">About</p>
          <p @click="jumpTo('.skills-component')">Skills</p>
          <p @click="jumpTo('.projects-component')">Projects</p>
        </div>
      </div>
    </div>
    <Home />
    <footer>
      <div class="cover">
        <div class="copy">
          <a href="mailto:syntappz@gmail.com" target="_top">
            <i class="fas fa-envelope"></i>
          </a>

          <p>Syntappz &copy; 2019</p>
        </div>
      </div>
      <div class="footer-img">
        <img src="./images/stripednosewolf.png" alt="striped nose wolf" />
        <img src="./images/stripednosewolf.png" alt="striped nose wolf" />
      </div>
    </footer>
  </div>
</template>

<script>
import Home from "./components/Home";
import jump from "jump.js";
export default {
  components: {
    Home
  },
  mounted() {
    const about = this.heights.aboutHeight - 20;
    const skills = this.heights.skillsHeight - 20;
    const projects = this.heights.projectsHeight - 20;

    window.addEventListener("scroll", () => {
      scrollY >= about && scrollY < skills
        ? (this.navColor = "color:#555;")
        : scrollY >= skills && scrollY < projects
        ? (this.navColor = "color:rgb(214, 214, 214);")
        : scrollY >= projects
        ? (this.navColor = "color:#555;")
        : (this.navColor = "color:rgb(214, 214, 214);");
    });
  },

  data() {
    return {
      navColor: "",
      navOpen: false
    };
  },
  methods: {
    jumpTo(section) {
      this.navOpen = false;
      jump(section, {
        offset: 1
      });
    }
  },
  computed: {
    heights() {
      return this.$store.state.scrollHeights;
    }
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

  .hamburger {
    font-size: 40px;
    padding: 20px;
    display: none;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 20;
    color: rgb(197, 197, 197);
    cursor: pointer;
  }
  .nav {
    width: 100%;
    position: fixed;
    z-index: 10;
    color: $text;
    transition: 0.3s;

    .page-links {
      display: flex;
      width: 35%;
      justify-content: space-between;
    }

    p {
      padding: 20px 0;
      cursor: pointer;
    }
  }
  .tablet-links {
    width: 100%;

    background: rgb(231, 231, 231);
    position: absolute;
    z-index: 50;
    color: rgb(114, 114, 114);
    font-size: 20px;
    text-transform: capitalize;
    letter-spacing: 2px;
  }
  .logo {
    width: 60px;
    margin: 30px auto;
    padding: 20px;
    border-bottom: 1px rgb(70, 70, 70) solid;

    img {
      width: 100%;
      opacity: 0.6;
    }
  }
  .links-wrap {
    width: 100%;

    height: 400px;
    text-align: center;
  }
  footer {
    height: 20vh;
    color: #eee;
    background: #000;
    position: relative;
    text-align: center;
    .cover {
      position: absolute;
      z-index: 5;
      width: 100%;
      height: 20vh;
      background: rgba(0, 0, 0, 0.945);
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .footer-img {
      width: 100%;
      height: 20vh;
      position: relative;
      img {
        width: 20%;
        height: 20vh;
        object-fit: cover;
        filter: grayscale(100%);
        position: absolute;
        right: 0;
        transform: scaleX(-1);
        &:nth-child(2) {
          left: 0;
          transform: scaleX(1);
        }
      }
    }
    a {
      text-decoration: none;
      color: white;
    }
    i {
      font-size: 30px;
      cursor: pointer;
      transition: 0.3s;
      &:hover {
        transform: scale(1.4);
      }
    }
    p {
      padding: 20px;
      border-bottom: solid 2px $primary;
      margin: 0;
      text-transform: uppercase;
      letter-spacing: 2px;
    }
  }
}

.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

@media (max-width: 1600px) {
}

@media (max-width: 1024px) {
  #app {
    .nav .page-links {
      display: none;
    }
    .hamburger {
      display: block;
    }
    footer {
      .footer-img {
        width: 50%;
      }
    }
  }
}
@media (max-width: 600px) {
  #app .tablet-links {
    height: 100vh;
  }
}
</style>
