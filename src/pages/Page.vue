<template>
    <section class="page">
        <header class="page__header" :style="{ backgroundImage: `url(${backgroundImage})` }">
            <SearchPanel
                :type="searchType"
                v-on:search="onSearch"
            />
            <SortPanel
                :count="selectedMovies.length"
                :type="sortType"
                v-on:sort="onSort"
            />
        </header>
        <main class="page__body">
            <Movies :movies="selectedMovies" />
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
    import { mapState } from 'vuex';
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
            onSearch: function (search) {
                if (search.isType) {
                    this.$store.commit('APPLY_SEARCH_TYPE', search.searchType);
                } else if (search.isText) {
                    this.$store.commit('APPLY_SEARCH_TEXT', search.searchText);
                }
            },
            onSort: function (sortType) {
                this.$store.commit('APPLY_SORT_TYPE', sortType);
            }
        },
        computed: {
            ...mapState(['searchType', 'searchText', 'sortType', 'movies']),
            selectedMovies: function () {
                let movies = [...this.movies];

                const searchKey = this.searchType;
                const searchText = this.searchText;
                if (searchKey && searchText) {
                    movies = movies.filter(function (movie) {
                        let filter = false;
                        if (Array.isArray(movie[searchKey])) {
                            filter = movie[searchKey].filter(function (m) { return m.toLowerCase().indexOf(searchText.toLowerCase()) > -1; }).length > 0;
                        } else {
                            filter = movie[searchKey].toLowerCase().indexOf(searchText.toLowerCase()) > -1;
                        }
                        return filter;
                    });
                }

                const sortKey = this.sortType;
                return movies.sort(function(movie1, movie2) {
                    const x = movie1[sortKey];
                    const y = movie2[sortKey];
                    return ((x < y) ? -1 : ((x > y) ? 1 : 0));
                });
            }
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
