<template>
    <h2 class="products-title">{{ title }}</h2>
</template>

<script>
    export default {
        name: "ProductsTitle",
        props: ['title']
    }
</script>

<style lang="scss">
    .products-title {
        font-size: $middleTitle;
        font-weight: $bolderFontWeight;
        line-height: $middleLineHeight;
        color: $blackColor;
        flex-grow: 1;
    }
</style>