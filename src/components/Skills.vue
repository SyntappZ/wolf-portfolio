<template>
  <div class="skills-component">
<div class="container">
    <div class="image-wrap">
        <img src="#" alt="artic wolf">
    </div>
    <div class="skills-wrap">

    </div>
</div>
  </div>
</template>

<script>
export default {
  name: "skills",
  components: {}
};
</script>

<style scoped lang="scss">
$primary: rgb(212, 97, 52);

 .skills-component {
     min-height: 100vh;

     .container {
         display: flex;
         width:100%;

         .image-wrap {
             width:50%;

             img {
                 width:100%;
                 transform: scaleX(-1);
                 opacity: .6;
             }
         }
     }
 }

</style> 