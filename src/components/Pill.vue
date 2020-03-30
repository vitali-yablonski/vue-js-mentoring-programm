<template>
    <span class="pill">
        <slot></slot>
    </span>
</template>

<script>
    export default {
        name: 'Pill',
    }
</script>

<style scoped>
    .pill {
        border: 1px solid #424242;
        border-radius: 3px;
        padding: 2px 17px;
        color: #fff;
    }
</style>
