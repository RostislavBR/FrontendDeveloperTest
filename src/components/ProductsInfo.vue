<template>
    <div class="products-info-wrapper">
        <ProductsTitle/>
        <ProductsDescription/>
        <ProductsPrice/>
    </div>
</template>

<script>
    import ProductsTitle from "@/components/ProductsTitle";
    import ProductsDescription from "@/components/ProductsDescription";
    import ProductsPrice from "@/components/ProductsPrice";

    export default {
        name: "ProductsInfo",
        components: { ProductsPrice, ProductsDescription, ProductsTitle }
    }
</script>

<style lang="scss">
    .products-info-wrapper {
        padding: 0 16px;
    }
</style>