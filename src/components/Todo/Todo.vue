<template>
    <div class="todo">
        <div class="todo__wrap">
            <div class="todo__head">
                <h1 class="todo__title">{{ name }}</h1>
                <button class="todo__add">Add</button>
            </div>
            <perfect-scrollbar class="todo__body">
                <ul class="todo-list">
                    <TodoItem v-for="item in list" :key="item.id" :item="item" @is_check="is_check" class="todo-list__item"></TodoItem>
                </ul>
            </perfect-scrollbar>
        </div>
        <div class="todo__footer">
            <p class="todo__copy">© 2022. Author Name</p>
        </div>
    </div>
</template>

<script>
    import TodoItem from "./TodoItem.vue";
    export default {
        data() {
            return {
                name: "Todo list",
                list: [{
                        id: 1,
                        isCheck: true,
                        title: "delectus aut autem",
                        description: "laboriosam mollitia et enim quasi adipisci quia provident illum",
                    },
                    {
                        id: 2,
                        isCheck: false,
                        title: "quo laboriosam deleniti aut qui",
                        description: "",
                    },
                    {
                        id: 3,
                        isCheck: true,
                        title: "laboriosam mollitim quasi adipisci quia provident illum",
                        description: "",
                    },
                    {
                        id: 4,
                        isCheck: false,
                        title: " sunt dtatum",
                        description: "accusamus eos facilis sint et aut voluptatem",
                    },
                    {
                        id: 5,
                        isCheck: true,
                        title: "ellenres architecto voluptatum",
                        description: "accusamus eos facilis sint et aut voluptatem",
                    },
                    {
                        id: 6,
                        isCheck: false,
                        title: "epellendus sunt dolores arcoluptatum",
                        description: "accusamus eos sint et aut voluptatem",
                    },
                    {
                        id: 7,
                        isCheck: true,
                        title: "delectus aut autem",
                        description: "laboriosam mollitia episci quia provident illum",
                    },
                    {
                        id: 8,
                        isCheck: true,
                        title: "delectus aut autem",
                        description: "laboriosam mollitia et enim quasi adipisci quia provident illum",
                    },
                    {
                        id: 9,
                        isCheck: false,
                        title: "quo laboriosam deleniti aut qui",
                        description: "",
                    },
                    {
                        id: 10,
                        isCheck: true,
                        title: "laboriosam mollitim quasi adipisci quia provident illum",
                        description: "",
                    },
                    {
                        id: 11,
                        isCheck: false,
                        title: " sunt dtatum",
                        description: "accusamus eos facilis sint et aut voluptatem",
                    },
                    {
                        id: 12,
                        isCheck: true,
                        title: "ellenres architecto voluptatum",
                        description: "accusamus eos facilis sint et aut voluptatem",
                    },
                    {
                        id: 13,
                        isCheck: false,
                        title: "epellendus sunt dolores arcoluptatum",
                        description: "accusamus eos sint et aut voluptatem",
                    },
                    {
                        id: 14,
                        isCheck: true,
                        title: "delectus aut autem",
                        description: "laboriosam mollitia episci quia provident illum",
                    },
                ]
            }
        },
        components: {
            TodoItem
        },
        methods: {
            is_check(item) {
                this.list.find(el => {
                    if (el.id == item.id) el.isCheck = !el.isCheck
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
    .todo {
        &__wrap {
            position: relative;
            width: 420px;
            padding: 30px;
            background: #252E42;
            box-shadow: 0px 14px 34px rgba(0, 0, 0, 0.25);
            border-radius: 20px 0px 40px;
        }

        &__head {
            display: flex;
            justify-content: space-between;
            margin-bottom: 30px;
        }

        &__body {
            overflow: auto;
            height: 418px;
            padding-right: 15px;
        }

        &__title {
            font-size: 28px;
            color: #fff;
            font-weight: 700;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }

        &__add {
            padding: 5px 10px;
            background-color: #FF8469;
            border-radius: 7px;
            font-weight: 500;
            font-size: 14px;
            text-transform: uppercase;
            border: none;
            cursor: pointer;
            color: #fff;

            &:hover {
                background: #D95133;
            }
        }

        &__copy {
            margin-top: 30px;
            color: #414B62;
            font-weight: 500;
            text-align: center;
        }
    }
</style>