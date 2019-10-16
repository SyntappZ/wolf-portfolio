<template>
  <div class="about-component">
    <div class="about-text">
      <div class="container wrap">
        <div class="image-wrap">
          <!-- <img src="#" alt="striped nose wolf" /> -->
        </div>
        <div class="my-story"></div>
      </div>
    </div>
    <div class="skills">
      <div class="container"></div>
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
  height: 100vh;
  background-color: #eee;
  .container {
    width: 70%;
    margin: auto;
  }

  .about-text {
    height: 70%;
    .wrap {
      display: flex;
      align-items: center;
      .image-wrap {
        width: 300px;
        padding-top: 50px;

        img {
          width: 100%;
          transform: scaleX(-1);
        }
      }
    }
  }
  .skills {
    min-height: 30vh;
    background-color: white;
  }
}
</style> 