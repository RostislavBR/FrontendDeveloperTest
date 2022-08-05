<template>
    <div class="image-wrapper">
        <img :src="image" class="image">
<!--        <div class="not-found-image" v-else></div>-->
    </div>
</template>

<script>
    export default {
        name: "ProductsImage",
        props: ['image'],
    }
</script>

<style lang="scss">
    .image-wrapper {
        margin:  0 0 10px 0;
        .image {
            width: 332px;
            max-height: 200px;
            object-fit: contain;
        }
        .not-found-image {
            background: $formButtonBackground;
            min-height: 200px;
        }
    }
</style>