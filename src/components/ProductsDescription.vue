<template>
    <p class="products-description">
        {{ description | cutLongText(250, '...') }}
    </p>
</template>

<script>
    import cutLongText from "@/helpers/cutLongText";

    export default {
        name: "ProductsDescription",
        props: ['description'],
        filters: {
            cutLongText
        }
    }
</script>

<style lang="scss">
    .products-description {
        font-size: $middleFontSize;
        font-weight: $normalFontWeight;
        line-height: $normalLineHeight;
        margin: 0 0 10px 0;
        color: $blackColor;
        flex-grow: 3;
    }
</style>