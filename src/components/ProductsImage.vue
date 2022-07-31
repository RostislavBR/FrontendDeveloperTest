<template>
    <div class="image-wrapper">
        <img :src="require(`@/image/${image}`)">
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
        min-height: 200px;
        margin:  0 0 16px 0;
    }
</style>