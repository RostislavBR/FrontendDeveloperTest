<template>
    <div class="full-content-wrapper">
        <Head/>
        <MainContent/>
    </div>
</template>

<script>
    import Head from "@/components/Head";
    import MainContent from "@/components/MainContent";

    export default {
        name: "MainPage",
        components: { MainContent, Head },
    }
</script>

<style lang="scss">
    .full-content-wrapper {
        padding: 0 32px 0 32px;
    }
</style>