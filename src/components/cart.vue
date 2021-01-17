<template>
  <div class="cart">
    <div class="cart-wrapper">
      <div class="cartCircle" ref="circleAnim"></div>
      <font-awesome-icon ref="cartAnim"
        icon="shopping-cart"
        class="cart-icon"
        v-on:click="toggleCart"
      />
      <div v-if="cartShow" class="cartFull">
        <div class="headerCart">
          <div class="leftCart">
            <font-awesome-icon ref="cartInside"
              icon="shopping-cart"
              class="cart-icon"
              v-on:click="toggleCart"
            />
          </div>
          <div class="middleCart">
            <h2>Shopping Cart</h2>
          </div>
          <div class="rightCart">
            <font-awesome-icon
              icon="times"
              class="times"
              v-on:click="toggleCart"
            />
          </div>
        </div>
      <cartItem v-for="cartItemObj in cart" :key="cartItemObj.cartId" :cartItemProp="cartItemObj" />
        <div class="cartBtnArea">
          <div class="leftCart"></div>
          <div class="middleCart">
            <p class="noMargin">Total</p>
            <h2> {{ totalAmount }} &euro;</h2>
          </div>
          <div class="rightCart"></div>
          <button class="checkOutBtn">Check out</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import cartItem from "../components/cartItem.vue";
import gsap from "gsap";

export default {
  name: "cartComponent",
  props: ["cartWatch"],
    data() {
        return {
            cartShow: false,
            cartWatchTick: false,
            cartTimeline: null,
        }
    },
    watch: { 
    cartWatch: function() {
      if (this.cartWatch == "true") {
        this.cartAnimation();
      }
      console.log("this.cartAnimation not true")
    }
},
    methods: {
        toggleCart: function () {
            this.cartShow = !this.cartShow;
        },
        cartAnimation: function () {
      

      this.cartTimeline = gsap.timeline({
      delay: 0,
      // repeat: 3
      
    });

    this.cartTimeline.to(this.$refs.circleAnim, {scale: 7, opacity: 0,  duration: 1.2, ease: "expo.out"});
    this.cartTimeline.to(this.$refs.cartAnim, {color: "#D03A3B",  duration: 1, ease: "expo"}, "-=0.8");
    
    
    
    this.cartWatchTick = "false";
    console.log(this.cartWatchTick);
   },
    },
  computed: {
    cart: function () {
        console.log("cart was updated!");
        console.log(this.$store.state.cart);
      return this.$store.state.cart;
    },
    totalAmount: function () {
        let total = 0;
        this.cart.forEach(cartItem => {
            total += cartItem.quantity * cartItem.product.price;
        });
        return total;
    }
  },
  components: {
      cartItem,
  }
};
</script>

<style>

.cart {
    
    position: fixed;
    right: 46px;
    top: 75px;
    z-index: 3;
    
}

.cartCircle {
width: 7px; /* width: 70px; */
height: 7px; /* height: 70px */
border: 4px solid gold;
border-radius: 100px;
position: absolute;
top: 12px;
left: 18px;
opacity: 1;
scale: 1;
z-index: -1;

}

.times {
  margin-right: 20px;
}

.times:hover {
  color:#D03A3B;
  cursor: pointer;
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
    justify-content: space-between;
    
}

.addedToCart {
    display: flex;
    flex-wrap: wrap;
    margin: 0 0 30px;
    
}


.leftCart {
    width: 72px;
    
}

.leftCart p {
    margin-left: 20px;
    
}
.middleCart {
    width: 285px;
    
}
.rightCart {
    
    
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

.checkOutBtn:active {
  border: 3px solid #D03A3B;
}

</style>