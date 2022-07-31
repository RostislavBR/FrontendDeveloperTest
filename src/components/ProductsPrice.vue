<template>
    <span class="products-price">
        {{ price }}руб.
    </span>
</template>

<script>
    export default {
        name: "ProductsPrice",
        props: ['price'],
    }
</script>

<style lang="scss">
    .products-price {
        display: block;
        font-size: $fontSizePriceTag;
        font-weight: $bolderFontWeight;
        line-height: $priceTagLineHeight;
        color: $blackColor;
        margin: 0 0 24px 0;
    }
</style>