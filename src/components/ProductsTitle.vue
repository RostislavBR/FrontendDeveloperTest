<template>
    <h2 class="products-title">Наименование товара</h2>
</template>

<script>
    export default {
        name: "ProductsTitle"
    }
</script>

<style lang="scss">
    .products-title {
        font-size: $middleTitle;
        font-weight: $bolderFontWeight;
        line-height: $middleLineHeight;
        color: $blackColor;
        margin: 0 0 16px 0;
    }
</style>