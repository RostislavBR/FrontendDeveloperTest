<template>
    <div class="image-wrapper">
        <img :src="image">
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
        img {
            width: 332px;
            max-height: 200px;
        }
    }
</style>