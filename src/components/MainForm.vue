<template>
    <div class="form-wrapper">
        <form class="form" @submit.prevent="submit">
            <div class="form-text-wrapper">
                <label class="form-text label">
                    <span class="form-description">Наименование товара</span>
                    <input type="text" class="form-text-input input" v-model.trim="$v.title.$model">
                    <span class="error" v-if="$v.title.$invalid && submitError">error</span>
                </label>
            </div>
            <div class="form-textarea-wrapper">
                <label class="form-textarea label">
                    <span class="form-description">Описание товара</span>
                    <input type="textarea" class="form-textarea-input input" v-model.trim="$v.description.$model"
                           value="Введите описание товара">
                </label>
            </div>
            <div class="form-image-wrapper">
                <label class="form-image label">
                    <span class="form-description">Ссылка на изображение товара</span>
                    <input type="text" class="form-image-input input" v-model.trim="$v.image.$model"
                           value="Введите ссылку">
                    <span class="error" v-if="$v.image.$invalid && submitError">error</span>
                </label>
            </div>
            <div class="form-price-wrapper">
                <label class="form-price label">
                    <span class="form-description">Цена товара</span>
                    <input type="text" class="form-price-input input" v-model.trim="$v.price.$model"
                           value="Введите цену">
                    <span class="error" v-if="$v.price.$invalid && submitError">error</span>
                </label>
            </div>
            <div class="button-wrapper">
                <button class="form-button" type="submit">Добавить товар</button>
            </div>
        </form>
    </div>
</template>

<script>
    import {required, maxLength, minLength, between} from 'vuelidate/lib/validators';
    import {mapMutations} from "vuex";

    export default {
        name: "MainForm",
        data() {
            return {
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
                maxLength: maxLength(250),
            },
            image: {
                required
            },
            price: {
                required,
                between: between(100, 100000)
            }
        },
        methods: {
            ...mapMutations({setProducts: 'setProducts'}),
            submit() {
                this.$v.$invalid ? this.submitError = true : this.setProducts({
                    title: this.title,
                    description: this.description,
                    image: this.image,
                    price: this.price,
                })
            },
        }
    }
</script>

<style lang="scss">
    .form {
        max-width: 332px;
        background: $formBackground;
        padding: 24px;
        margin: 0 16px 0 0;
        box-shadow: $boxShadow;
        border-radius: $borderRadius;
    }

    .label {
        display: flex;
        flex-direction: column;
        margin: 0 0 16px 0;
    }

    .form-description {
        display: block;
        font-size: $littleFontSize;
        font-weight: $normalFontWeight;
        line-height: $littleLineHeight;
        color: $darkColor;
        margin: 0 0 4px 0;
    }

    .input {
        max-width: 284px;
        font-size: $formFontSize;
        font-weight: $normalFontWeight;
        color: $greyColor;
        padding: 10px 0;
        border: none;
        border-radius: $borderRadius;
        box-shadow: $inputShadow;
        outline: none;
    }

    .form-textarea-input {
        padding-top: 0;
        padding-bottom: 0;
        min-height: 108px;
    }

    .form-button {
        display: block;
        width: 284px;
        font-size: $formFontSize;
        font-weight: $bolderFontWeight;
        color: $greyColor;
        background: $greenColor;
        padding: 10px 0;
        border: none;
        border-radius: $buttonRadius;
        outline: none;

        &:disabled {
            background: $formButtonBackground;
        }
    }
</style>