<template>
 


  <div class="store-product" :id="product.id" >
                <img class="storePic" :src="require(`@/assets/img/` + product.pic)" v-bind:alt="product.name" />
                <h2>{{ product.title }}</h2>
                <p class="noMargin">{{ product.description }}</p>
                <a class="artist-link" href="https://www.instagram.com/grace_xiii/?hl=da" target="_blank">{{ product.artwork }}</a>
                <h2>{{ product.price }} &euro;</h2>
                <p class="greyP">{{ product.shipping }}</p>
                <form class="options-container">
                <div class="sizes" v-if="product.category == 'AP'" > <!-- 4 -6 produkt skal ikke have dette element.
                    <div class="sizes" v-if="product.sizes || product.sizes.length" > -->
                        <div class="size" v-for="size in sizeAvailable" :key="size.unit"> <!-- v-for sizes hvis nogle producter ikke har en size... -->
                            <input v-model="sizeSelected" type="radio" :id="size.unit + product.id" :name="`sizes` + product.id" :value="size.unit">
                            <label :for="size.unit + product.id">{{size.unit}}</label>
                        </div>
                    </div>
                        <div class="quanitityArea">
                            <p class="greyP">
                                Quantity: 
                            </p>
                            <div class="quantityBtn">
                                <div class="left"><p class="counter"> {{ count }} </p></div>
                                <div class="right">
                                    <button class="quantityUp" v-on:click="count++" type="button"><font-awesome-icon icon="caret-up" /></button>
                                    <button class="quantityDown" v-on:click="count--" type="button"><font-awesome-icon icon="caret-down" /></button>
                                </div>
                            </div>
                        </div>
                    
                    <button class="buyBtn" type="button" @click="checkIfNull">
                        Buy
                    </button>
                </form>
            </div>
</template>
<!-- v-for="product in page.products" :key="product.id" :id="product.id" -->
<script>
export default {
  name: "product",
  props: ["productProp"],
  data() {
      return {
          count: 1,
          sizeSelected: "null",
          cartItem: [],
      }
  },
    methods: {
        checkIfNull() {
            if (this.sizeSelected == 'null' && this.product.category == 'AP') {
                alert("Please select a size");
            } else {
                this.addToCart();
            }
            console.log(this.sizeSelected);
        },
       
        addToCart() {
            // create a cartItem (aka. payload)
            /* 
            let cartId; 
            if (comesindiffsizes) cartId = this.product.id + "-" + this.radioButtonSelection,
            else cartId = this.product.id
            let cartItem = {
                product: this.product, lodash mabye cloneDeep method,
                quantity: this.count,
                cartId: cartId (this depends on the "type" of product, does it come in multiple size)

            }
            */

           let cartId;
           if (this.product.category == 'AP') {                                 // skal stadig kunne definere om der er noget i array i stedet for AP - if (this.product.sizes) er den tom?
               cartId = this.product.id + "-" + this.sizeSelected;
           } else {
               cartId =  this.product.id;
           }
           let cartItem = {
               product: this.product,
               quantity: this.count,
               size: this.sizeSelected,
               cartId: cartId,
           }
           console.log(cartItem);
        this.$parent.callCartIcon(); // Calling animation in store.vue
        this.$store.dispatch("addToCart", cartItem); // check content i store.js --- Det skal være cartItem som param
    }
    },
  computed: {
          product: function() {
              return this.productProp
          },
          sizeAvailable: function() {
            return this.product.sizes.filter(sizeA => sizeA.available == true)
    },
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

.product-container .store-product form.options-container {
    display: flex;
    flex-wrap: wrap;
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
    border: 2px solid #D03A3B;
    width: 30px;
    height: 16px;
    text-align: center;
    padding: 6px 0 7px;
    color: #F5F5F5;
}

.size label:hover {
    color: #F5F5F5;
    cursor: pointer;
}

.size label:active {
    border: 3px solid #D03A3B;
}

.size input:checked + label {
    /* background-color: #D03A3B; */
    color:  #D03A3B;
    
    }

.quanitityArea {
    display: flex;
    flex-wrap: wrap;
    color: #F5F5F5;
    cursor: default;
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
.quanitityArea .quantityBtn .right .quantityUp:hover, .quanitityArea .quantityBtn .right .quantityDown:hover{
    cursor: pointer;
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
    margin: 0 100px 30px 0;
    background-color: #0C0C0C;
    color: #f5f5f5;
    font-size: 18px;
}

.buyBtn:hover {
  cursor: pointer;
}

.buyBtn:active {
  border: 3px solid #D03A3B;
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


@media screen and (max-width: 530px) {

   #store .main-container {
    padding: 0 10px;
   
}
    .quanitityArea {
        margin: 0 0 5px;
    }

    .storePic {
    width: 300px;
    height: 234px;
}

.sizes {
    margin-bottom: 20px;
}

.store-product {
    width: 300px;
    
}
}

</style>