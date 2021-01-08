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
            <h2>BOOK BUISINESS</h2>
            <p>SEND E-MAIL TO MANAGER:<br>MANAGER@BOGWIFE.COM</p>
            <p>SEND E-MAIL TO PRESS:<br>PRESS@BOGWIFE.COM</p>
            <p>SEND E-MAIL TO BOOKING:<br>BOOK@BOGWIFE.COM</p>
            <h2>Connect with Bogwife</h2>
            <div class="soMeIcons">
              <font-awesome-icon :icon="[ 'fab', 'facebook' ]" class="soMeIcon" />
              <font-awesome-icon :icon="[ 'fab', 'instagram' ]" class="soMeIcon" />
              <font-awesome-icon :icon="[ 'fab', 'youtube' ]" class="soMeIcon" />
              <font-awesome-icon :icon="[ 'fab', 'spotify' ]" class="soMeIcon" />
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

.infoContainer {
  width: 272px;
}
.soMeIcons {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}

.soMeIcon {
  color: white;
  font-size: 34px;
  margin: 0 auto;
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