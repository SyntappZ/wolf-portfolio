<template>
  <div class="home">
    <div class="background">
      <div class="cover"></div>
      <div class="full-container">
        <div class="welcome-text">
          <h1>
            welcome to my
            <span class="highlight">portfolio</span>
          </h1>

          <p>Hi im Martyn, i am a front end web developer who also</p>
          <p>builds android apps using web technologies.</p>
          <button class="btn" @click="jumpToAbout">Learn more</button>
        </div>
      </div>
    </div>
    <AboutComponent class="about" />
    <SkillsComponent class="skills" />
    <ProjectsComponent class="projects" />
  </div>
</template>

<script>
import AboutComponent from "../components/AboutComponent";
import SkillsComponent from "../components/SkillsComponent";
import ProjectsComponent from "../components/ProjectsComponent";
import jump from "jump.js";

export default {
  name: "home",
  mounted() {
   
   
    
  },
  components: {
    AboutComponent,
    SkillsComponent,
    ProjectsComponent
  },
  data() {
    return {
     
    };
  },
  methods: {
    jumpToAbout() {
      jump(".about-component", {
        offset: 1
      });
    }
  }
};
</script>

<style scoped lang="scss">
$primary: rgb(212, 97, 52);
$text: rgb(214, 214, 214);
$blue: rgb(71, 97, 114);

p {
  color: $text;
}

.background {
  width: 100%;
  height: 100vh;
  background: url("../images/wolf-background.jpg");
  background-size: cover;
  background-position: center center;
  display: flex;
  justify-content: start;
  align-items: center;
  position: relative;

  .cover {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 0;
  }
  .welcome-text {
    color: white;
    position: relative;
    z-index: 1;
    h1 {
      font-size: 45px;
      text-transform: capitalize;
    }
  }
  .highlight {
    color: $primary;
    font-weight: 700;
  }

  .btn:hover {
    background: $primary;
    color: black;
  }
}

@media (max-width: 800px) {
  .background {
    .cover {
      background: rgba(0, 0, 0, 0.705);
    }
    .welcome-text {
      h1 {
        font-size: 30px;
      }
      p {
        font-size: 14px;
      }
    }
  }
}
@media (max-width: 600px) {
  .background {
    .welcome-text {
      margin: auto;
      text-align: center;
    }
    .btn {
      margin: 80px;
    }
  }
}
</style>
