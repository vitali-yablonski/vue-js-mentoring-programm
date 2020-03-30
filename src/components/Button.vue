<template>
    <button class="button" :class="{ 'button__active': active }" @click="onClick">
        <slot></slot>
    </button>
</template>

<script>
    export default {
        name: 'Button',
        props: {
            active: Boolean,
        },
        methods: {
            onClick() {
                this.$emit('click')
            }
        }
    }
</script>

<style scoped>
    .button {
        border: 1px solid #424242;
        background-color: #424242;
        color: #fff;
        cursor: pointer;
        font-size: 15px;
        padding: 10px 20px;
        outline: none;
    }
    .button:active {
        outline: none;
        border: none;
    }
    .button:focus {
        outline: none;
    }
    .button__active {
        border: 1px solid #f65261;
        background-color: #f65261;
    }
</style>
