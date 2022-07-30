<template>
    <div class="main-content-container">
        <MainForm/>
        <div class="grid-wrapper">
            <MainGrid>
                <MainGridItem v-for="items in 10" :key="items"/>
            </MainGrid>
        </div>
    </div>
</template>

<script>
    import MainForm from "@/components/MainForm";
    import MainGrid from "@/components/MainGrid";
    import MainGridItem from "@/components/MainGridItem";

    export default {
        name: "MainContent",
        components: { MainGridItem, MainGrid, MainForm },
    }
</script>

<style lang="scss">
    .main-content-container {
        display: flex;
    }
</style>