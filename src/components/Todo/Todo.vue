<template>
    <div class="todo">
        <div class="todo__wrap">
            <div class="todo__head">
                <h1 class="todo__title">{{ name }}</h1>
                <div class="todo__options">
                    <button @click="all" class="btn todo__all">{{allcheck ? 'All' : 'unAll'}}</button>
                    <button @click="remove" class="btn todo__remove">Remove</button>
                    <button @click="modal = true" class="btn todo__add">Add</button>
                </div>
            </div>
            <perfect-scrollbar class="todo__body">
                <ul class="todo-list">
                    <p v-if="!list.length" class="todo__info">Список пустой</p>
                    <TodoItem v-for="item in list" :key="item.id" :item="item" @is_check="is_check" class="todo-list__item"></TodoItem>
                </ul>
            </perfect-scrollbar>
        </div>
        <div class="todo__footer">
            <p class="todo__copy">© 2022. Author Name</p>
        </div>
    </div>
    <transition name="fade">
        <Modal v-if="modal" :modal="modal" @addCheck="addCheck" @closeModal="closeModal"></Modal>
    </transition>
</template>

<script>
    import TodoItem from "./TodoItem.vue";
    import Modal from "../Modal/Modal.vue";
    export default {
        data() {
            return {
                allcheck: true,
                modal: false,
                name: "Todo list",
                list: [{
                        id: 1,
                        isCheck: false,
                        title: "1 delectus aut autem",
                        description: "laboriosam mollitia et enim quasi adipisci quia provident illum",
                    },
                    {
                        id: 2,
                        isCheck: false,
                        title: "2 quo laboriosam deleniti aut qui",
                        description: "",
                    },
                    {
                        id: 3,
                        isCheck: false,
                        title: "3 laboriosam mollitim quasi adipisci quia provident illum",
                        description: "",
                    },
                    {
                        id: 4,
                        isCheck: false,
                        title: "4 sunt dtatum",
                        description: "accusamus eos facilis sint et aut voluptatem",
                    },
                    {
                        id: 5,
                        isCheck: false,
                        title: "5 ellenres architecto voluptatum",
                        description: "accusamus eos facilis sint et aut voluptatem",
                    },
                    {
                        id: 6,
                        isCheck: false,
                        title: "6 epellendus sunt dolores arcoluptatum",
                        description: "accusamus eos sint et aut voluptatem",
                    },
                    {
                        id: 7,
                        isCheck: false,
                        title: "7 delectus aut autem",
                        description: "laboriosam mollitia episci quia provident illum",
                    },
                    {
                        id: 8,
                        isCheck: false,
                        title: "8 delectus aut autem",
                        description: "laboriosam mollitia et enim quasi adipisci quia provident illum",
                    },
                    {
                        id: 9,
                        isCheck: false,
                        title: "9 quo laboriosam deleniti aut qui",
                        description: "",
                    },
                    {
                        id: 10,
                        isCheck: false,
                        title: "10 laboriosam mollitim quasi adipisci quia provident illum",
                        description: "",
                    },
                    {
                        id: 11,
                        isCheck: false,
                        title: "11 sunt dtatum",
                        description: "accusamus eos facilis sint et aut voluptatem",
                    },
                    {
                        id: 12,
                        isCheck: false,
                        title: "12 ellenres architecto voluptatum",
                        description: "accusamus eos facilis sint et aut voluptatem",
                    },
                    {
                        id: 13,
                        isCheck: false,
                        title: "13 epellendus sunt dolores arcoluptatum",
                        description: "accusamus eos sint et aut voluptatem",
                    },
                    {
                        id: 14,
                        isCheck: false,
                        title: "14 delectus aut autem",
                        description: "laboriosam mollitia episci quia provident illum",
                    },
                ]
            }
        },
        components: {
            TodoItem,
            Modal
        },
        methods: {
            is_check(item) {
                this.list.find(el => {
                    if (el.id == item.id) el.isCheck = !el.isCheck
                })
            },
            remove() {
                let result = []
                this.list.forEach(el => {
                    if (!el.isCheck) result.push(el)
                })
                this.list = result
            },
            closeModal() {
                this.modal = false
            },
            addCheck(item) {
                this.list.push(item)
            },
            all() {
                this.list.forEach(el => el.isCheck = !el.isCheck)
                this.allcheck = !this.allcheck
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import 'styles/main';
</style>