<template>
  <section id="Events">
    <!-- <h3>{{ fav }}</h3> -->
    <div class="HeroImages-Container">
      <img class="HeroImages" :src="require(`@/assets/img/` + page.url)" v-bind:alt="page.name" />
    </div>
    <div class="main-container">
      <h1>{{ page.name }}</h1>
      <div id="events-container"> 
        <div class="event-wrapper">
          <div class="event-left">
            <p>Aalborg, Denmark <br> Studenterhuset</p>
          </div>
          <div class="event-middle">
            <p>15/11/2020</p>
          </div>
          <div class="event-right" >
            <button>BUY TICKETS</button>
          </div>
        </div>


      </div>
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

#events-container {
   display: flex;
  flex-wrap: wrap;
  width: 100%;
}

.event-wrapper {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-between;
}

.event-left, .event-middle, .event-right {
 
  height: 65px;
  
}

.event-left {
  background-color: blueviolet;

 
}
.event-middle {
  background-color: cyan;
  
  }
.event-right {
  background-color: yellow;
  
  }

</style>