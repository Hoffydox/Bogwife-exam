<template>
    <section id="heroContainers">
        <heroImages ><img class="HeroImages" :src="userProfilePic" alt="det billede!"></heroImages>
    </section>
</template>

<script>
import heroImages from './heroImages'

export default {
    name: 'heroContainers',
     data() {
    return {
     userProfilePic: null
    };
  },
    components:{
        heroImages
    },
    methods: {
    getImage () {
      this.userProfilePic = "./assets/img/" + this.page.url
    }
  }
}
</script>

<style scoped>
.heroImages {
    max-height: 800px;
}
</style>