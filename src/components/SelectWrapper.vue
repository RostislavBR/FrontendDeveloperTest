<template>
    <div class="select-wrapper">
        <p class="select-title">{{ defaultSort }}</p>
        <div class="options">
            <p v-for="option in options" :key="option.value" @click="selectOption(option)"
               class="option-item">
                {{ option.name }}
            </p>
        </div>
    </div>
</template>

<script>
    import {mapMutations} from "vuex";

    export default {
        name: "SelectWrapper",
        data() {
            return {
                defaultSort: 'По умолчанию'
            }
        },
        props: ['options'],
        methods: {
            ...mapMutations(['sortProducts']),
            sortByMin(first, second) {
                console.log("min")
                return first.price - second.price;
            },
            sortByMax(first, second) {
                console.log("max")
                return second.price - first.price;
            },
            sortByName(first, second) {
                return second.title.length - first.title.length;
            },
            selectOption({name}) {
                console.log('name', name)
                switch (name) {
                    case "По убыванию":
                        this.defaultSort = name;
                        console.log("min")
                        this.sortProducts(this.sortByMin);
                        break;
                    case "По возрастанию":
                        console.log("max")
                        this.defaultSort = name;
                        this.sortProducts(this.sortByMax);
                        break;
                    case "По наименованию":
                        this.defaultSort = name;
                        this.sortProducts(this.sortByName);
                        break;
                    default:
                        break;
                }
            },
        },
    }
</script>

<style lang="scss">
    .select-wrapper {
        position: relative;
        width: 121.49px;
        /*min-height: 36px;*/
        background: $formBackground;

        .select-title {
            font-size: $formFontSize;
            text-align: center;
            color: $greyColor;
            border-radius: $borderRadius;
            border: none;
            box-shadow: $inputShadow;
            padding: 11px 0;
            cursor: pointer;
        }

        .options {
            position: absolute;
            top: 40px;
            right: 0;
            width: 100%;
            background: $formBackground;
            border: none;
            border-radius: $borderRadius;
            box-shadow: $inputShadow;
            cursor: pointer;
            z-index: 100;
        }

        .option-item {
            font-size: $formFontSize;
            text-align: center;
            color: $greyColor;
            padding: 11px 0;
            border-bottom: 1px solid rgba(180, 180, 180, 0.1);

            &:last-child {
                border: none;
            }
        }
    }
</style>