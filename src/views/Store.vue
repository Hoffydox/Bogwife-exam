<template>
  <section id="store">
    <div id="store-hero-container" class="HeroImages-Container" :style="{'background-image': 'url('+ require(`@/assets/img/` + page.url) +')'}">
    </div>
    
    <div class="main-container">

        <h1>{{ page.name }}</h1>
        <cartComponent :cartWatch="cartWatchTick"/>

        <div class="product-container">
            <div class="product-category">
                <h2 >{{ page.article1}}</h2>
            </div>
            
        <product v-for="product in apparels" :key="product.id" :productProp="product"/>
        <div class="product-category"> 
            <h2>{{ page.article2}}</h2>
        </div>
        <product v-for="product in musics" :key="product.id" :productProp="product"/>
          

          
        </div>
    </div>
    

  </section>
</template>

<script>
 // import Product from "../components/productList.vue";
 import product from "../components/product.vue";
 import cartComponent from "../components/cart.vue";
export default {
  name: "Store",
  data() {
      return {
          /* Hvad skal jeg gøre her gery???? */
          count: 1,
          cartWatchTick: false,
      }
  },
  methods: {
      callCartIcon: function () {
          console.log("anim in store");
          this.cartWatchTick = "true";
           console.log(this.cartWatchTick);
      }
  },
  computed: {
    page: function () {
      const pageObject = this.$store.getters.getPageByName(this.$route.name);
      if (!pageObject) {
        this.$router.replace("/page-not-found");
      }
      console.log(pageObject);
      return pageObject;
    },
    
    apparels: function() {
        return this.page.products.filter(prod => prod.category == "AP")
    },
    musics: function() {
        return this.page.products.filter(prod => prod.category == "MU")
    },
    /*
    showCart: function () {
          return alert("hello?");
      },
      */
  },
  components: {
  product,
  cartComponent,
  }
};
</script>

<style scoped>

#store #store-hero-container {




background-color: #0C0C0C;
 /* background-image: url("../assets/img/introimg.png"); */
background-repeat: no-repeat;
background-size: 100vw auto;

}

h1 {
    margin: 0;
}




/* Product Billederne */
.storePic {
    
    width: 370px;
    height: 288px;
    margin: 0 0 30px 0;
    
   

}



.sizes {
    display: flex;
    flex-wrap: wrap;
    
}

.size {
  width: 32px;
  margin-right: 16px;
 
}

.size input {
    visibility: hidden;
    width: 0px;
    height: 0px;
    display: none;
}

.size label {
    display: inline-block;
    border: 1px solid #D03A3B;
    width: 30px;
    height: 16px;
    text-align: center;
    padding: 6px 0 7px;
    color: #F5F5F5;
}

.size label:hover {
    color: #F5F5F5;
}

.size input:checked + label {
    /* background-color: #D03A3B; */
    color:  #D03A3B;
    
    }

.quanitityArea {
    display: flex;
    flex-wrap: wrap;
    color: #F5F5F5;
}

.quanitityArea p {
    padding-top: 5px;
    margin-right: 12px;
}

.quanitityArea .quantityBtn {
display: flex;
    flex-wrap: wrap;
     height: 32px;
}

.quanitityArea .quantityBtn .left{
    width: 36px;
    
    
    border: 1px solid #D03A3B;
}

.quanitityArea .quantityBtn .right{
    width: 22px;
    height: 32px;
    background-color: darkcyan;
}

.quantityUp, .quantityDown {
    width: 26px;
    height: 16px;
    background-color: #0C0C0C;
    border: 1px solid #D03A3B;
    color: #f5f5f5;
    display: block;
    padding: 0;
}

.quantityUp svg, .quantityDown svg {
    padding-bottom: 2px;
}

.product-container .store-product form.options-container {
    display: flex;
    flex-wrap: wrap;
}

.noMargin {
    margin: 0;
}

.fullWidth {
    width: 100%;
}

.counter {
    margin: 0;
    padding: 0 10px;
}



.product-category h2 {
    margin: 30px 0;
}
.artist-link {
    font-size: 18px;
    display: inline-block;
    margin: 0 0 25px;
    text-decoration: underline #F5F5F5 ;
}

.artist-link:hover {
    font-size: 18px;
    display: inline-block;
    margin: 0 0 25px;
    text-decoration: underline  #D03A3B ;
}

</style>