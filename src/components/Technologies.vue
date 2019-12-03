<template>
  <div class="tech-container">
    <div class="title">
      <div>
        <h1>tech i use</h1>
        <div class="line"></div>
      </div>
    </div>

    <div class="skills-list">
      <div class="tech-wrap" v-for="(skill, i) in skills" :key="i">
        <div class="tech">
          <p>{{skill.tech}}</p>
        </div>
        <div class="leftover">
          <div :style="skill.width" class="cover"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    const tech = "html css javascript vue react angular cordova ionic firebase git ajax".split(
      " "
    );
    const percent = [
      "width:90%;",
      "width:90%;",
      "width:80%;",
      "width:80%;",
      "width:30%;",
      "width:20%;",
      "width:70%;",
      "width:50%;",
      "width:40%;",
      "width:70%;",
      "width:80%;"
    ];

    this.skills = tech.map((x, i) => {
      return {
        tech: x,
        width: percent[i]
      };
    });

    console.log(this.skills);
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
    margin: auto;
    width: 500px;
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
    
    background: #c5c5c5;
    

  }

  .cover {
    background: #a8431a;
    height:100%;
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