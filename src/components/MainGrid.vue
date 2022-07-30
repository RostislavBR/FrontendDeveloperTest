<template>
    <div class="products-grid">
        <slot>
        </slot>
    </div>
</template>

<script>
    export default {
        name: "MainGrid"
    }
</script>

<style lang="scss">
    .products-grid {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(3, 2fr);
        grid-gap: 20px;
    }
</style>