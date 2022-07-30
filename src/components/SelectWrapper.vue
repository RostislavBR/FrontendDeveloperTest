<template>
    <select class="select-wrapper">
        <option>По умолчанию</option>
        <option>Пункт 2</option>
    </select>
</template>

<script>
    export default {
        name: "HeaderRightPartSort"
    }
</script>

<style lang="scss">
.select-wrapper {
    width: 121.49px;
    max-height: 36px;
    font-size: $formFontSize;
    color: $greyColor;
    background: $formBackground;
    border: none;
    border-radius: $borderRadius;
    box-shadow: $inputShadow;
    text-align: center;
}
</style>