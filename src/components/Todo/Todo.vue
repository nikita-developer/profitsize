<template>
    <div class="todo">
        <div class="todo__wrap">
            <div class="todo__head">
                <h1 class="todo__title">{{ name }}</h1>
                <div class="todo__options">
                    <MyButton class="todo__all" @click="all">{{allcheck ? 'unAll' : 'All'}}</MyButton>
                    <MyButton class="todo__remove" @click="remove">Remove</MyButton>
                    <MyButton class="todo__add" @click="modal = true">Add</MyButton>
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
        <Modal v-if="modal" @addCheck="addCheck" @closeModal="closeModal"></Modal>
    </transition>
</template>

<script>
    import TodoItem from "./TodoItem.vue";
    import Modal from "../Modal/Modal.vue";
    export default {
        data() {
            return {
                allcheck: false,
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
                this.addLocalData()
            },
            remove() {
                let result = []
                this.list.forEach(el => {
                    if (!el.isCheck) result.push(el)
                })
                this.list = result
                this.addLocalData()
                this.allcheck = false
            },
            closeModal() {
                this.modal = false
                this.addLocalData()
            },
            addCheck(item) {
                this.list.push(item)
                this.addLocalData()
            },
            all() {
                if (this.list.length) {
                    this.allcheck ? this.list.forEach(el => el.isCheck = false) : this.list.forEach(el => el.isCheck = true)
                    this.allcheck = !this.allcheck
                }
            },
            addLocalData() {
                localStorage.setItem('Todo list', JSON.stringify(this.list));
            }
        },
        beforeMount() {
            if (localStorage.getItem('Todo list')) {
                this.list = JSON.parse(localStorage.getItem('Todo list'))
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import 'styles/main';
</style>