<template>
    <div class="form-wrapper">
        <form class="form" @submit.prevent="onSubmit">
            <div class="form-text-wrapper">
                <label class="form-text label">
                    <span class="form-description">Наименование товара</span>
                    <input type="text" class="form-text-input input" value="Введите наименование товара">
                </label>
            </div>
            <div class="form-textarea-wrapper">
                <label class="form-textarea label">
                    <span class="form-description">Описание товара</span>
                    <input type="textarea" class="form-textarea-input input" value="Введите описание товара">
                </label>
            </div>
            <div class="form-image-wrapper">
                <label class="form-image label">
                    <span class="form-description">Ссылка на изображение товара</span>
                    <input type="text" class="form-image-input input" value="Введите ссылку">
                </label>
            </div>
            <div class="form-price-wrapper">
                <label class="form-price label">
                    <span class="form-description">Цена товара</span>
                    <input type="text" class="form-price-input input" value="Введите цену">
                </label>
            </div>
            <div class="button-wrapper">
                <button class="form-button" type="submit">Добавить товар</button>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        name: "MainForm",
        methods: {
            onSubmit() {
                console.log('form')
            },
        }
    }
</script>

<style lang="scss">
    .form {
        max-width: 332px;
        max-height: 440px;
        background: $formBackground;
        padding: 24px;
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
        background: $formButtonBackground;
        padding: 10px 0;
        border: none;
        border-radius: $buttonRadius;
        outline: none;
    }
</style>