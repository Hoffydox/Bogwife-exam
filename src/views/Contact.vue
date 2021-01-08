<template>
  <section id="contact">
    <div id="contact-hero-container" class="HeroImages-Container" :style="{'background-image': 'url('+ require(`@/assets/img/` + page.url) +')'}">
      
    </div>
    <!-- <h3>{{ fav }}</h3> -->
   <h1>{{ page.name }}</h1>
        <div class="Contact-container ">

              test

            </div>
   
  </section>
</template>

<script>
export default {
  name: "Contact",
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

<style scoped>

#contact #contact-hero-container {

/* Placeholder for animations viduet */

width: 100vw;
background-color: #0C0C0C;
 /* background-image: url("../assets/img/introimg.png"); */
background-repeat: no-repeat;
background-size: 100vw auto;

}

</style>