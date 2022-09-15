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
                <MyButton @click="add" class="modal__btn">Добавить</MyButton>
            </div>
        </perfect-scrollbar>
    </div>
</template>

<script>
    export default {
    data() {
        return {
            title: "",
            description: ""
        };
    },
    methods: {
        close() {
            this.$emit("closeModal", true);
        },
        add() {
            if (!this.title)
                return;
            if (!this.description)
                return;
            let newItem = {
                id: new Date() + Math.random(),
                isCheck: false,
                title: this.title,
                description: this.description
            };
            this.$emit("addCheck", newItem);
            this.close();
        }
    },
}
</script>

<style lang="scss" scoped>
    @import 'styles/main';
</style>