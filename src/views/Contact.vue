<template>
  <section id="Contact">
    <div class="HeroImages-Container">
      <img class="HeroImages" :src="require(`@/assets/img/` + page.url)" v-bind:alt="page.name" />
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




</style>