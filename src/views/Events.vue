<template>
  <section id="Events">
    <!-- <h3>{{ fav }}</h3> -->
    <div class="HeroImages-Container">
      <img class="HeroImages" :src="require(`@/assets/img/` + page.url)" v-bind:alt="page.name" />
    </div>
    <h1>{{ page.name }}</h1>
    <div class="Events-container">
      <p>Content</p>
    </div>
  </section>
</template>

<script>
export default {
  name: "Events",
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