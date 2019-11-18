<template>
  <div class="tech-container">
    <div class="logo-wrap"></div>
    <div class="skills-list">
      <div class="left-section">
      
        
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      skills: [
        {
          tech: "Html, Css"
        },

        {
          tech: "Vue, Angular"
        },

        {
          tech: "Cordova, Ionic"
        },
        {
          tech: "Framework7, Vuetify"
        }
      ],
      skills2: [
        {
          tech: "JavaScript, TypeScript"
        },
        {
          tech: " JQuery, Sass"
        },
        {
          tech: " Api's, Npm"
        },
        {
          tech: " Materialize css, bootstrap"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
$primary: #d46134;
$blue: rgb(71, 97, 114);

.tech-container {
  height: 100vh;
  color: rgb(233, 233, 233);
  position: relative;
  .logo-wrap {
    height: 40vh;
  }
  .skills-list {
    position: absolute;
    bottom: 30px;
    width: 100%;
    display: flex;
    justify-content: space-around;
  }

  .skill-item {
    display: flex;
    height: 30px;
    align-items: center;
    p {
      margin: 0;
    }
  }

  .icon-wrap {
    width: 40px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    i {
      color: $primary;
    }
  }

  .left-section,
  .right-section {
    width: 50%;
  }
}
</style>