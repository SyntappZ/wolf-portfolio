<template>
  <div class="projects">
    <div class="top-breaker"></div>
    <div class="triangle"></div>
    <div class="project-area">
      <div class="project-wrap" >
      <div class="project" v-for="(project, i) in this.projects" :key="i">
        <h3>{{ project.title }}</h3>
          
      </div>
      </div>
    </div>
  </div>
</template>

<script>

const createProject = (title, tech, link, github, desc, img) => {
  return {
    title: title,
    tech: tech,
    link: link,
    github: github,
    description: desc,
    image: img
  }
}
export default {
  components: {

  },
  data() {
    return {
        projects: [
          createProject(
            'image recipes', 
            ['react', 'firebase', 'google vision', 'edamam api'], 
            'https://image-recipes.netlify.com', 
            'https://github.com/SyntappZ/image-recipe-search',
            `I made image recipes just as a quick project to test out the google vision api i 
            plan to make an app using vision in the future. it was also my first time using react 
            and i really like how it works i will defo be making more projects with react in the future.`,
            ''
            ),
            createProject(
            'regex-cheatsheet', 
            ['ionic', 'angular', 'cordova'], 
            'https://play.google.com/store/apps/details?id=io.syntappz.regex', 
            'https://github.com/SyntappZ/regex-cheatsheet',
            `This app has full documents on javaScript regular expressions and most will apply to other languages too.
              It also has a regex tester which can test with match which will highlight the matched results, 
              or can replace words with replace.`
            ),
            createProject(
            'memester', 
            ['vue', 'framework7', 'cordova', 'imgur api'], 
            'https://play.google.com/store/apps/details?id=syntappz.memester.fm7', 
            'https://github.com/SyntappZ/memester',
            `memester is a meme search and share app for android, this has better functionality then the meme-apk with lazyLoad images with
             masonary layout and has related tags images too and pressing the tag will load more images of that tag name 
             and save images to favorites.`
            ),
            createProject(
            'the vault', 
            ['vue','vuetify','firebase'], 
            'https://the-vault.ml', 
            'https://github.com/SyntappZ/the-vault',
            `welcome to the vault a password manager made with vue and vuetify it can store passwords or notes, you can add, 
            delete, edit and favorite passwords and notes, the password manager has a strength indicator and a generator so you
             can always have a stong password stored you can filter between strengths or favorites, the notes has a word counter 
             and a favorites filter too.`
            ),
            createProject(
            'awesome recipes', 
            ['vanilla javascript', 'sass', 'edamam api'], 
            'https://awesome-recipes.netlify.com', 
            'https://github.com/SyntappZ/Awesome-Recipes',
            `Making this project turned out to be a failure due to api restrictions so i had to remove all functionality 
            and just have the search function, i got some well needed design practice in making this app as i still feel like
            my design skills are lacking. it was also fun using just vanilla javascript to make a project after using frameworks
             for most of them.`
            ),
            createProject(
            'world of information', 
            ['vue', 'materialize css', 'wiki api'], 
            'https://world-of-information.netlify.com', 
            'https://github.com/SyntappZ/world-of-information',
            `world of information is a wiki snippet search application. i learnt a good bit about using apis and axios making this project,
            `
            ),
            createProject(
            'angels and demons', 
            ['vue', 'wiki api'], 
            'https://angels-and-demons.netlify.com', 
            'https://github.com/SyntappZ/angels-and-demons',
            `I made this site because im a big fan of the supernatural series and thought it would be good to get 
            some information on what the angel and demon characters are actually based on.`
            ),
            createProject(
            'fusion ninja', 
            ['react', 'firebase', 'google vision', 'edamam api'], 
            'https://play.google.com/store/apps/details?id=io.syntappz.fusion', 
            'https://github.com/SyntappZ/trials-fusion-ninja-app',
            `i made this app for a game called trials fusion, it allows people to search for other peoples ninja tracks
             so they can play them, there is already a website that does this called https://fusion.ninja-central.com but its not very
              responsive on mobile and makes it hard to use, all information for the app comes from the website i used a web scrapper with 
              node.js to get the track details and converted into an object this app was made using vue, framework7 and cordova it was fun 
              making this app as i am a fan of the game it helped me understand how to use vue, framework7 and cordova together
               and i also learned about virtual lists making this app.`,
               ''
            ),
        ]
    }
  },
  methods: {

  }
};
</script>

<style lang="scss" scoped>

$primary: rgb(212, 97, 52);
$text: rgb(214, 214, 214);
$blue: rgb(71, 97, 114);

.projects {
  min-height: 100vh;
  width:100%;
  
  .top-breaker {
    height: 400px;
    background-color: #eee;
    position: relative;
  }
  .triangle {
    position: relative;
    top: 0;
    left: 0;
    right:0;
    width: 0;
    height: 0;
    margin:auto;
    border-style: solid;
    border-width:100px 49vw 0 49vw;
    border-color: #eee transparent transparent transparent;
    
  }
  .project-area {
    min-height:100vh;
  }

  .project-wrap {
    width:1500px;
    margin:auto;
    display:flex;
    justify-content: center;
    flex-wrap:wrap;
    margin-top:250px;
  }

  .project {
    width:350px;
    height:250px;
    background:$blue;
    color:white;
    text-align:center;
    margin:10px;
    border-radius:30px;
    
  }

  @media (max-width: 1500px) {
    .project-wrap {
      width:100%;
    }
    .project {
      
    }
  }
}
</style>
