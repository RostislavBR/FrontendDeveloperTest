<template>
    <span class="products-price">
        {{ price | numberFormat }} &#8381;
    </span>
</template>

<script>
    import numberFormat from "@/helpers/numberFormat";

    export default {
        name: "ProductsPrice",
        props: ['price'],
        filters: {
            numberFormat,
        }
    }
</script>

<style lang="scss">
    .products-price {
        display: block;
        font-size: $fontSizePriceTag;
        font-weight: $bolderFontWeight;
        line-height: $priceTagLineHeight;
        color: $blackColor;
        flex-grow: 0;
    }
</style>