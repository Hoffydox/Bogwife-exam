<template>
    <section class="toyInfo">
        <!-- <h3>{{ fav }}</h3> -->
        <h2>{{ toy.name }}</h2>
        <toyImage class="toyImage" :url="toy.url" ></toyImage>
        <p>{{ toy.description }}</p>
        <label :for="`toyinfo-input-checkbox-${toy.id}`">Favourite </label>
        <input type="checkbox" :id="`toyinfo-input-checkbox-${toy.id}`" v-model="isFav" @change="onChange()" />
    </section>
</template>

<script>
import toyImage from './toyImage'

export default {
    name: 'toyInfo',
    props: ['toy', 'fav'],
    data: function(){
        return {
            isFav: this.fav
        }
    },
    watch: {    // can set up watchers for any changes in the values of the listed variables (props, data, ...)
        fav: function (valueOfFav) {    // 3b. we watch the value of the fav prop and we update the checkbox's state through the isFav variable
            if(valueOfFav) {
                this.isFav = true;
            } else {
                this.isFav = false;
            }
        }
    },
    methods: {
        onChange: function(){
            this.$emit('toggle-fav', this.isFav);
        }
    },
    components:{
        toyImage
    }
}
</script>

<style scoped>
.toyImage {
    height: 300px;
    max-width: 300px;
}
</style>