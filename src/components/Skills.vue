<template>
  <div class="skills-component">
    <div class="container">
      <div class="left-wrap">
        <div class="left-background">
          <div class="logo-wrap">
            <h1>Skills</h1>
          </div>
        </div>
      </div>

      <div class="skills-wrap">
        <skillContainer />
      </div>
    </div>
  </div>
</template>

<script>
import skillContainer from "./SkillContainer";
export default {
  name: "skills",
  components: {
    skillContainer
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

    .left-wrap {
      width: 40%;
      background: url("../images/man-on-rock.jpg");
      background-position: center center;
      background-size: cover;
      .left-background {
        width: 100%;
        height: 100vh;
        background: rgba(71, 97, 114, 0.856);
        position: relative;
        .logo-wrap {
          height: 150px;
          width: 150px;
          position: absolute;
          margin: auto;
       
          right: -75px;
          top: 0;
          bottom: 0;
          border-radius: 50%;
          background: #eee;
          display: flex;
          justify-content: center;
          align-items: center;
          font-family: "Black Ops One", cursive;
          color: rgb(104, 104, 104);
        }
      }
    }

    .skills-wrap {
      width: 60%;
    }
  }
}
</style> 


  // .hexagon {
  //       position: relative;
  //       width: 300px;
  //       height: 173.21px;
  //       background-color: $primary;
  //       margin: 86.6px 0;

  //        &:before,
  //     &:after {
  //       content: "";
  //       position: absolute;
  //       width: 0;
  //       border-left: 150px solid transparent;
  //       border-right: 150px solid transparent;
  //     }

  //       &:before {
  //       bottom: 100%;
  //       border-bottom: 86.6px solid $primary;
  //     }

  //    &:after {
  //       top: 100%;
  //       width: 0;
  //       border-top: 86.6px solid $primary;
  //     }


  //     }