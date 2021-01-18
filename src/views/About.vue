<template>
  <section id="about">
    <div
      id="about-hero-container"
      class="HeroImages-Container"
      :style="{
        'background-image': 'url(' + require(`@/assets/img/` + page.url) + ')',
      }"
    ></div>
    <!-- <h3>{{ fav }}</h3> -->
    <div class="main-container">
      <div class="main-left">
        <div class="text-wrapper">
            <h1>{{ page.name }}</h1>
            <div class="textSpacer">
            <h2>{{ page.article1.header }}</h2>
          <p>{{ page.article1.text1 }}</p>
          <p>{{ page.article1.text2 }}</p>
            </div>
            <div class="textSpacer">
            <h2>{{ page.article2.header }}</h2>
          <p>{{ page.article2.text1 }}</p>
          <p>{{ page.article2.text2 }}</p>
          <p>{{ page.article2.text3 }}</p>
          <p>{{ page.article2.text4 }}</p>
            </div>
            <div class="textSpacer">
            <h2>{{ page.article3.header }}</h2>
            <p>{{ page.article3.text1 }}</p>
            <p>{{ page.article3.text2 }}</p>
            <p>{{ page.article3.text3 }}</p>
            <p>{{ page.article3.text4 }}</p>
            </div>
          
         

         

         
        </div>
      </div>
      <div class="main-right">
        <img src="../assets/img/aboutimg1.jpg" />
        <img src="../assets/img/aboutimg2.jpg" />
      </div>
   
      <div class="news-container">
       <div class="news-header"> <h1>{{ page.article4.header }}</h1></div>
        <div class="news-feed">
          <div class="text-wrapper">
            <h2>{{ page.article4.post1.header }}</h2>
            <img class="fullWidth" src="../assets/img/newsDoomChart.jpg" />
            <p>
              {{ page.article4.post1.text1 }}
              <a href="">{{ page.article4.post1.text2 }}</a>
            </p>
          </div>
        </div>
        <div class="news-feed">
          <div class="text-wrapper">
            <h2>{{ page.article4.post2.header }}</h2>
            <img class="fullWidth" src="../assets/img/newsSpotifyArtist.jpg" />
            <p>
              {{ page.article4.post2.text1 }}
            </p>
          </div>
        </div>
        <div class="news-feed">
          <div class="text-wrapper">
            <h2>{{ page.article4.post3.header }}</h2>
            <img class="fullWidth" src="../assets/img/newsVinyler.jpg" />
            <p>
              {{ page.article4.post3.text1 }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "About",

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
#about #about-hero-container {
  /* Placeholder for animations viduet */


  background-color: #0c0c0c;
  /* background-image: url("../assets/img/introimg.png"); */
  background-repeat: no-repeat;
  background-size: 100vw auto;
}
.main-container {
  padding-bottom: 150px;
  /* test*/
}
.main-left {
  margin: 0 auto;
  padding-bottom: 150px;
}

.main-left .text-wrapper {
  width: 82%;
}

.main-right {
  margin: 150px auto 0;
}

.main-right img {
  width: 100%;
  margin: 0 auto 100px;
}

.news-container {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-between;
}

.textSpacer {
    margin: 0 0 50px 0;
    width: 100%;
}

.textSpacer h2 {
    margin: 0 0 15px 0;
    width: 100%;
}

.news-container .news-header {
  width: 100%;
}

.news-container .news-feed {
  /* margin: 0 auto;
  padding: 0 10px;
  background-color: rgb(255, 217, 217); */

  width: 370px;
  height: 786px;
}
.news-container .news-feed img {
    margin-bottom: 25px;
}

@media screen and (max-width: 1000px) { 

.main-container .main-left, .main-container .main-right {
  width: 100%;
  margin: 30px auto;
  padding-bottom: 0;
}

.main-right {
  width: 85%;
  
}
}


@media screen and (max-width: 700px) { 

.news-container .news-feed{
    height: 630px;
}
}



@media screen and (max-width: 590px) {
 

#about #about-hero-container {
    background-size: 0;
}
}
</style>