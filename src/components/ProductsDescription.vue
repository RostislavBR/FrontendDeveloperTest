<template>
    <p class="products-description">
        {{ description }}
    </p>
</template>

<script>
    export default {
        name: "ProductsDescription",
        props: ['description']
    }
</script>

<style lang="scss">
    .products-description {
        font-size: $middleFontSize;
        font-weight: $normalFontWeight;
        line-height: $normalLineHeight;
        color: $blackColor;
        flex-grow: 3;
    }
</style>