<template>
  <section id="about">
      <div id="about-hero-container" class="HeroImages-Container" :style="{'background-image': 'url('+ require(`@/assets/img/` + page.url) +')'}">
      
    </div>
        <!-- <h3>{{ fav }}</h3> -->
        <div class="main-container">
        

                <div class="main-left">
                    <div class="text-wrapper">
                        <h1>{{ page.name }}</h1>
                        <h2>{{ page.article1.header }}</h2>
                        <p>{{ page.article1.text1 }}</p>
                        <p>{{ page.article1.text2 }}</p>

                        <h2>{{ page.article2.header }}</h2>
                        <p>{{ page.article2.text1 }}</p>
                        <p>{{ page.article2.text2 }}</p>
                        <p>{{ page.article2.text3 }}</p>
                        <p>{{ page.article2.text4 }}</p>
                        
                        <h2>{{ page.article3.header }}</h2>
                        <p>{{ page.article3.text1 }}</p>
                        <p>{{ page.article3.text2 }}</p>
                        <p>{{ page.article3.text3 }}</p>
                        <p>{{ page.article3.text4 }}</p>
                    </div>

                 

                    

                </div>
                <div class="main-right">
                    <img src="../assets/img/aboutimg1.png">
                    <img src="../assets/img/aboutimg2.png">
                </div>

            <div class="news-container">
                <div class="news-left">
                    <div class="text-wrapper">
                        <h2>{{ page.article4.header }}</h2>
                        <p>{{ page.article4.text1 }}</p>
                        <p>{{ page.article4.text2 }}</p>
                    </div>
                </div>
                <div class="news-right">
                    <img src="../assets/img/aboutimg1.png">
                    <img src="../assets/img/aboutimg2.png">
                </div>
                <!-- <div class="news-feed">
                    insta3
                </div> -->
            </div>

        </div>
        
    </section>
</template>

<script>


export default {
name: 'About',

computed: {
            page: function() {
                const pageObject = this.$store.getters.getPageByName(this.$route.name);
                if (!pageObject) {
                    this.$router.replace('/page-not-found');
                }
                return pageObject;
            }
        }
}
</script>

<style scoped>

#about #about-hero-container {

/* Placeholder for animations viduet */

width: 100vw;
background-color: #0C0C0C;
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

.main-right img{
    width: 100%;
    margin: 0 auto 100px;
}

.instagram-container {
    display: flex;
  flex-wrap: wrap;
  width: 100%;
}

.instagram-container .instagram-feed {
    margin: 0 auto;
    padding: 0 10px;
    background-color: rgb(255, 217, 217);
    width: 370px;
    height: 786px;
}

</style>