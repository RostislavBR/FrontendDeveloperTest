<template>
    <h2 class="products-title">{{ title | cutLongText(27, '...') }}</h2>
</template>

<script>
    import cutLongText from "@/helpers/cutLongText";

    export default {
        name: "ProductsTitle",
        props: ['title'],
        filters: {
            cutLongText
        }
    }
</script>

<style lang="scss">
    .products-title {
        font-size: $middleTitle;
        font-weight: $bolderFontWeight;
        line-height: $middleLineHeight;
        color: $blackColor;
        flex-grow: 0;
        margin: 0 0 17px 0;
    }
</style>