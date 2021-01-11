<template>
  <section id="store">
    <div id="store-hero-container" class="HeroImages-Container" :style="{'background-image': 'url('+ require(`@/assets/img/` + page.url) +')'}">
    </div>
    
    <div class="main-container">

        <h1>{{ page.name }}</h1>
        <div class="cart" >
        <div class="cart-wrapper">
            <font-awesome-icon icon="shopping-cart" class="cart-icon" v-on:click="toggleCart"  />
            <div v-if="cart" class="cartFull">
                <div class="headerCart">
                    <div class="leftCart">
                    <font-awesome-icon icon="shopping-cart" class="cart-icon" v-on:click="toggleCart"  />

                    </div>
                    <div class="middleCart">
                        <h2> Shopping Cart </h2>
                    </div>
                    <div class="rightCart">
                        <font-awesome-icon icon="times" class="times" v-on:click="toggleCart" />
                    </div>
                </div>
                <div class="addedToCart">
                    <div class="leftCart">
                    <p>1</p>

                    </div>
                    <div class="middleCart">
                        <div class="cartProductInfo">
                            <p class="fullWidth">Hardcode</p>
                            <p>Size: M</p>
                            <p>Quantity: {{ count }}</p> 
                            <div class="quantityBtn">
                                <div class="right">
                                    <button class="quantityUp" v-on:click="count++" type="button"><font-awesome-icon icon="caret-up" /></button>
                                    <button class="quantityDown" v-on:click="count--" type="button"><font-awesome-icon icon="caret-down" /></button>
                                </div>
                            </div>
                            <p >Send as gift:</p> <input type="checkbox">
                            <p class="fullWidth">price: Hardcode</p>
                        </div>
                    
                    </div>
                    <div class="rightCart">
                        <p>REMOVE</p>
                    </div>
                </div>
            <div class="cartBtnArea">
                <div class="leftCart"></div>
                <div class="middleCart">
                    <p class="noMargin">Total</p>
                    <h2>Hardcode</h2>
                </div>
                <div class="rightCart"></div>
                <button class="checkOutBtn">Check out</button>
            </div>
           </div>
        </div>
    
        </div>

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
export default {
  name: "Store",
  data() {
      return {
          /* Hvad skal jeg gøre her gery???? */
          count: 1,
          cart: false,
      }
  },
    methods: {
        toggleCart: function () {
            this.cart = !this.cart;
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
  }
};
</script>

<style scoped>

#store #store-hero-container {

/* Placeholder for animations viduet */

width: 100vw;
background-color: #0C0C0C;
 /* background-image: url("../assets/img/introimg.png"); */
background-repeat: no-repeat;
background-size: 100vw auto;

}

h1 {
    margin: 0;
}

.cart {
    
    position: fixed;
    right: 46px;
    top: 75px;
    z-index: 3;
    
}



.cart .cart-icon, .times {
    color: #f5f5f5;
    font-size: 41px;

}

.cartFull {
    border: 1px solid white;
    padding: 10px;
    width: 479px;
    
    max-height: 88vh;
    overflow: auto;
    position: relative;
    top: -52px;
    z-index: 4;
    background-color: #0C0C0C;
 
 
    
    
    
}

.headerCart {
    height: 100px;
    display: flex;
    flex-wrap: wrap;
    
}

.addedToCart {
    display: flex;
    flex-wrap: wrap;
    margin: 0 0 30px;
}


.leftCart {
    width: 72px;
    
}
.middleCart {
    width: 285px;
    
}
.rightCart {
    width: 120px;
    
}

.cartProductInfo {
    display: flex;
    flex-wrap: wrap;
}

.cartProductInfo p {
    margin: 0 10px 10px 0;
}
.cartBtnArea {
    display: flex;
    flex-wrap: wrap;
}

.checkOutBtn {
    border: 2px solid #D03A3B;
    border-radius: 7px;
    width: 400px;
    height: 45px;
    margin: 0 auto 20px;
    background-color: #0C0C0C;
    color: #f5f5f5;
    font-size: 18px;
    position: relative;
    bottom: 0;
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