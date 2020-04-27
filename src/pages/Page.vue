<template>
    <section class="page">
        <header class="page__header" :style="{ backgroundImage: `url(${backgroundImage})` }">
            <SearchPanel
                :type="searchType"
                v-on:search="onSearch"
            />
            <SortPanel
                :count="movies.length"
                :type="sortType"
                v-on:sort="onSort"
            />
        </header>
        <main class="page__body">
            <Movies :movies="movies" />
        </main>
        <footer class="page__footer">
            <span class="page__logo">netflix roulette</span>
        </footer>
    </section>
</template>

<script>
    import backgroundImage from '../assets/bg.png';
    import SearchPanel from '../components/SearchPanel.vue';
    import SortPanel from '../components/SortPanel.vue';
    import Movies from '../components/Movies.vue';
    import { mapState, mapActions } from 'vuex';
    export default {
        name: 'Page',
        components: {
            SearchPanel,
            SortPanel,
            Movies
        },
        data: function () {
            return {
                backgroundImage: backgroundImage,
            }
        },
        methods: {
            ...mapActions(['fetchMovies', 'applySearchType', 'applySearchText', 'applySortType']),
            onSearch: function (search) {
                if (search.isType) {
                    this.applySearchType(search.searchType);
                } else if (search.isText) {
                    this.applySearchText(search.searchText);
                }
            },
            onSort: function (sortType) {
                this.applySortType(sortType);
            }
        },
        computed: {
            ...mapState(['searchType', 'searchText', 'sortType', 'movies']),
        },
        created() {
            this.fetchMovies();
        }
    }
</script>

<style scoped>
    .page {
        display: flex;
        flex-direction: column;
        height: 100%;
        background-color: #232323;
    }
    .page__header {
        display: flex;
        flex-direction: column;
        height: 350px;
        background-position: center center;
        background-size: cover;
    }
    .page__body {
        flex: 1;
        padding: 50px 50px;
        box-sizing: border-box;
        overflow: auto;
    }
    .page__footer {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #424242;
        padding: 30px;
    }
    .page__logo {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        font-size: 20px;
        font-weight: 600;
        color: #f65261;
    }
</style>
