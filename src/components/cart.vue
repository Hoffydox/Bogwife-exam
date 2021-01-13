<template>
  <div class="cart">
    <div class="cart-wrapper">
      <font-awesome-icon
        icon="shopping-cart"
        class="cart-icon"
        v-on:click="toggleCart"
      />
      <div v-if="cartShow" class="cartFull">
        <div class="headerCart">
          <div class="leftCart">
            <font-awesome-icon
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

export default {
  name: "cartComponent",
  
    data() {
        return {
            cartShow: false,
        }
    },
    methods: {
        toggleCart: function () {
            this.cartShow = !this.cartShow;
        }
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

</style>