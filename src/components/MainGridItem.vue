<template>
    <div class="products-grid-item">
        <DeleteButton :id="id"/>
        <ProductsImage :image="image"/>
        <ProductsInfo :title="title" :description="description" :price="price"/>
    </div>
</template>

<script>
    import ProductsImage from "@/components/ProductsImage";
    import ProductsInfo from "@/components/ProductsInfo";
    import DeleteButton from "@/components/DeleteButton";

    export default {
        name: "MainGridItem",
        props: ['id', 'image', 'title', 'description', 'price'],
        components: { DeleteButton, ProductsInfo, ProductsImage },
        mounted() {
            console.log(this.id)
        }
    }
</script>

<style lang="scss">
    .products-grid-item {
        position: relative;
        max-width: 332px;
        max-height: 423px;
        background: $formBackground;
        border-radius: $borderRadius;
        box-shadow: $boxShadow;
    }
</style>