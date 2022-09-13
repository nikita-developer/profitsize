<template>
    <li class="todo-item">
        <label class="todo-item__label">
            <div class="todo-item__result">
                <input type="checkbox" hidden>
                <div class="todo-item__check"></div>
            </div>
            <div class="todo-item__content">
                <p class="todo-item__title">{{ item.title }}</p>
                <p class="todo-item__description">{{ item.decription }}</p>
            </div>
        </label>
    </li>
</template>

<script>
    export default {
        props: {
            item: {
                type: Object,
                default: () => { },
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>