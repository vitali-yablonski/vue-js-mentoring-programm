<template>
    <div class="sort-panel">
        <p class="sort-panel__text">{{count}} movies found</p>
        <div class="sort-panel__controls">
            <span class="sort-panel__text">SORT BY</span>
            <Button :active="type === 'year'" v-on:click="onClick1">RELEASE DATE</Button>
            <Button :active="type === 'rating'" v-on:click="onClick2">RATING</Button>
        </div>
    </div>
</template>

<script>
    import Button from './Button.vue'
    export default {
        name: 'SortPanel',
        props: {
            count: Number,
            type: String
        },
        components: {
            Button
        },
        methods: {
            onClick1: function () {
                this.$emit('sort', 'year');
            },
            onClick2: function () {
                this.$emit('sort', 'rating');
            }
        }
    }
</script>

<style scoped>
    .sort-panel {
        background-color: #555;
        padding: 15px 75px;
        display: flex;
        align-items: center;
    }
    .sort-panel__text {
        flex: 1;
        font-family: Avenir, Helvetica, Arial, sans-serif;
        font-size: 18px;
        font-weight: 500;
        color: #fff;
        margin: 10px 20px 10px 0;
    }
    .sort-panel__controls {
        display: flex;
        align-items: center;
    }
</style>
