<template>
  <div class="about-component">
    <!-- <div class="triangle"></div> -->

    <div class="about-text">
      <div class="container wrap">
        <div class="logo-wrap">
          <img src="../images/wolf-logo.png" alt="wolf logo" />
        </div>
        <div class="my-story">
          <h1>My Story</h1>
          <div class="line"></div>
          <p>
            Hi im Martyn, i am a web developer and i got into coding in 2018.
            I have been using the framework Vue for the last few months and im really loving it,
            i cant wait to try Angular & React.<br><br>
            I've had many different jobs in the past but i feel now is the time for
            me start my journey as a real web developer.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "about",
  components: {}
};
</script>

<style scoped lang="scss">
$primary: rgb(212, 97, 52);
$textOnWhite: rgb(148, 148, 148);

.about-component {
  min-height: 60vh;
  background-color: #eee;
  display: flex;
  justify-content: center;
  align-items: center;
  

  // .triangle {
  //   position: absolute;
  //   bottom:0;
  //   left:0;
  //   width: 0;
  //   height: 0;
  //   border-style: solid;
  //   border-width: 0 200px 150px 200px;
  //   border-color: transparent transparent $primary transparent;
  // }
  //   .triangle2 {
  //     position: absolute;
  //     top:0;
  //     right:0;
  //     left:0;
  //     margin:auto;
  //     width: 0;
  //     height: 0;
  //    border-style: solid;
  // border-width: 150px 200px 0 200px;
  // border-color: $primary transparent transparent transparent;

  //   }

  .about-text {
    height: 70%;

    .logo-wrap {
      width: 80px;
      margin: auto;

      img {
        width: 100%;
        opacity: 0.6;
      }
    }
    .my-story {
      width: 400px;
      text-align: center;
      margin: auto;

      h1 {
        color: $primary;
      }
      p {
        padding-top: 40px;
        color:$textOnWhite;
        
      }
    }
    .line {
      width: 100px;
      height: 4px;
      margin: auto;
      border-radius: 50px;
      background: $primary;
    }
  }
}
</style> 