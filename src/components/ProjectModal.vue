<template>
  <div class="modal-component">
    <div class="modal">
      <div class="close" @click="closeModal">
        <i class="fas fa-times"></i>
      </div>
      <div class="image" v-if="project.isWebsite">
        <img :src="project.image" alt="project image" />
      </div>
      <div class="android-images" v-else>
        <div class="image" v-for="(img, i) in project.image" :key="i">
          <img :src="img" alt="project-img" />
        </div>
      </div>
      <div class="text-area">
        <div class="text">
          <h2>{{ project.title }}</h2>
          <p>{{ project.description }}</p>
          <p class="bold">{{ project.bold }}</p>
        </div>
        <hr />
        <!-- <div class="tech-wrap">
            <h3 class="tech" v-for="(tech, i) in project.tech" :key="i">{{ tech }}</h3>
        </div>-->
        <div class="links">
          <a :href="project.github" target="_">Github</a>
          <a v-if="project.isWebsite" :href="project.pageLink" target="_">visit site</a>
          <a v-else :href="project.pageLink" target="_">playstore</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["selectedProject"],
  created() {},
  data() {
    return {};
  },
  methods: {
    closeModal() {
      this.$emit("closeModal");
    }
  },

  computed: {
    project() {
      return this.selectedProject;
    }
  }
};
</script>

<style lang="scss" scoped>
$primary: rgb(212, 97, 52);
$text: rgb(214, 214, 214);
$textOnWhite: rgb(131, 131, 131);

.modal-component {
  z-index: 10;
  min-height: 100vh;
  width: 100vw;
  position: fixed;
  bottom: 0;
  background: rgba(0, 0, 0, 0.829);
  display: flex;
  justify-content: center;
  align-items: center;

  .modal {
    width: 40vw;
    min-height: 70vh;
    background: white;
    position: relative;
  }
  .close {
    padding: 25px;
    position: absolute;
    right: 0;
    bottom: 0;
    font-size: 20px;
    color: grey;
    
    cursor: pointer;
    transition: 0.3s;
    &:hover {
      color: black;
     
    }
  }
  .image {
    width: 100%;

    img {
      width: 100%;
    }
  }
  .text-area {
    padding: 20px 40px;
    font-weight: 300;
    color: $textOnWhite;

    h2 {
      text-transform: capitalize;
      color: black;
    }
    p {
      letter-spacing: 1px;
      line-height: 20px;
    }
  }
  .tech-wrap {
    display: flex;
    width: 100%;
    justify-content: space-between;
    color: rgb(58, 58, 58);
  }

  .links {
    display: flex;
    justify-content: space-between;
    width: 60%;

    a {
      display: inline-block;
      padding: 0.5em 1.5em;
      border: solid grey 2px;
      border-radius: 50px;
      text-decoration: none;
      color: grey;
      text-transform: capitalize;
      font-weight: 900;
      margin: 30px 0;
      font-weight: bold;
      letter-spacing: 2px;
      transition: 0.3s;
      &:hover {
        border: solid rgb(83, 83, 83) 2px;
      }
    }
  }
  .bold {
    color: black;
    font-family: sans-serif;
  }

  .android-images {
    display: flex;
    justify-content: space-between;
    background: rgb(224, 224, 224);
    width: 100%;
    .image {
      width: 32%;
      height: auto;
      border-bottom: rgb(224, 224, 224) solid 10px;
      img {
        width: 100%;
        height: auto;
      }
    }
  }
}

@media (max-width: 1024px) {
  .modal-component {
     overflow-y: auto;
    .links {
      width: 70%;
      margin: auto;
    }

    .modal {
      width: 100%;
      height: 100vh;
      overflow-y: auto;
    }
  }
}

@media (max-width: 600px) {
  .modal-component {
    overflow-y: auto;
    .text-area p {
      font-size: 14px;
      line-height: 17px;
    }
    .links {
      width: 100%;
    }

   

    .android-images {
      width: 100%;
    }
  }
}
</style>