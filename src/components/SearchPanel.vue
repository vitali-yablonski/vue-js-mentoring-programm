<template>
    <div class="search-panel">
        <div class="search-panel__controls">
            <input class="search-panel__input-control" v-model="text">
            <Button :active="true" class="search-panel__action- control" v-on:click="onClick3">SEARCH</Button>
        </div>
        <div class="search-panel__addons">
            <span class="search-panel__text">SEARCH BY</span>
            <Button :active="type === 'name'" v-on:click="onClick1">TITLE</Button>
            <Button :active="type === 'genre'" v-on:click="onClick2">GENRE</Button>
        </div>
    </div>
</template>

<script>
    import Button from './Button.vue'
    export default {
        name: 'SearchPanel',
        props: {
            type: String
        },
        components: {
            Button
        },
        data: function () {
            return {
                text: '',
            }
        },
        methods: {
            onClick1: function () {
                this.$emit('search', { searchType: 'name', isType: true });
            },
            onClick2: function () {
                this.$emit('search', { searchType: 'genre', isType: true });
            },
            onClick3: function () {
                this.$emit('search', { searchText: this.text, isText: true });
            }
        }
    }
</script>

<style scoped>
    .search-panel {
        flex: 1;
        display: flex;
        flex-direction: column;
    }
    .search-panel__controls {
        padding: 0 75px;
        flex: 3;
        display: flex;
        align-items: center;
    }
    .search-panel__input-control {
        flex: 1;
        background-color: #424242;
        color: #fff;
        border: none;
        margin: 0 10px 0 0;
        height: 30px;
        outline: none;
        font-size: 15px;
        padding: 5px;
    }
    .search-panel__addons {
        padding: 0 75px;
        flex: 2;
        display: flex;
        align-items: center;
    }
    .search-panel__text {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        font-size: 18px;
        font-weight: 500;
        color: #fff;
        margin: 10px 20px 10px 0;
    }
</style>
