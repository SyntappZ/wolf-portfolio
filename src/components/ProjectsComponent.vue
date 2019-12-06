<template>
  <div class="projects-component">
    <transition name="fade">
      <modal v-if="modalOpen" @closeModal="modalOpen = false" :selectedProject="selctedProject" />
    </transition>

    <div class="top-breaker">
      <div class="logo-container">
        <div class="logo-wrap">
          <img src="../images/wolf-logo.png" alt="wolf logo" />
        </div>
        <p>Check out my</p>
        <h1>Projects</h1>

        <div class="line"></div>

        <i class="fas fa-sort-down"></i>
      </div>
    </div>
    <div class="triangle"></div>
    <div class="project-area">
      <div class="project-wrap">
        <div class="project" v-for="(project, i) in this.projects" :key="i">
          <div class="img"></div>
          <div class="cover">
            <h2>{{ project.title }}</h2>

            <i :class="project.icon"></i>
            <div class="tech">
              <h5 v-for="(tech, i) in project.tech" :key="i">{{tech}}</h5>
            </div>
          </div>
          <div class="see-more">
            <div class="see-more-line"></div>
            <i :class="project.icon"></i>
            <h4>{{ project.title }}</h4>
            <button class="btn" @click="openModal(project)">see more</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import modal from "./ProjectModal";
const createProject = (
  title,
  tech,
  link,
  github,
  desc,
  icon,
  img,
  type,
  bold
) => {
  return {
    title: title,
    tech: tech,
    pageLink: link,
    github: github,
    description: desc,
    icon: icon,
    image: img,
    isWebsite: type,
    bold: bold
  };
};
export default {
  components: {
    modal
  },
  data() {
    return {
      hoverProject: false,
      modalOpen: false,
      selectedProject: null,
      projects: [
        createProject(
          "image recipes",
          ["react", "firebase", "google vision", "edamam api"],
          "https://image-recipes.netlify.com",
          "https://github.com/SyntappZ/image-recipe-search",
          `I made image recipes just as a quick project to test out the google vision api i 
            plan to make an app using vision in the future. it was also my first time using react 
            and i really like how it works i will defo be making more projects with react in the future.`,
          "fab fa-react",
          "./imageRecipe/main.jpg",
          true
        ),
        createProject(
          "regex-js",
          ["ionic", "angular", "cordova"],
          "https://play.google.com/store/apps/details?id=io.syntappz.regex",
          "https://github.com/SyntappZ/regex-cheatsheet",
          `I made this app with ionic/angular and this app has full documents on javaScript regular expressions and most will apply to other languages too.
              It also has a regex tester which can test with match which will highlight the matched results, 
              or can replace words with replace.`,
          "fab fa-angular",
          ["./regexjs/list.jpg", "./regexjs/text.jpg", "./regexjs/tester.jpg"],
          false
        ),
        createProject(
          "memester",
          ["vue", "framework 7", "cordova", "imgur api"],
          "https://play.google.com/store/apps/details?id=syntappz.memester.fm7",
          "https://github.com/SyntappZ/memester",
          `I made Memester with framwork 7 and vue it is a meme search and share app for android with lazyLoad images with
             masonary layout and has related tags images too and pressing the tag will load more images of that tag name 
             and you can also save images to your favorites.`,
          "fab fa-vuejs",
          [
            "./memester/home.jpg",
            "./memester/image.jpg",
            "./memester/tags.jpg"
          ],
          false
        ),
        createProject(
          "the vault",
          ["vue", "vuetify", "firebase"],
          "https://the-vault.ml",
          "https://github.com/SyntappZ/the-vault",
          `The vault is a password manager made with vue and vuetify, it can store passwords or notes and you can add, 
            delete, edit both, the password manager has a strength indicator and a generator so you
             can always have a stong password stored and add them to favorites and even filter between strengths or favorites to find your passwords 
             easier. for testing use ---->`,
          "fab fa-vuejs",
          "./vault/main.jpg",
          true,
          "email: test@test.com - password: Test1234"
        ),
        createProject(
          "awesome recipes",
          ["vanilla javascript", "sass", "edamam api"],
          "https://awesome-recipes.netlify.com",
          "https://github.com/SyntappZ/Awesome-Recipes",
          `Making this project turned out to be a failure due to api restrictions so i had to remove all functionality that i had planned
            and just have the search function, i got some well needed design practice in making this app tho which is good as i still feel like
            my design skills are lacking. it was also fun using just vanilla javascript to make a project after using frameworks
             for most of them.`,
          "fab fa-sass",
          "./awesome/main.jpg",
          true
        ),
        createProject(
          "world of information",
          ["vue", "materialize css", "wiki api"],
          "https://world-of-information.netlify.com",
          "https://github.com/SyntappZ/world-of-information",
          `World of information is a wiki snippet search application. i learnt a good bit about using apis and axios making this project.
          this believe was my first project using ajax and getting data from an api.
            `,
          "fab fa-vuejs",
          "./woi/main.jpg",
          true
        ),
        createProject(
          "angels and demons",
          ["vue", "wiki api"],
          "https://angels-and-demons.netlify.com",
          "https://github.com/SyntappZ/angels-and-demons",
          `I made this site because im a fan of the supernatural series and thought it would be good to get 
            some information on what the angel and demon characters are actually based on.`,
          "fab fa-vuejs",
          "./a-n-d/main.jpg",
          true
        ),
        createProject(
          "fusion ninja",
          ["vue", "framework 7", "cordova"],
          "https://play.google.com/store/apps/details?id=io.syntappz.fusion",
          "https://github.com/SyntappZ/trials-fusion-ninja-app",
          `I made this using vue, framework7 and cordova and this is for a game called trials fusion, it allows people to search for other peoples ninja tracks that they have made
             so they can play them, i used a web scraper with node.js to get the track details. i also learned about virtual lists making this app.`,
          "fab fa-vuejs",
          ["./fusion/front.jpg", "./fusion/filter.jpg", "./fusion/info.jpg"],
          false
        )
      ]
    };
  },
  methods: {
    openModal(projectInfo) {
      this.selctedProject = projectInfo;
      this.modalOpen = true;
    }
  }
};
</script>

<style lang="scss" scoped>
$primary: rgb(212, 97, 52);
$text: rgb(214, 214, 214);
$blue: rgb(71, 97, 114);
$textOnWhite: rgb(148, 148, 148);

.projects-component {
  min-height: 100vh;
  width: 100%;
  position: relative;

  .top-breaker {
    height: 400px;
    background-color: #eee;
    position: relative;
  }

  .logo-container {
    width: 400px;
    height: 300px;
    position: absolute;
    text-align: center;
    margin: auto;
    left: 0;
    right: 0;
    top: 80px;

    h1 {
      color: $primary;
    }
    p {
      letter-spacing: 2px;
      text-transform: capitalize;
      color: $textOnWhite;
    }
    i {
      color: $primary;

      font-size: 40px;
    }
  }

  .logo-wrap {
    width: 120px;
    margin: 0 auto;

    img {
      width: 100%;
      opacity: 0.6;
    }
  }

  .line {
    width: 70px;
    height: 4px;
    margin: auto;
    border-radius: 50px;
    background: $primary;
  }
  .triangle {
    position: relative;
    top: 0;
    left: 0;
    right: 0;
    width: 0;
    height: 0;
    margin: auto;
    border-style: solid;
    border-width: 100px 49vw 0 49vw;
    border-color: #eee transparent transparent transparent;
  }

  .project-wrap {
    width: 1500px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin: 150px auto;
  }

  .project {
    width: 350px;
    height: 250px;
    background: rgb(0, 0, 0);
    color: white;
    text-align: center;
    margin: 10px;
    position: relative;
    border-radius: 30px;

    .img {
      position: absolute;
      width: 100%;
      border-radius: 30px;
      height: 100%;
      background: url(../images/wavey.png);
      background-size: cover;
      filter: grayscale(100%);
      transition: 0.5s ease;
      opacity: 1;
    }
  }

  .cover {
    position: absolute;
    width: 100%;
    border-radius: 30px;
    height: 100%;
    background: rgba(0, 0, 0, 0.829);
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    i {
      font-size: 60px;
    }

    h2 {
      color: $primary;
      text-transform: capitalize;
      letter-spacing: 1px;
    }
  }
  .tech {
    display: flex;
    width: 100%;
    justify-content: space-around;
  }

  .see-more {
    position: absolute;
    width: 100%;
    border-radius: 30px;
    height: 100%;
    background: rgb(0, 0, 0);

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    opacity: 0;
    transition: 0.3s ease;
    &:hover {
      opacity: 1;
    }
    i {
      position: absolute;
      top: 20px;
      left: 0;
      right: 0;
      margin: auto;
      font-size: 30px;
    }
    h4 {
      position: absolute;
      bottom: 50px;
      left: 0;
      right: 0;
      margin: auto;
      letter-spacing: 2px;
      text-transform: capitalize;
    }
  }
  .see-more-line {
    position: absolute;
    height: 130px;
    width: 100px;
    z-index: 0;
    left: 0;
    right: 0;
    margin: auto;
    border-top: solid white 2px;
  }
  .btn {
    border-radius: 0;
    cursor: pointer;
    border-left: none;
    border-right: none;
    position: relative;
    z-index: 1;
    width: 200px;
    margin: auto;
    background: #000;
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s;
  }
  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }
  @media (max-width: 1500px) {
    
      .project-wrap {
        width: 100%;
      }
    
  }
  @media (max-width: 600px) {
    .project-wrap {
        width: 95%;
      }
      .logo-container {
        width: 100%;
      }
    
  }
}
</style>
