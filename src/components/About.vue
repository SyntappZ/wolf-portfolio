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
            Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Phasellus finibus gravida dignissim.
            In a nisl placerat, ultrices purus vel, eleifend metus.
            Donec volutpat pretium enim, lacinia fermentum mi congue ut.
            Praesent quis tortor mi. Sed scelerisque fringilla pulvinar.
            Curabitur aliquam quam ex, eu aliquet libero fermentum at.
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

.about-component {
  height: 70vh;
  background-color: #eee;
  position: relative;

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
  .container {
    width: 70%;
    margin: auto;
  }

  .about-text {
    height: 70%;
    .wrap {
      .logo-wrap {
        width: 80px;
        margin: auto;
        padding-top: 40px;
        img {
          width: 100%;
          opacity: 0.6;
        }
      }
      .my-story {
        width: 400px;
        text-align: center;
        margin: auto;
        .line {
          width: 100px;
          height: 4px;
          margin: auto;
          border-radius: 50px;
          background: $primary;
        }
        h1 {
          color: $primary;
        }
        p {
          padding-top: 40px;
        }
      }
    }
  }
}
</style> 