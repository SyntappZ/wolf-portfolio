<template>
  <div class="skill-container">
    <div class="layout">
      <div class="skill-wrap" v-for="skill in skills" :key="skill.id">
        <div class="icon-wrap">
          <i :class="skill.icon"></i>
        </div>
        <div class="line"></div>
        <div class="text">
          <h2>{{ skill.title }}</h2>
          <p>{{ skill.text }}</p>
        </div>
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
          icon: "fas fa-mobile-alt",
          title: "responsive",
          text:
            "My projects are all responsive and will adapt to Web, Tablet and Mobile sizes.",
          id: "1",
          side: "left"
        },
        {
          icon: "fab fa-vuejs",
          title: "frameworks",
          text:
            "I have been building with Vue for a while and now\
           i have moved onto Angular and react",
          id: "2",
          side: "right"
        },
        {
          icon: "fab fa-android",
          title: "Hybrid Apps",
          text:
            "I also build apps using cordova,\
           i have made apps using technologies such as Vue, Framework7, Ionic and Angular",
          id: "3",
          side: "left"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
$primary: #d46134;
$blue: rgb(71, 97, 114);
$textOnWhite: rgb(148, 148, 148);

.skill-container {
  width: 60%;
  margin: auto;
  min-height: 100vh;

  .layout {
    min-height: 100vh;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    p {
      margin: 0;
      color: $textOnWhite;
    }
  }
  .skill-wrap {
    width: 100%;
    min-height: 20vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    &:nth-child(2) {
      flex-direction: row-reverse;
    }
  }

  .line {
    width: 10%;
    height: 2px;
    border-radius: 50px;
    background: #eee;
  }
  .icon-wrap {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: rgb(219, 219, 219);
    color: rgb(98, 98, 98);
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 50px;
  }

  .text {
    width: 300px;
    height: 20vh;
    h2 {
      color: $primary;
      text-transform: capitalize;
    }
  }
}

@media (max-width: 800px) {
  .skill-container {
    width: 90%;

    .skill-wrap {
      flex-direction: column;
      height: 370px;
      margin: 80px auto;

      &:nth-child(2) {
        flex-direction: column;
      }
    }

    .text {
     
      text-align: center;
    }
  }
}

@media (max-width: 600px) {
   .skill-container {
      .skill-wrap {
        height:280px;
      }
   }
   .text {
      width:35%;
     
    }
}
</style>