<template>
    <header>
        <div class="head-container">
            <HeaderTitle/>
            <SelectWrapper/>
        </div>
    </header>
</template>

<script>
    import HeaderTitle from "@/components/HeaderTitle";
    import SelectWrapper from "@/components/SelectWrapper";
    export default {
        name: "Header",
        components: { HeaderTitle, SelectWrapper }
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