<template>
    <div>
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
    .title {
        font-size: $bigTitle;
    }
</style>