<template>
  <div id="home">
    <!-- <three-canvas /> Det er nok her der skal være et component som indeholder Intro animationen og alt det ekstra --> 
 <div  id="home-hero-container" class="HeroImages-Container" :style="{'background-image': 'url('+ require(`../assets/img/` + page.url) +')'}">
      
    </div>
    <section id="home-section">
      <div class="home-container ">

                
              
              <h2> {{page.article1.header}} </h2>
              <p> {{page.article1.text1}} </p>
              <p> {{page.article1.text2}} </p>

            </div>
    </section>
  </div>
  <!-- -->
</template>

<script>
// import threeCanvas from "../components/threeCanvas.vue";  HUSK AT IMPORTE COMPONENT HER

export default {
  name: "Home",
 
  // components: { threeCanvas },  HUSK AT IMPORTE COMPONENT HER
  computed: {
    page: function () {
      const pageObject = this.$store.getters.getPageByName(this.$route.name);
      if (!pageObject) {
        this.$router.replace("/page-not-found");
      }
      return pageObject;
    },
    
    
  },
};
</script>

<style>





#home #home-hero-container {

/* Placeholder for animations viduet */
/* height: 100vh; nye ændringer */ 
width: 100vw;
background-color: #0C0C0C;
 /* background-image: url("../assets/img/introimg.png"); */
background-repeat: no-repeat;
background-size: 100vw auto;

}

#home #home-section .home-container {
  width: 800px;
  margin: 0 auto;
}
</style>