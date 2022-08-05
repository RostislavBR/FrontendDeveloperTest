<template>
    <div class="image-wrapper">
        <img :src="image" class="image">
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
        margin: 0 0 15px 0;
        min-height: 200px;

        .image {
            width: 332px;
            max-height: 200px;
            object-fit: contain;
            z-index: 100;
        }
    }
</style>