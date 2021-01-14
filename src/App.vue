<template>
  <div id="app">
    <!-- Alle billeder og alt musik er eget af Bogwife - 2021.-->
    <nav ref="navAnim">
      <div class="navLeft">
        <router-link to="/">
          <img id="LandingPageLogo" src="./assets/img/logo.png" alt="" />
        </router-link>
      </div>

      <div class="navRight">
        <ul>
          <li v-for="page in pages.slice(0, -1)" :key="page.id" :id="page.id">
            <router-link :to="`/${page.name}`"> {{ page.name }} </router-link>
          </li>
        </ul>
      </div>
    </nav>
    <!-- <img class="HeroImages" :src="`./assets/img/${page.url}`" alt="det billede!">  skal fixes -->
    <!-- <img class="HeroImages" src="./assets/img/AboutHero.png"> -->

    <router-view />
    <player />
    <footerComp />
    <!-- Alle billeder og alt musik er eget af Bogwife - 2021.-->
  </div>
</template>

<script>
import player from "./components/player.vue"
import footerComp from "./components/footer.vue"
import gsap from "gsap"
export default {
  name: "App",
  data() {
    return {
      navTimeline: null,
    }
  },
  computed: {
    //vue will look for it if there are updates?
    pages: function () {
      return this.$store.state.pages;
    },
    /*
    products() {
      return this.$store.getters.products;
    }
    */
    /*
    
    products: function () {
      return this.$store.state.products;
    }, */
    
  },
  methods: {
    navAnimation: function () {
      

      this.navTimeline = gsap.timeline({
      delay: 1.2,
      // repeat: 3
      
    });

    this.navTimeline.to(this.$refs.navAnim, {opacity: 1,  duration: 4, ease: "expo"});
    
    
   },
  },
  
  components: {
    player,
    footerComp,
  },

  mounted: function () {
    this.$store.dispatch("load"); // dollor sign means???
    /* this.imagesLoad(); */
    this.navAnimation();
  },
};
</script>


<style>
html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-family: Roboto;
  
}

html,
body {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  margin: 0;
  background:  #f5f5f5;
 
}

#app {
  box-sizing: border-box;
  margin: 0 auto;
  /* height: 100vh; */
  
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
  color: black;

   background-color: #0C0C0C;
}



li {
  list-style: none;
}

h1, h2, h3, h4, h5, p, a {
   color: #F5F5F5;
   text-decoration: none;
}

h1 {
  font-size: 50px;
  margin: 0 0 30px;
}
h2 {
  font-size: 28px;
  margin: 0 0 25px;
}

strong {
  font-size: 22px;
}

p {
  font-size: 18px;
  margin: 0 0 25px;
}

.p2 {
  font-size: 10px;
  margin: 0 0 25px;
}

.greyP {
  color: #979797;
}

.fullWidth {
    width: 100%;
}

a:hover {
  color: #D03A3B;
}

a:visited {
  border: none;
}



nav {
  background-color: rgba(0, 0, 0, 0.342);
  height: 78px;
  /* padding: 20px 0; */
  display: flex;
  flex-wrap: wrap;
  position: absolute;
  top: 0;
  width: 100vw;
  z-index: 2;
  opacity: 0;
}


nav .navLeft {
  width: 290px;
  margin: auto 0 auto 48px;
}
nav .navLeft a {

  color: white;
  cursor: pointer;

  /* border: 1px solid whitesmoke; */
}

#LandingPageLogo {
  width: 286px;
}
nav ul {
  
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  list-style: none;
}

nav ul li {
  
 width: 100px;
  margin: 10px;

}

nav .navRight {
  margin: auto 58px auto auto;
}

nav .navRight a {
  color: white;
  cursor: pointer;
  font-size: 28px;
}

nav li a:hover {
  text-decoration: underline #D03A3B;
  
  
  
}

a.router-link-exact-active.router-link-active {
  color: #D03A3B;
}

.HeroImages-Container {
  /* height: 800px; */
  height: 45vw;
  max-height: 80%;
  background-color: #0C0C0C;
}
.HeroImages {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  min-height: 800px;
  max-height: 800px;
  z-index: 1;

  background-color: rgb(31, 31, 31);
}

.main-container {
 padding: 0 14.45%;

   display: flex;
  flex-wrap: wrap;
  
}

.main-container .main-left, .main-container .main-right {
  width: 50%;
}

.product-container {
   display: flex;
  flex-wrap: wrap;
  /* background-color: DodgerBlue; */
   justify-content: space-between;
}

.store-product {
  /* background-color: #f1f1f1; */
  width: 380px;
  /* margin: 0 auto; */
  padding: 0 5px 0 0;
  
}

.product-category {
  width: 100%;
}

.buyBtn {
    border: 2px solid #D03A3B;
    border-radius: 7px;
    width: 146px;
    height: 45px;
    margin: 0 0 30px;
    background-color: #0C0C0C;
    color: #f5f5f5;
    font-size: 18px;
}

@media screen and (max-width: 1000px) { 

.main-container .main-left, .main-container .main-right {
  width: 100%;
  margin: 30px auto;
  padding-bottom: 0;
}

nav {
  display: block;
  text-align: center;
  height: 125px;

}

nav .navLeft {
  width: 100%;
  margin: 20px auto;
}

nav .navRight {
  width: 100%;
  margin: 10px auto;
}

nav .navRight ul{
  justify-content: space-around;
  padding: 0 20px;
}
#LandingPageLogo {
  width: 200px;
  
}
}

@media screen and (max-width: 700px) { 

h1 {
  font-size: 45px;
  margin: 0 0 30px;
}
h2 {
  font-size: 26px;
  margin: 0 0 25px;
}

strong {
  font-size: 20px;
}

p {
  font-size: 16px;
  margin: 0 0 25px;
}

.p2 {
  font-size: 10px;
  margin: 0 0 25px;
}

}

</style>

