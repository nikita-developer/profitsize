<template>
    <div class="todo">
        <div class="todo__wrap">
            <div class="todo__head">
                <h1 class="todo__title">{{ name }}</h1>
                <div class="todo__options">
                    <button
                        @click="remove"
                        class="btn todo__remove"
                    >Remove</button>
                    <button
                        @click="modal = true"
                        class="btn todo__add"
                    >Add</button>
                </div>
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
    <Modal
        v-if="modal"
        :modal="modal"
        @addCheck="addCheck"
        @closeModal="closeModal"
    ></Modal>
</template>

<script>
    import TodoItem from "./TodoItem.vue";
    import Modal from "../Modal/Modal.vue";
    export default {
        data() {
            return {
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
                        isCheck: true,
                        title: "3 laboriosam mollitim quasi adipisci quia provident illum",
                        description: "",
                    },
                    {
                        id: 4,
                        isCheck: true,
                        title: "4 sunt dtatum",
                        description: "accusamus eos facilis sint et aut voluptatem",
                    },
                    {
                        id: 5,
                        isCheck: true,
                        title: "5 ellenres architecto voluptatum",
                        description: "accusamus eos facilis sint et aut voluptatem",
                    },
                    {
                        id: 6,
                        isCheck: true,
                        title: "6 epellendus sunt dolores arcoluptatum",
                        description: "accusamus eos sint et aut voluptatem",
                    },
                    {
                        id: 7,
                        isCheck: true,
                        title: "7 delectus aut autem",
                        description: "laboriosam mollitia episci quia provident illum",
                    },
                    {
                        id: 8,
                        isCheck: true,
                        title: "8 delectus aut autem",
                        description: "laboriosam mollitia et enim quasi adipisci quia provident illum",
                    },
                    {
                        id: 9,
                        isCheck: true,
                        title: "9 quo laboriosam deleniti aut qui",
                        description: "",
                    },
                    {
                        id: 10,
                        isCheck: true,
                        title: "10 laboriosam mollitim quasi adipisci quia provident illum",
                        description: "",
                    },
                    {
                        id: 11,
                        isCheck: true,
                        title: "11 sunt dtatum",
                        description: "accusamus eos facilis sint et aut voluptatem",
                    },
                    {
                        id: 12,
                        isCheck: true,
                        title: "12 ellenres architecto voluptatum",
                        description: "accusamus eos facilis sint et aut voluptatem",
                    },
                    {
                        id: 13,
                        isCheck: true,
                        title: "13 epellendus sunt dolores arcoluptatum",
                        description: "accusamus eos sint et aut voluptatem",
                    },
                    {
                        id: 14,
                        isCheck: true,
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
                if(this.list) {
                    let listData = this.list.find((el, index) => {
                        if(el.isCheck) this.list.splice(index, 1)
                    })
                    this.list = listData
                }
            },
            closeModal() {
                this.modal = false
            },
            addCheck(item) {
                this.list.push(item)
            }
        }
    }
</script>

<style lang="scss" scoped>
    .todo {
        position: relative;
        z-index: 1;
        margin: auto;

        &::after {
            position: absolute;
            z-index: -1;
            top: -15px;
            left: 1px;
            width: 100%;
            max-width: 395px;
            height: 67px;
            background: linear-gradient(180deg, #31394D 0%, #091739 100%);
            border-radius: 20px;
            transform: rotate(-2.32deg);
            content: '';
        }

        &::before {
            position: absolute;
            z-index: -1;
            top: -25px;
            left: 3px;
            width: 100%;
            max-width: 341px;
            height: 85px;
            background: linear-gradient(180deg, #4F5565 0%, #000000 53.65%);
            border-radius: 20px;
            transform: rotate(-4.48deg);
            content: '';
        }

        &__wrap {
            z-index: 1;
            width: 420px;
            padding: 30px;
            background: #252E42;
            box-shadow: 0px 14px 34px rgba(0, 0, 0, 0.25);
            border-radius: 20px 0px 40px;
        }

        &__head {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 30px;
        }

        &__options {
            margin-left: 15px;
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
            margin-left: 15px;
        }

        &__copy {
            margin-top: 30px;
            color: #414B62;
            font-weight: 500;
            text-align: center;
        }

        @media (max-width: 480px) {
            .todo {
                &__wrap {
                    width: 100%;
                }
            }
        }
    }
</style>