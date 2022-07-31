<template>
    <div class="products-grid-item">
        <ProductsImage :image="image"/>
        <ProductsInfo :title="title" :description="description" :price="price"/>
    </div>
</template>

<script>
    import ProductsImage from "@/components/ProductsImage";
    import ProductsInfo from "@/components/ProductsInfo";

    export default {
        name: "MainGridItem",
        props: ['image', 'title', 'description', 'price'],
        components: { ProductsInfo, ProductsImage }
    }
</script>

<style lang="scss">
    .products-grid-item {
        max-width: 332px;
        max-height: 423px;
        background: $formBackground;
        border-radius: $borderRadius;
        box-shadow: $boxShadow;
    }
</style>