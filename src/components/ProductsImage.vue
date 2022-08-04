<template>
    <div class="image-wrapper">
        <img :src="image" class="image">
    </div>
</template>

<script>
    export default {
        name: "ProductsImage",
        props: ['image']
    }
</script>

<style lang="scss">
    .image-wrapper {
        margin:  0 0 16px 0;
        .image {
            width: 332px;
            max-height: 200px;
            object-fit: contain;
        }
    }
</style>