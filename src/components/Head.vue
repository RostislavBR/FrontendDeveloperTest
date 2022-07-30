<template>
    <div class="head-container">
        <HeadTitle/>
        <SelectWrapper/>
    </div>
</template>

<script>
    import HeadTitle from "@/components/HeadTitle";
    import SelectWrapper from "@/components/SelectWrapper";
    export default {
        name: "Header",
        components: { HeadTitle, SelectWrapper }
    }
</script>

<style lang="scss">
    .head-container {
        display: flex;
        justify-content: space-between;
        padding: 32px 0 0 0;
        margin: 0 0 16px 0;
    }
</style>