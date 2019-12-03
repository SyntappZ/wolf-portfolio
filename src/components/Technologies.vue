<template>
  <div class="tech-container">
    <div class="title">
      <div>
        <h1>tech i use</h1>
        <div class="line"></div>
      </div>
    </div>

    <div class="skills-list">
      <div class="tech-wrap" v-for="skill in skills" :key="skill">
        <div class="tech">
          <p>{{skill}}</p>
        </div>
        <div class="leftover">
          <div class="cover"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.skills = "html css javascript vue react angular cordova ionic materialize firebase git api's".split(
      " "
    );
    
  },
  data() {
    return {
      skills: []
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

  .title {
    width: 100%;
    height: 30vh;
    display: flex;
    justify-content: center;
    align-items: center;

    h1 {
      text-transform: capitalize;
    }
  }
  .skills-list {
    height: 50vh;
    width: 100%;
    padding: 0 100px;
    box-sizing: border-box;
  }

  .tech-wrap {
    width: 100%;
    display: flex;
    margin: 9px 0;
  }

  .tech {
    width: 20%;
    background: $primary;
    color: white;
    p {
      margin: 0;
      padding: 8px;
      text-align: center;
      text-transform: capitalize;
      font-weight: 900;
    }
  }
  .leftover {
    width: 80%;
   
  }

  .cover {
     background: #ad390a;
  }
  .links {
    height: 20vh;
  }

  .line {
    width: 100px;
    height: 4px;
    margin: auto;
    border-radius: 50px;
    background: $primary;
  }

  .logo-wrap {
    width: 180px;
    height: 180px;

    background: rgba(255, 255, 255, 0.562);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    margin: auto;

    img {
      width: 70%;
      opacity: 0.7;
    }
  }
}
</style>