<template>
    <div class="form-wrapper">
        <form class="form" @submit.prevent="submit">
            <div class="form-text-wrapper">
                <label class="form-text label">
                    <span class="error" v-if="$v.title.$invalid && submitError">Поле является обязательным</span>
                    <span class="form-description require">Наименование товара</span>
                    <input type="text" class="form-text-input input" v-model.trim="$v.title.$model"
                           placeholder="Введите наименование товара">
                </label>
            </div>
            <div class="form-textarea-wrapper">
                <label class="form-textarea label">
                    <span class="form-description">Описание товара</span>
                    <textarea class="form-textarea-input input" v-model.trim="$v.description.$model"
                              placeholder="Введите описание товара"></textarea>
                </label>
            </div>
            <div class="form-image-wrapper">
                <label class="form-image label">
                    <span class="error" v-if="$v.image.$invalid && submitError">Поле является обязательным</span>
                    <span class="form-description require">Ссылка на изображение товара</span>
                    <input type="text" class="form-image-input input" v-model.trim="$v.image.$model"
                           placeholder="Введите ссылку">
                </label>
            </div>
            <div class="form-price-wrapper">
                <label class="form-price label">
                    <span class="error" v-if="$v.price.$invalid && submitError">Поле является обязательным</span>
                    <span class="form-description require">Цена товара</span>
                    <input type="text" class="form-price-input input" v-model.trim="$v.price.$model"
                           placeholder="Введите цену">
                </label>
            </div>
            <div class="button-wrapper">
                <button class="form-button" type="submit" :disabled="$v.$invalid">Добавить товар</button>
            </div>
        </form>
    </div>
</template>

<script>
    import {required, maxLength, minLength, between} from 'vuelidate/lib/validators';
    import {mapMutations, mapGetters} from "vuex";

    export default {
        name: "MainForm",
        data() {
            return {
                id: null,
                title: null,
                description: null,
                image: null,
                price: null,
                submitError: false,
            }
        },
        validations: {
            title: {
                required,
                minLength: minLength(3),
                maxLength: maxLength(50),
            },
            description: {
                minLength: minLength(0),
                maxLength: maxLength(1000),
            },
            image: {
                required
            },
            price: {
                required,
                between: between(100, 100000)
            },
            reset: true,
        },
        methods: {
            ...mapMutations({setProducts: 'setProducts'}),
            submit() {
                this.$v.$invalid ? this.submitError = true : this.setProducts({
                    id: this.getProducts.length + Math.round(Math.random()),
                    title: this.title,
                    description: this.description,
                    image: this.image,
                    price: this.price,
                });
            },
        },
        computed: {
            ...mapGetters({getProducts: 'getProducts'})
        },
    }
</script>

<style lang="scss">
    .form {
        max-width: 332px;
        max-height: 440px;
        background: $formBackground;
        padding: 24px;
        margin: 0 16px 0 0;
        box-shadow: $boxShadow;
        border-radius: $borderRadius;

        .label {
            display: flex;
            flex-direction: column;
            margin: 0 0 16px 0;

            .form-description {
                position: relative;
                display: block;
                font-size: $littleFontSize;
                font-weight: $normalFontWeight;
                line-height: $littleLineHeight;
                letter-spacing: -0.02em;
                color: $darkColor;
                margin: 0 0 4px 0;
            }
            .require:after {
                content: '';
                width: 4px;
                height: 4px;
                background: pink;
                border-radius: 4px;
                position: absolute;
            }
            .error {
                font-size: 8px;
                color: $pinkColor;
                margin: 0 0 2px 0;
            }
        }

        .form-price {
            margin: 0 0 24px 0;
        }

        .input {
            max-width: 284px;
            font-size: $formFontSize;
            font-weight: $normalFontWeight;
            color: $greyColor;
            padding: 10px 0 10px 16px;
            border: none;
            border-radius: $borderRadius;
            box-shadow: $inputShadow;
            outline: none;
        }

        .form-textarea-input {
            padding-bottom: 0;
            min-height: 98px;
            resize: none;
        }

        .form-button {
            display: block;
            width: 284px;
            font-size: $formFontSize;
            font-weight: $bolderFontWeight;
            color: $whiteColor;
            background: $greenColor;
            padding: 10px 0;
            border: none;
            border-radius: $buttonRadius;
            outline: none;

            &:disabled {
                background: $formButtonBackground;
                color: $greyColor;
            }
        }
    }
</style>