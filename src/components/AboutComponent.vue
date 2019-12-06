<template>
  <div class="about-component">
    <!-- <div class="triangle"></div> -->

    <div class="about-text">
      
        <div class="logo-wrap">
          <img src="../images/wolf-logo.png" alt="wolf logo" />
        </div>
        <div class="my-story">
          <h1>My Story</h1>
          <div class="line"></div>
          <p>
            Hi im Martyn, i am a web developer and i got into coding in 2018.
            I have been using the framework Vue for the past 8 months and im really loving it,
            i recently jumped onto angular and react to switch it up.
            <br />
            <br />I've had many different jobs in the past but i feel now is the time for
            me start my journey as a real web developer.
          </p>
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
  min-height: 50vh;
  background-color: #eee;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px 0;

  .about-text {
    width:100%;
    min-height: 70%;
  }
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
      line-height: 25px;
      color: $textOnWhite;
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

@media (max-width: 600px) {
  .about-component  {
    height:100vh;
    .my-story {
    width:90%;
  }
  } 
}
</style> 