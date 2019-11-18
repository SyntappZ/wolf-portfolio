<template>
  <div class="projects">
    <div class="top-breaker">
        <div class="triangle"></div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
$primary: rgb(212, 97, 52);
$text: rgb(214, 214, 214);
$blue: rgb(71, 97, 114);

.projects {
  min-height: 100vh;

  .top-breaker {
    height: 400px;
    background-color: #eee;
    position: relative;
  }
  .triangle {
    position: absolute;
    bottom: 0;
    left: 0;
    right:0;
    width: 0;
    height: 0;
    margin:auto;
    border-style: solid;
    border-width: 0 100px 50px 100px;
    border-color: transparent transparent white transparent;
    
  }
}
</style>
