<template>
 
<div id="product-list">



    <div class="product-container">
        <div class="product-category">
            <h2 >{{ category }}</h2>
        </div>
        <div class="store-product">
            <img class="storePic" :src="require(`@/assets/img/` + pic)" v-bind:alt="name" />
            <h2>{{ title }}</h2>
            <p class="noMargin">{{ description }}</p>
            <a class="artist-link" :href="artLink" target="_blank">{{ artwork }}</a>
            <h2>{{ price }}</h2>
            <p class="greyP">{{ shipping }}</p>
            <form class="options-container">
                <div class="sizes">
                    <div class="size">
                        <input type="radio" id="small" name="sizes" value="small">
                        <label for="small">S</label>
                    </div>
                    <div class="size">
                        <input type="radio" id="medium" name="sizes" value="medium">
                        <label for="medium">M</label>
                    </div>
                    <div class="size">
                        <input type="radio" id="large" name="sizes" value="large">
                        <label for="large">L</label>
                    </div>
                    <div class="size">
                        <input type="radio" id="x-large" name="sizes" value="x-large">
                        <label for="x-large">XL</label>
                    </div>
                    <div class="quanitityArea">
                        <p class="greyP">
                            Quanitity: 
                        </p>
                        <div class="quantityBtn">
                            <div class="left"><p class="counter"> {{ count }} </p></div>
                            <div class="right">
                                <button class="quantityUp" v-on:click="count++"><font-awesome-icon icon="caret-up" /></button>
                                <button class="quantityDown" v-on:click="count--"><font-awesome-icon icon="caret-down" /></button>
                            </div>
                        </div>
                    </div>
                </div>
                <button class="buyBtn">
                    Buy
                </button>
            </form>
        </div>

        
    </div>
</div>
</template>

<script>
export default {
  name: "productList",
  props: ["id", "category", "pic", "title", "description", "artwork", "price", "shipping"],
  data() {
      return {
          count: 1,
          count2: 1,
          cart: true,
      }
  },
    methods: {
       
        addToCart(id) {
      this.$store.dispatch("addToCart", id);
    }
    },
  computed: {
    
    /*
    showCart: function () {
          return alert("hello?");
      },
      */
  },
};
</script>

<style scoped>

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
    height: 671px;
    position: relative;
    top: -52px;
    z-index: 4;
    background-color: #0C0C0C;

    display: flex;
    flex-wrap: wrap;
    
}

.cartFull .cart-icon, .cartFull .times {
    margin: 0 auto;
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

.noMargin {
    margin: 0;
}

.counter {
    margin: 0;
    padding: 0 10px;
}

.buyBtn {
    border: 2px solid #D03A3B;
    border-radius: 7px;
    width: 146px;
    height: 45px;
    margin: 0 0 30px;
    background-color: #0C0C0C;
    color: #f5f5f5;
    font-size: 18px;
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