<template>
  <section id="events">
    <!-- <h3>{{ fav }}</h3> -->
    <div id="events-hero-container" class="HeroImages-Container" :style="{'background-image': 'url('+ require(`@/assets/img/` + page.url) +')'}">
      
    </div>
    <div class="main-container">
      <h1>{{ page.name }}</h1>
      <div id="events" >
        <!-- One Single Event -->
          <div class="event-wrapper" v-for="event in page.events" :key="event.id" :id="event.id">
          <div class="event-left">
            <h2>
              {{ event.country }}, {{ event.city }}
            </h2>
              <p>{{ event.venue }}</p>
          </div>
          <div class="event-middle">
            <h2>{{ event.date }}</h2>
          </div>
          <div class="event-right" >
            <button class="ticketBtn" :id="`buy` + event.id" >BUY TICKETS</button>
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

#events {
  margin-bottom: 150px;
  width: 100%;
}

#events #events-hero-container {

/* Placeholder for animations viduet */

width: 100vw;
background-color: #0C0C0C;
 /* background-image: url("../assets/img/introimg.png"); */
background-repeat: no-repeat;
background-size: 100vw auto;

}

.event-wrapper {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-between;
  background-color: #0c0c0c;
  margin-bottom: 5px;
}

.event-left, .event-middle{
  margin-right: 10px;
  
}

.event-middle {
  min-width: 150px;
  text-align: right;
}

.event-left h2 {
margin-bottom: 5px;
min-width: 250px;
max-width: 250px;
}



  .ticketBtn {
    border: 2px solid #D03A3B;
    border-radius: 7px;
    width: 150px;
    height: 45px;
    margin: 0 0 30px;
    background-color: #0C0C0C;
    color: #f5f5f5;
    font-size: 18px;
}

@media screen and (max-width: 590px) {
  .event-middle {
  min-width: 150px;
  text-align: left;
}
}

</style>