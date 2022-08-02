<template>
    <button class="delete-button" @click="clickButton"></button>
</template>

<script>
    import { mapMutations } from  "vuex";

    export default {
        name: "DeleteButton",
        props: ['id'],
        methods: {
            ...mapMutations({deleteProduct: "deleteProduct"}),
            clickButton() {
                this.deleteProduct(this.id);
            }
        },
    }
</script>

<style lang="scss">
    .delete-button {
        position: absolute;
        left: 310px;
        bottom: 400px;
        width: 32px;
        min-height: 32px;
        background-image: url("../image/delete.svg");
        background-repeat: no-repeat;
        background-position: center;
        background-color: $pinkColor;
        border: none;
        border-radius: $buttonRadius;
    }
</style>