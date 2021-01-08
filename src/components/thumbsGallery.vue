<template>
    <section class="thumbsGallery">
        <toyImage class="toyImage" v-for="toy in favouriteToys" :key="toy.id" :url="toy.url" ></toyImage>
    </section>
</template>

<script>
import toyImage from './toyImage'

export default {
    name: 'thumbsGallery',
    props: ['favouriteToys'],
    components:{
        toyImage
    }
}
</script>

<style scoped>
.toyImage {
    height: 60px;
    width: 60px;
}
</style>