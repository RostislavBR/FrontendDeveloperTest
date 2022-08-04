<template>
    <div class="products-info-wrapper">
        <ProductsTitle :title="title"/>
        <ProductsDescription :description="description"/>
        <ProductsPrice :price="price"/>
    </div>
</template>

<script>
    import ProductsTitle from "@/components/ProductsTitle";
    import ProductsDescription from "@/components/ProductsDescription";
    import ProductsPrice from "@/components/ProductsPrice";

    export default {
        name: "ProductsInfo",
        props: ['title', 'description', 'price'],
        components: { ProductsPrice, ProductsDescription, ProductsTitle }
    }
</script>

<style lang="scss">
    .products-info-wrapper {
        display: flex;
        flex-direction: column;
        height: 100%;
        padding: 0 16px 24px 16px;
        overflow: hidden;
    }
</style>