<template>
  <div class="addedToCart" v-if="cartItem" >
    <div class="leftCart">
      <p>1</p>
    </div>
    <div class="middleCart">
      <div class="cartProductInfo">
        <p class="fullWidth"> {{ cartItem.product.title }} </p>
        <div class="size"  v-if="cartItem.product.category == 'AP'">
          <p >Size: {{ cartItem.size }}</p>
        </div>
        <div class="quantityArea">
          <p>Quantity: {{ cartItem.quantity }}</p> <!-- rigtigt? -->
          <div class="quantityBtn">

        </div>
          <div class="right">
            <button class="quantityUp" v-on:click="count++" type="button"> <!-- make an action that changes the quantity in the cart  -->
              <font-awesome-icon icon="caret-up" />
            </button>
            <button class="quantityDown" v-on:click="count--" type="button">
              <font-awesome-icon icon="caret-down" />
            </button>
          </div>
        </div>
        <div class="gift">
          <span>Send as gift: </span>
          <input type="checkbox" />
        </div>
        <p class="fullWidth">price: {{ cartItem.product.price }} &euro;</p>
      </div>
    </div>
    <div class="rightCart">
      <p class="remove" @click="removeItem">REMOVE</p> <!-- comit a mutation to remove with: filter everything that is not the excact match - use cartId-->
    </div>
  </div>
</template>

<script>
export default {
  name: "cartItem",
  prop: ["cartItemProp"],
  methods: {
    removeItem: function () {
      console.log("Remove Item");
    }
  },
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
    
    
}

.remove:hover {
color: #D03A3B;
cursor: pointer;
}

.cartProductInfo {
    display: flex;
    flex-wrap: wrap;
}

.cartProductInfo p {
    margin: 0 10px 10px 0;
}
.quantityArea {
  display: flex;
flex-wrap: wrap;
}
.quantityUp, .quantityDown {
    width: 26px;
    height: 16px;
    background-color: #0C0C0C;
    border: 1px solid #f5f5f5;
    color: #f5f5f5;
    display: block;
    padding: 0;
}

.quantityUp svg, .quantityDown svg {
    padding-bottom: 2px;
}

.size {
  width: 45%;
}

.gift {
  margin: 10px 0;
  width: 100%;
}

.gift input{
  border: 1px solid #f5f5f5;
  background-color: none;
}

span {
  color: #f5f5f5;
}

.fullWidth {
  width: 100%;
}


</style>