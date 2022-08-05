<template>
    <div class="main-content-container">
        <MainForm/>
        <div class="grid-wrapper">
            <MainGrid ref="grid">
                <MainGridItem v-for="({ id, image, title, description, price }) in products" :key="id" :id="id"
                              :image="image" :title="title" :description="description" :price="price"/>
            </MainGrid>
        </div>
    </div>
</template>

<script>
    import MainForm from "@/components/MainForm";
    import MainGrid from "@/components/MainGrid";
    import MainGridItem from "@/components/MainGridItem";
    import {mapGetters} from "vuex";
    import gsap from "gsap";
    import {CSSRulePlugin, TweenLite} from "gsap/all"
    //
    gsap.registerPlugin(CSSRulePlugin);

    export default {
        name: "MainContent",
        components: {MainGridItem, MainGrid, MainForm},
        computed: {
            ...mapGetters({products: 'getProducts'}),
        },
        watch: {
            products(newProducts, oldProducts) {
                if (newProducts.length > oldProducts.length) {
                    this.animate(this.$refs.grid.$el.childNodes);
                }
            }
        },
        methods: {
            animate(el) {
                TweenLite.staggerFromTo(el, 2, {opacity: 0}, {opacity: 1}, 0.2);
            }
        },
        mounted() {
            this.animate(this.$refs.grid.$el.children);
        }
    }
</script>

<style lang="scss">
    .main-content-container {
        display: flex;
    }
</style>