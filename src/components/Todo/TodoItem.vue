<template>
    <li class="todo-item">
        <label @click="$emit('is_check', item)" class="todo-item__label" :class="{'active': item.isCheck}">
            <div class="todo-item__check"></div>
            <div class="todo-item__content">
                <p class="todo-item__title">{{ item.title }}</p>
                <p class="todo-item__description">{{ item.description }}</p>
            </div>
        </label>
    </li>
</template>

<script>
    export default {
        props: {
            item: {
                type: Object,
                default: () => {},
            },
        },
    }
</script>

<style lang="scss" scoped>
    @import 'styles/todo-item';
</style>