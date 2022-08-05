<template>
    <button class="delete-button" @click="clickButton" ref="deleteButton"></button>
</template>

<script>
    import { mapMutations } from  "vuex";
    import gsap from "gsap";

    export default {
        name: "DeleteButton",
        props: ['id'],
        methods: {
            ...mapMutations({deleteProduct: "deleteProduct"}),
            clickButton() {
                gsap.to(this.$parent.$el, {
                    duration: .2,
                    delay: .1,
                    opacity: 0,
                    onComplete:() => {
                        this.deleteProduct(this.id);
                    }
                });
            }
        },
    }
</script>

<style lang="scss">
    .delete-button {
        position: absolute;
        top: -10px;
        right: -4px;
        width: 32px;
        min-height: 32px;
        background-image: url("../image/delete.svg");
        background-repeat: no-repeat;
        background-position: center;
        background-color: $pinkColor;
        border: none;
        border-radius: $buttonRadius;
        opacity: 0;
        pointer-events: none;
        transition: opacity 0.4s ease;
        cursor: url("../image/Vector.svg") 2 2, pointer;
    }
</style>