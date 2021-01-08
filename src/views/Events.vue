<template>
  <section id="events">
    <!-- <h3>{{ fav }}</h3> -->
    <div id="events-hero-container" class="HeroImages-Container" :style="{'background-image': 'url('+ require(`@/assets/img/` + page.url) +')'}">
      
    </div>
    <div class="main-container">
      <h1>{{ page.name }}</h1>
      <div id="events">
        <!-- One Single Event -->
          <div class="event-wrapper">
          <div class="event-left">
            <h2>
              {{ page.article1.country }}, {{ page.article1.city }}
            </h2>
              <p>{{ page.article1.venue }}</p>
          </div>
          <div class="event-middle">
            <h2>{{ page.article1.date }}</h2>
          </div>
          <div class="event-right" >
            <button class="ticketBtn" >BUY TICKETS</button>
          </div>
        </div>
        <!-- One Single Event -->
        <div class="event-wrapper">
          <div class="event-left">
            <h2>
              {{ page.article2.country }}, {{ page.article2.city }}
            </h2>
              <p>{{ page.article2.venue }}</p>
          </div>
          <div class="event-middle">
            <h2>{{ page.article2.date }}</h2>
          </div>
          <div class="event-right" >
            <button class="ticketBtn" >BUY TICKETS</button>
          </div>
        </div>
        <!-- One Single Event -->
        <div class="event-wrapper">
          <div class="event-left">
            <h2>
              {{ page.article3.country }}, {{ page.article3.city }}
            </h2>
              <p>{{ page.article3.venue }}</p>
          </div>
          <div class="event-middle">
            <h2>{{ page.article3.date }}</h2>
          </div>
          <div class="event-right" >
            <button class="ticketBtn" >BUY TICKETS</button>
          </div>
        </div>
        <!-- One Single Event -->
        <div class="event-wrapper">
          <div class="event-left">
            <h2>
              {{ page.article4.country }}, {{ page.article4.city }}
            </h2>
              <p>{{ page.article4.venue }}</p>
          </div>
          <div class="event-middle">
            <h2>{{ page.article4.date }}</h2>
          </div>
          <div class="event-right" >
            <button class="ticketBtn" >BUY TICKETS</button>
          </div>
        </div>
        <!-- One Single Event -->
        <div class="event-wrapper">
          <div class="event-left">
            <h2>
              {{ page.article5.country }}, {{ page.article5.city }}
            </h2>
              <p>{{ page.article5.venue }}</p>
          </div>
          <div class="event-middle">
            <h2>{{ page.article5.date }}</h2>
          </div>
          <div class="event-right" >
            <button class="ticketBtn" >BUY TICKETS</button>
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