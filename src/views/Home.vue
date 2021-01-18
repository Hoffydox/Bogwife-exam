<template>
  <div id="home">
    <!-- <three-canvas /> Det er nok her der skal være et component som indeholder Intro animationen og alt det ekstra --> 
 <div  id="home-hero-container" class="HeroImages-Container" :style="{'background-image': 'url('+ require(`../assets/img/` + page.url) +')'}">
      
    </div>
    <div class="redOneBox" ref="redOne"> </div>
      <div class="main-container ">
        
        <div class="main-left">
          <div class="text-wrapper">
            <h2>{{page.article1.header}}</h2>
            <p><strong>{{page.article1.text1}}</strong></p>
            <p>{{page.article1.text2}}</p>
            
            <router-link to="/About"> <button class="readBtn buyBtn">Read More</button> </router-link>
          </div>
          
        </div>
        <div class="main-right">
          <img src="../assets/img/homeimg.jpg">
          
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
                <p><font-awesome-icon :icon="[ 'far', 'play-circle' ]" class="play-circle" @click="playSelectedSong(track.id)" /></p> 
                <!-- <p><font-awesome-icon :icon="[ 'far', 'pause-circle' ]" class="play-circle" v-on:click="startMusic"  /></p> -->
                <p>{{track.name}}</p> 
              </div>
              <div class="right">
                <p>{{track.duration}}</p>
              </div>
              
            </div>
           
          </li>
          <div class="album-buttom">
             <router-link to="/Store"> <button class="buyBtn">Buy Album</button> </router-link>

          <p class="greyAlbum">
           
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
    
  </div>
  <!-- -->
</template>

<script>
import gsap from "gsap";

export default {
  name: "Home",
  data() {
    return {

      timeline: null,
      sway: null,
      
      

    }
  },
 methods: {
   playSelectedSong: function (songId) {
// call app.vue
songId = songId -1;

console.log("Home here with songId: " + songId);
this.$parent.callPlayerSelectedSong(songId);

    
// this.$emit('callPlayerSelectedSong');
   },
   
   IntroHome: function () {

      this.timeline = gsap.timeline({
      delay: 0.4,
      // repeat: 3
      
    });

    this.timeline.to(this.$refs.redOne, {opacity: 1, scale: 1.01,  duration: 4, ease: "expo"});
    
    this.repeatSway();
   },
   repeatSway: function () {
     this.sway = gsap.timeline({
      delay: 3,
      repeat: -1,
      
      
    });

    this.sway.to(this.$refs.redOne, {x: 1, duration: 4, ease: "expo.out"});
    this.sway.to(this.$refs.redOne, {x: 1, opacity: 0.85, duration: 3, ease: "expo"});
    this.sway.to(this.$refs.redOne, {x: 0,  duration: 4, ease: "expo.out"});
    this.sway.to(this.$refs.redOne, {x: 0, opacity: 1, duration: 3, ease: "expo"});
   }
 },
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
  mounted() {
    this.IntroHome();

  }
  
};
</script>

<style >


.redOneBox {
  /* height: 100%;
  width: 100%;
  */

   height: 70%;
  width: 60%;

  background-image: url("../assets/img/Layer0.png");
  background-repeat: no-repeat;
background-size: 36vw auto;
position: absolute;
top: 21vw;
left: 29vw;
opacity: 0;
}


#home #home-hero-container {

/* Placeholder for animations viduet */
/* height: 100vh; nye ændringer 
width: 100vw;*/ 

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
  /* width: 100vw; */

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

.buyBtn:hover {
  cursor: pointer;
}

.album-container .album-title, .buyBtn, .greyAlbum {
  margin-left: 55px;
}

.readBtn {
  margin-left: 0;
  
}

.greyAlbum {
  color: #979797;
  font-size: 12px;
  max-width: 70%;
}

.album-tracks {
  width: 391px;
  height: 593px;
  background-color: #0c0c0cec;
  

  position: absolute;
  top: 15vh;
  left: -10vw;

/*
  top: 0;
  left: -130px;
  */
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


.play-circle {
  margin-top: -4px;
  font-size: 30px
}

.play-circle:hover {
  color: #D03A3B;
  cursor: pointer;
}

@media screen and (max-width: 1350px) {
 
.album-container {
  padding: 0;
  height: 150vh;
  /* width: 100vw; */
background-image: none;

background-repeat: no-repeat;
background-size: 100 100;
  
}

 .album-container .album-cover {
  
	position: relative;
  height: auto;
  top: 2.5%;
  left: 0;
	width: 100%;
  
  background-size: 0%;
  
}
 
 .album-tracks {
  width: 391px;
  height: 593px;
  background-color: #0c0c0c;
 

  position: relative;
  top: 0;
  left: 0;
  margin: 0 auto;

/*
  top: 0;
  left: -130px;
  */
}
}

@media screen and (max-width: 1000px) { 

  .album-container .album-cover {
  top: 0;
  height: 533px
  }

.album-tracks {
  width: 100%;
  height: 693px;
}


}

@media screen and (max-width: 580px) { 

.album-container {
  display: none;
}
/*
#home #home-hero-container {
  background-size: 0;
}
.redOneBox {
  display: none;
}
*/
p {
  margin: 0px 0 20px;
}

.album-buttom {
  display: flex;
  flex-wrap: wrap;
}

 .greyAlbum {
  margin: 0 10px ;
  width: 45%;
}


.album-tracks {
  width: 100%;
  height: 533px;
}


}

@media screen and (max-width: 530px) {
  .greyAlbum {
    font-size: 8px;
  }



 .greyAlbum {
  width: 40%;
}
  p {
    margin-bottom: 10px;
  }

  .track-wrapper .left {
    
    width: 50%;
}

.track-wrapper {
    justify-content: space-around;
}
}

</style>