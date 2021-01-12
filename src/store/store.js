// Stores global values?
// what is Vues what should be in the store and he state????
// any kind of data that more than one component should have acces to.
// Kan libraries sættes ind her??? er det en god ide? fx hvis man skal have animationer på tværs af sider?
//

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);
// toys = pages
// toy = page
import localData from '../assets/localDB.js'

export default new Vuex.Store({
    // stores variable that you want to keep accessible and trackable globally in the projekt
    // analogous with the 'data' object/function in the vue options object
    state: {
        pages: [],
        cart: []


    },
    // getters retrive information from the state, do not modify the state variables
    // the value they retrieve is re-evaluated, whenever the state variables change that they are dependent upon
    // analogous with 'computed' in the vue options object
    getters: { // VI GÅR EFTER NAVN
        getPageByName: (state) => (name) => {
            return state.pages.find(page => page.name == name);
        },
        getCartItemByCartId: (state) => (cartId) => {
            return state.cart.find(cartItem => cartItem.cartId == cartId)
        }
    },
    // changes/manipulations in state has to be trough mutations!
    // mutations directly manipulate the state variables, 
    // mutations are SYNCHRONOUS!
    mutations: {
        setPages: (state, pagesApiData) => {
            state.pages = pagesApiData;
        },
        setProducts: (state, productsApiData) => {
            state.products = productsApiData;
        },

        pushItem(state, cartItem) { 
            state.cart.push(cartItem);
            
        },

        omitItem(state, index) {
            state.cart.splice(index, 1);
        },

        increaseItemQuantity(state, [cartId, quantity]){
            let cartIndex = state.cart.findIndex(cartItem => cartItem.cartId == cartId);
            state.cart[cartIndex].quantity += quantity;
        }

    },
    // these change the state, but not directly. why not do this from mutations? because actions can be asyncronous
    // actions are for async calls and functions that may have different mutations as an outcome
    actions: {
        load: (context) => {
            // Local API call
            const apiData = localData;
            context.commit('setPages', apiData);
        },
        addToCart(context, cartItem) {
            let tempCartItem = context.getters.getCartItemByCartId(cartItem.cartId);
            // check if exists
            if (tempCartItem) {
                // ++ quantaty
                context.commit("increaseItemQuantity", [cartItem.cartId, cartItem.quantity]);
            } else {
                console.log("action addToCart")
                context.commit("pushItem", cartItem);
            }
            console.log(context.state.cart);
          },
         
      
          removeItem(context, index) {
            context.commit("omitItem", index);
          },
    }

});
