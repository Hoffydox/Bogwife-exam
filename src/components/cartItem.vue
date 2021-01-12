<template>
  <div class="addedToCart" v-if="cartItem" >
    <div class="leftCart">
      <p>1</p>
    </div>
    <div class="middleCart">
      <div class="cartProductInfo">
        <p class="fullWidth"> {{ cartItem.product.title }} </p>
        <p>Size: M</p>
        <p>Quantity: {{ cartItem.quantity }}</p> <!-- rigtigt? -->
        <div class="quantityBtn">
          <div class="right">
            <button class="quantityUp" v-on:click="count++" type="button"> <!-- make an action that changes the quantity in the cart  -->
              <font-awesome-icon icon="caret-up" />
            </button>
            <button class="quantityDown" v-on:click="count--" type="button">
              <font-awesome-icon icon="caret-down" />
            </button>
          </div>
        </div>
        <p>Send as gift:</p>
        <input type="checkbox" />
        <p class="fullWidth">price: {{ cartItem.product.price }}</p>
      </div>
    </div>
    <div class="rightCart">
      <p>REMOVE</p> <!-- comit a mutation to remove with: filter everything that is not the excact match - use cartId-->
    </div>
  </div>
</template>

<script>
export default {
  name: "cartItem",
  prop: ["cartItemProp"],
  computed: {
    cartItem: function () {
        console.log("cartItem updated");
        console.log(this.$attrs.cartItemProp);
      return this.$attrs.cartItemProp;
    },
  },
};
</script>

<style>

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
</style>