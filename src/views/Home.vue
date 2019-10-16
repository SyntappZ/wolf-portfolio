<template>
  <div class="home">
   <div class="background">
     <div class="welcome-text">
       <h1>welcome to my <span class="highlight"> portfolio</span></h1>
       
       <p>Hi im Martyn, i am a front end web developer who also</p>
       <p>builds android apps using web technologies.</p>
       <button class="btn">Learn more</button>
     </div>
   </div>
   <AboutComponent />
   <SkillsComponent />
  </div>
</template>

<script>
import AboutComponent from '../components/About';
import SkillsComponent from '../components/Skills';



export default {
  name: 'home',
  components: {
   AboutComponent,
   SkillsComponent
  }
}
</script>

<style scoped lang="scss">
$primary: rgb(212, 97, 52);

  .background {
    width:100%;
    height:100vh;
    background: url('../images/wolf-background.jpg');
    background-size: cover;
    background-position: center center;
    display:flex;
    justify-content: start;
    align-items: center;

    .welcome-text {
      margin-left:50px;
      color:white;
      h1 {
        font-size:45px;
         text-transform: capitalize;

        .highlight {
          color: $primary;
          font-weight: 700;
        }
      }
    }
  }
</style> 
