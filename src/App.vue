<template>
  <div id="app">
    <div id="nav">
      <div class="full-container">
        <p>About</p>
        <p>Skills</p>
        <p>Projects</p>
        <p>Contact</p>
      </div>
    </div>

    <router-view />
  </div>
</template>

<style lang="scss">
$primary: rgb(212, 97, 52);
$text: rgb(214, 214, 214);
$textOnWhite: rgb(148, 148, 148);

// font-family: 'Poiret One', cursive;
// font-family: 'Cinzel', serif;
body {
  margin: 0;
}
.full-container {
  width: 90%;
  margin: auto;
}

p {
  font-weight: 600;
}

:focus {
  outline: none;
}

.btn {
  padding: 15px 20px;
  border: solid $primary 2px;
  border-radius: 50px;
  background: transparent;
  color: $primary;
  text-transform: uppercase;
  letter-spacing: 1px;
  cursor: pointer;
  margin: 20px 0;
  transition: 0.3s;
}
#app {
  font-family: "Poiret One", cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 0;
  letter-spacing: 1px;

  #nav {
    padding: 10px 0;
    width: 100%;
    position: absolute;

    p {
      display: inline-block;
      padding: 10px 30px;
      margin: 10px 20px;
      cursor: pointer;
      color: $text;
    }
  }
}
</style>
