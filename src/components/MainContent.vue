<template>
    <div class="main-content-container">
        <MainForm/>
        <div class="grid-wrapper">
            <MainGrid>
                <MainGridItem  v-for="({ id, image, title, description, price }) in products" :key="id" :id="id" :image="image" :title="title" :description="description" :price="price"/>
            </MainGrid>
        </div>
    </div>
</template>

<script>
    import MainForm from "@/components/MainForm";
    import MainGrid from "@/components/MainGrid";
    import MainGridItem from "@/components/MainGridItem";
    import { mapGetters } from "vuex";

    export default {
        name: "MainContent",
        components: { MainGridItem, MainGrid, MainForm },
        computed: {
            ...mapGetters({products: 'getProducts'})
        },
    }
</script>

<style lang="scss">
    .main-content-container {
        display: flex;
    }
</style>