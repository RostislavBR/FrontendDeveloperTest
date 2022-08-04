<template>
    <span class="products-price">
        {{ price.toLocaleString() }} руб.
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
    }
</style>