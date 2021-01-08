<template>
  <section id="About">
      <div class="HeroImages-Container">
      <img class="HeroImages" :src="require(`@/assets/img/` + page.url)" v-bind:alt="page.name" />
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

            <div class="instagram-container">
                <div class="instagram-feed">
                    insta1
                </div>
                <div class="instagram-feed">
                    insta2
                </div>
                <div class="instagram-feed">
                    insta3
                </div>
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