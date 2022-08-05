<template>
    <div class="head-container">
        <HeadTitle/>
        <SelectWrapper :options="options"/>
    </div>
</template>

<script>
    import HeadTitle from "@/components/HeadTitle";
    import SelectWrapper from "@/components/SelectWrapper";

    export default {
        name: "Head",
        props: ['defaultSort'],
        data() {
            return {
                options: [
                    {name: 'По убыванию', value: 'max'},
                    {name: 'По возрастанию', value: 'min'},
                    {name: 'По наименованию', value: 'name'},
                ],
            }
        },
        components: {HeadTitle, SelectWrapper},
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