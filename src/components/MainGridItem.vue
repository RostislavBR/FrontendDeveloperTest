<template>
    <div class="products-grid-item">
        <ProductsImage/>
        <ProductsInfo/>
    </div>
</template>

<script>
    import ProductsImage from "@/components/ProductsImage";
    import ProductsInfo from "@/components/ProductsInfo";

    export default {
        name: "MainGridItem",
        components: { ProductsInfo, ProductsImage }
    }
</script>

<style lang="scss">
    .products-grid-item {
        max-width: 332px;
        background: $formBackground;
        border-radius: $borderRadius;
        box-shadow: $boxShadow;
    }
</style>