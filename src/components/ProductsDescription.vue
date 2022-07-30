<template>
    <p class="products-description">
        Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк
    </p>
</template>

<script>
    export default {
        name: "ProductsDescription"
    }
</script>

<style lang="scss">
    .products-description {
        font-size: $middleFontSize;
        font-weight: $normalFontWeight;
        line-height: $normalLineHeight;
        color: $blackColor;
        margin: 0 0 32px 0;
    }
</style>