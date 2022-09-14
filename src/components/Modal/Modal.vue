<template>
    <div class="modal">
        <div @click="close" class="modal__blur"></div>
        <perfect-scrollbar class="modal__wrap">
            <div @click="close" class="modal__close">
                <span></span>
                <span></span>
            </div>
            <div class="modal__title">Добавить описание</div>
            <div class="modal__body">
                <input v-model.trim="title" type="text" class="field" placeholder="Заголовок">
                <textarea v-model.trim="description" class="textarea" placeholder="Описание"></textarea>
            </div>
            <div class="modal__footer">
                <button @click="add" class="modal__btn btn">Добавить</button>
            </div>
        </perfect-scrollbar>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                title: '',
                description: ''
            }
        },
        methods: {
            close() {
                this.$emit('closeModal', true)
            },
            add() {
                if (!this.title) return
                if (!this.description) return

                let newItem = {
                    id: new Date() + Math.random(),
                    isCheck: false,
                    title: this.title,
                    description: this.description
                }

                this.$emit('addCheck', newItem)
                this.close()
            }
        }
    }
</script>

<style lang="scss" scoped>
    .modal {
        display: flex;
        position: fixed;
        z-index: 20;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        padding: 30px;

        &__blur {
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            background-color: rgba(0, 0, 0, 0.8);
        }

        &__wrap {
            position: relative;
            margin: auto;
            background: #252E42;
            border-radius: 20px;
            padding: 30px;
            max-height: 80%;
            overflow: auto;
        }

        &__title {
            font-size: 28px;
            color: #fff;
            font-weight: 700;
            text-align: center;
            margin-bottom: 15px;
        }

        &__btn {
            width: 100%;
            margin-top: 15px;
            padding: 10px 30px;
        }

        &__close {
            position: absolute;
            top: 10px;
            right: 10px;
            width: 30px;
            height: 30px;
            cursor: pointer;

            &:hover {
                span {
                    background-color: #c0b9b9;
                }
            }

            & span {
                position: absolute;
                top: 14px;
                left: 8px;
                width: 15px;
                height: 2px;
                background-color: #fff;

                &:first-child {
                    transform: rotate(45deg);
                }

                &:last-child {
                    transform: rotate(-45deg);
                }
            }
        }
    }
</style>