<template>
  <div class="tech-container">
    <div class="top">
      <div class="title">
        <div>
          <h1>my links</h1>
          <div class="line"></div>
        </div>
      </div>
      <div class="links">
        <a href="https://www.codewars.com/users/SyntappZ" target="_">
          <div class="link">
            <i class="fas fa-code"></i>
            <h3>codewars</h3>
            <p>where i practice algorithms</p>
          </div>
        </a>

        <a href="https://github.com/SyntappZ" target="_">
          <div class="link">
            <i class="fab fa-github-alt"></i>
            <h3>github</h3>
            <p>where i keep my code</p>
          </div>
        </a>
      </div>
    </div>
    <div class="bottom">
      <div class="title">
        <div>
          <h1>tech i use</h1>
          <div class="line"></div>
        </div>
      </div>

      <div class="skills-list">
        <div class="tech" v-for="(skill, i) in skills" :key="i">
          <p>{{skill}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.skills = "html css sass javascript vue react angular cordova ionic firebase git ajax".split(
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
$text: rgb(214, 214, 214);
$textOnWhite: rgb(148, 148, 148);

.tech-container {
  min-height: 100vh;
  color: rgb(233, 233, 233);
  position: relative;
  padding: 0 450px;

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
    width: 100%;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    padding: 0 150px;
  }

  .tech {
    width: 100px;
    margin: 5px;
    border: solid 2px $primary;
    color: #eee;
    border-radius: 4px;
    p {
      margin: 0;
      padding: 8px;
      text-align: center;
      text-transform: capitalize;
      font-weight: bolder;
    }
  }

  .top,
  .bottom {
    min-height: 50vh;
  }

  .cover {
    background: #a8431a;
    height: 100%;
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
  .links {
    margin: auto;
    width: 80%;
    text-align: center;
    display: flex;
    justify-content: space-between;
    cursor: pointer;
    text-transform: capitalize;
    flex-wrap: wrap;
    a {
      text-decoration: none;
    }
    h3 {
      color: $text;
    }
    p {
      color: $textOnWhite;
    }
    i {
      font-size: 50px;
      color: $primary;
      transition: 0.3s;
    }
  }
  .link:hover i {
    color: $text;
    transform: scale(1.1);
  }
}

@media (max-width: 1300px) {
  .tech-container {
    padding: 0 300px;
  }
}

@media (max-width: 1024px) {
  .tech-container {
    padding: 100px;

    .skills-list {
      width: 100%;
      padding: 0 100px;
    }
  }
}
@media (max-width: 600px) {
  .tech-container {
    padding: 0;
    .skills-list {
      width: 100%;
      padding: 0;
    }
    .links {
      justify-content: center;
      width: 100%;
      .link {
        margin: 30px 0;
      }
    }
  }
}
</style>