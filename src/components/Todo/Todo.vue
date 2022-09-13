<template>
    <div class="todo">
        <div class="todo__head">
            <h1 class="todo__title">{{ name }}</h1>
            <button class="todo__add">Add</button>
        </div>
        <div class="todo__body">
            <TodoList
                v-for="item in list"
                :key="item.id"
                :item="item"
            ></TodoList>
        </div>
        <div class="todo__footer">
            <p class="todo__copy">© 2022. Author Name</p>
        </div>
    </div>
</template>

<script>
import TodoList from "./TodoList.vue";
    export default {
        data() {
            return {
                name: "Todo list",
                list: [
                    {
                        id: 1,
                        title: "delectus aut autem",
                        description: "laboriosam mollitia et enim quasi adipisci quia provident illum",
                    },
                    {
                        id: 2,
                        title: "quo laboriosam deleniti aut qui",
                        description: "",
                    },
                    {
                        id: 3,
                        title: "laboriosam mollitim quasi adipisci quia provident illum",
                        description: "",
                    },
                    {
                        id: 4,
                        title: " sunt dtatum",
                        description: "accusamus eos facilis sint et aut voluptatem",
                    },
                    {
                        id: 5,
                        title: "ellenres architecto voluptatum",
                        description: "accusamus eos facilis sint et aut voluptatem",
                    },
                    {
                        id: 6,
                        title: "epellendus sunt dolores arcoluptatum",
                        description: "accusamus eos sint et aut voluptatem",
                    },
                    {
                        id: 7,
                        title: "delectus aut autem",
                        description: "laboriosam mollitia episci quia provident illum",
                    },
                ]
            }
        },
        components: { TodoList }
    }
</script>

<style lang="scss" scoped>

</style>