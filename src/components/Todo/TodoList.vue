<template>
    <ul class="todo-list">
        <TodoItem
            class="todo-list__item"
            :item="item"
        ></TodoItem>
    </ul>
</template>

<script>
import TodoItem from "./TodoItem.vue";
    export default {
        props: {
            item: {
                type: Object,
                default: () => {},
            }
        },
        components: { TodoItem }
    }
</script>

<style lang="scss" scoped>

</style>