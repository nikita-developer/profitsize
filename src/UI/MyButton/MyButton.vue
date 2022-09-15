<template>
    <button class="buttom">
        <slot></slot>
    </button>
</template>

<script>
    export default {
        name: 'MyButton'
    }
</script>

<style lang="scss">
    @import 'styles/my-button.scss'
</style>