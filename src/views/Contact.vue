<template>
  <section id="contact">
    <div
      id="contact-hero-container"
      class="HeroImages-Container"
      :style="{
        'background-image': 'url(' + require(`@/assets/img/` + page.url) + ')',
      }"
    ></div>
    <!-- <h3>{{ fav }}</h3> -->
    <div class="main-container">
      <h1>{{ page.name }}</h1>
      <div class="contact-wrapper">
        <div class="left">
          <form action="" id="contactForm">
            
            <input type="text" id="contactName" class="contact-input-styles" name="name" placeholder="Name...">
            <input type="text" id="contactPhone" class="contact-input-styles" name="phone" placeholder="Phone">
            <input type="text" id="contactEmail" class="contact-input-styles" name="email" placeholder="E-mail">
            <input type="text" id="contactMessage" class="contact-input-styles" name="message" placeholder="Your Message Here...">
            <input type="submit" class="submitBtn" value="Submit"> <p>Your Message Has Been Sent! <br>
                                                    We Will Get Back To You Soon. </p>
            
          </form>

        </div>
        <div class="right">
          <div class="infoContainer">
            <h2>BOOK BUSINESS</h2>
            <p>SEND E-MAIL TO MANAGER:<br>MANAGER@BOGWIFE.COM</p>
            <p>SEND E-MAIL TO PRESS:<br>PRESS@BOGWIFE.COM</p>
            <p>SEND E-MAIL TO BOOKING:<br>BOOK@BOGWIFE.COM</p>
            <h2>Connect with Bogwife</h2>
            <div class="soMeIcons">
              <a href="https://www.facebook.com/Bogwife/" target="_blank" alt="Bogwife Facebook page"><font-awesome-icon :icon="[ 'fab', 'facebook' ]" class="soMeIcon" /></a>
                    <a href="https://www.instagram.com/bogwifeband/" target="_blank" alt="Bogwife Instagram page">
                        <font-awesome-icon :icon="[ 'fab', 'instagram' ]" class="soMeIcon" />
                        
                    </a>
                    <a href="https://www.youtube.com/channel/UCSy4HT0xHmMRRUL0339HJgA" target="_blank" alt="Bogwife Youtube Channel">
                        <font-awesome-icon :icon="[ 'fab', 'youtube' ]" class="soMeIcon" />
                        
                    </a>
                    <a href="https://open.spotify.com/artist/28NHn1GKLZn3IryyzSDDJl?si=39lS3Ib-TQ6QB6WrMckXQA" target="_blank" alt="Bogwife Spotify page">
                        <font-awesome-icon :icon="[ 'fab', 'spotify' ]" class="soMeIcon" />
                        
                    </a>
            </div>
          </div>
        </div>
      </div>
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
  background-color: #0c0c0c;
  /* background-image: url("../assets/img/introimg.png"); */
  background-repeat: no-repeat;
  background-size: 100vw auto;
}
.contact-wrapper {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.main-container .contact-wrapper .left,
.main-container .contact-wrapper .right {
width: 483px;

 
}

.main-container .contact-wrapper .left { 
  margin: 0 30px 0 0;

}

#contactForm {
  width: 483px;
}

.contact-input-styles  {
    border: 2px solid #f5f5f5;
    border-radius: 7px;
    width: 483px;
    height: 45px;
    margin: 0 0 30px;
    background-color: #0C0C0C;
    color: #f5f5f5;
    font-size: 18px;
}

#contactMessage {
  height: 200px;
  
}

.submitBtn {
    border: 2px solid #D03A3B;
    border-radius: 7px;
    width: 146px;
    height: 45px;
    margin: 0 0 30px;
    background-color: #0C0C0C;
    color: #f5f5f5;
    font-size: 18px;
}
.submitBtn:active {
    border: 3px solid #D03A3B;
}

.infoContainer {
  width: 272px;
}
.soMeIcons {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}

.soMeIcons a {
  color: white;
  font-size: 34px;
  margin: 0 auto;
}

.soMeIcon {
  
}

.soMeIcon:hover {
  color: #D03A3B;
}

@media screen and (max-width: 1500px) {
  .main-container .contact-wrapper .right{
    width: 200px;
}
}

@media screen and (max-width: 1100px) {
  .main-container .contact-wrapper .left {
    margin: 0 30px 30px 0;
}
}


</style>