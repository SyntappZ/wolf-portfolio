<template>
  <div class="skills-component">
    <div class="container">
      <div class="left-wrap">
        <div class="left-background">
          <technologies />
          <div class="logo-wrap">
            <h1>Skills</h1>
          </div>
        </div>
      </div>

      <div class="skills-wrap">
        <skills />
      </div>
    </div>
  </div>
</template>

<script>
import skills from "./SkillsSection";
import technologies from "./TechnologiesSection";

export default {
  name: "skillsComponent",
  components: {
    skills,
    technologies
  }
};
</script>

<style scoped lang="scss">
$primary: #d46134;

.skills-component {
  min-height: 100vh;
  width: 100%;

  .background {
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 100vh;
  }

  .container {
    display: flex;
    width: 100%;
    background-color: #ffffff;
    height: 100vh;
  }

  .left-wrap {
    width: 40%;
    background: url("../images/man-on-rock.jpg");
    background-position: center center;
    background-size: cover;
  }
  .left-background {
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.856);
    position: relative;
  }

  .logo-wrap {
    height: 150px;
    width: 150px;
    position: absolute;
    margin: auto;

    right: -75px;
    top: 0;
    bottom: 0;
    border-radius: 50%;
    background: rgb(219, 219, 219);

    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "Black Ops One", cursive;
    color: rgb(104, 104, 104);
  }

  .skills-wrap {
    width: 60%;
  }
}
</style> 


  