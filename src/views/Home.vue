<template>
  <div id="home">
    <!-- <three-canvas /> Det er nok her der skal være et component som indeholder Intro animationen og alt det ekstra --> 
 <div  id="home-hero-container" class="HeroImages-Container" :style="{'background-image': 'url('+ require(`../assets/img/` + page.url) +')'}">
      
    </div>
    
      <div class="main-container ">
        
        <div class="main-left">
          <div class="text-wrapper">
            <h2>{{page.article1.header}}</h2>
            <p><strong>{{page.article1.text1}}</strong></p>
            <p>{{page.article1.text2}}</p>
          </div>
          
        </div>
        <div class="main-right">
          <img src="../assets/img/homeImg.png">
          
        </div>
      </div>
      <div class="album-container HeroImages-Container" :style="{'background-image': 'url('+ require(`../assets/img/` + page.url) +')'}">

          <div class="album-cover" :style="{'background-image': 'url('+ require(`../assets/img/AlbumOriginalCropped.png`) +')'}">
            <div class="album-tracks">
            <div class="album-title">
              <h2>Halls of Rebirth</h2>
              <p>Released July 15, 2020</p>
              <p></p>
            </div>

          <li class="track" v-for="track in page.tracks" :key="track.id" :id="track.id">
            <div class="track-wrapper">
              <div class="left">
                <p>{{track.id}}</p> 
                <p><font-awesome-icon :icon="[ 'far', 'play-circle' ]" class="play-circle" /></p> 
                <!-- <p><font-awesome-icon :icon="[ 'far', 'pause-circle' ]" class="play-circle" v-on:click="startMusic"  /></p> -->
                <p>{{track.name}}</p> 
              </div>
              <div class="right">
                <p>{{track.duration}}</p>
              </div>
              
            </div>
           
          </li>
          <button class="buyBtn">Buy Album</button>
          <p class="greyP">
           
               Recorded and mixed by Jacob Bredahl at 
                Dead Rat Studio in Aarhus, Denmark.
                Mastered by Brad Boatright at 
                Audiosiege Mastering Studio in Portland, Oregon.
                Released by Psychedelic Salad Records.
                &#169; all rights reserved 
            
          </p>

        </div>
          </div>
        
        

      </div>
    
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
    track: function () {
      return this.page.home.tracks;
    },
    
    
  },
};
</script>

<style >





#home #home-hero-container {

/* Placeholder for animations viduet */
/* height: 100vh; nye ændringer */ 
width: 100vw;

 /* background-image: url("../assets/img/introimg.png"); */
background-repeat: no-repeat;
background-size: 100vw auto;

}

#home .HeroImages-Container {
  height: 60vw;
  max-height: 100vh;
}

.main-left {
    
    margin: 0 auto;
    
}

.main-left .text-wrapper {
    width: 82%;
  
}

.main-right, .main-left {
    margin: 150px auto;
    
}

.main-right img{
    width: 100%;
    
}

.album-container {
  padding: 0 14.45%;
  height: 100vh;
  width: 100vw;

 /* background-image: url("../assets/img/introimg.png"); */
background-repeat: no-repeat;
background-size: 100vw 100%;
  
}

.album-container .album-cover {
  width: 60vw;
  height: 90%;
	
	position: relative;
  top: 5%;
  left: 5%;
  background-repeat: no-repeat;
  background-size: 90%;
}

.album-tracks {
  width: 391px;
  height: 593px;
  background-color: #0C0C0C;
  opacity: 95%;

  position: absolute;
  top: 0;
  left: -130px;
}

.track-wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 330px;
  margin: 0 auto;
}

.track-wrapper .left{
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  width: 70%;
}

.track-wrapper .left p{
  margin-right: 15px;
  justify-self: center;
}
.track-wrapper .right{
  /* might not need this*/ 
}

.play-circle {
  
  font-size: 30px
}


</style>