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
    .todo-item {
        &__label {
            display: flex;
            align-items: center;
            cursor: pointer;

            &:hover {
                .todo-item__check {
                    background-color: rgba(255, 132, 105, 0.2);
                }

                .todo-item__title {
                    color: #FF8469;
                }
            }

            &.active {
                .todo-item__check {
                    background-color: #FF8469;

                    &::before {
                        display: block;
                    }
                }

                .todo-item__title {
                    text-decoration: line-through;
                }

                .todo-item__description {
                    text-decoration: line-through;
                }
            }
        }

        &__check {
            position: relative;
            width: 20px;
            height: 20px;
            background-color: #4F5565;
            border-radius: 6px;
            margin-right: 15px;
            flex-shrink: 0;

            &::before {
                display: none;
                position: absolute;
                top: 4px;
                left: 6px;
                content: '';
                width: 5px;
                height: 8px;
                border-right: 2px solid #fff;
                border-bottom: 2px solid #fff;
                transform: rotate(45deg);
            }
        }

        &__title {
            font-weight: 500;
            color: #fff;
        }

        &__description {
            font-size: 12px;
            color: #4F5565;
        }

        &:not(:last-child) {
            margin-bottom: 15px;
        }
    }
</style>