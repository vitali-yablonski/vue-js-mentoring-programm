import Vue from 'vue';
import Vuex from 'vuex';
import MoviesAPI from '../api/movies';

Vue.use(Vuex);

export default new Vuex.Store({

    state: {
        searchText: '',
        searchType: 'name',
        sortType: 'year',
        movie: {},
        movies: [],
        totalMovies: 0,
        offsetMovies: 0,
        limitMovies: 80
    },

    mutations: {
        FETCH_MOVIE(state, payload) {
            state.movie = payload.data;
        },
        FETCH_MOVIES(state, payload) {
            state.movies = payload.data;
            state.totalMovies = payload.total;
            state.offsetMovies = payload.offset;
            state.limitMovies = payload.limit;
        },
        APPLY_SEARCH_TEXT(state, searchText) {
            state.searchText = searchText;
        },
        APPLY_SEARCH_TYPE(state, searchType) {
            state.searchType = searchType;
        },
        APPLY_SORT_TYPE(state, sortType) {
            state.sortType = sortType;
        },
        APPLY_OFFSET_MOVIES(state, offsetMovies) {
            state.offsetMovies = offsetMovies;
        },
    },

    actions: {
        fetchMovie(context, id) {
            MoviesAPI.fetchMovieById({
                id,
                callback: (payload) => {
                    context.commit('FETCH_MOVIE', payload);
                }
            });
        },
        fetchMovies(context) {
            MoviesAPI.fetchMovies({
                search: context.state.searchText,
                searchBy: context.state.searchType,
                sortBy: context.state.sortType,
                offset: context.state.offsetMovies,
                limit: context.state.limitMovies,
                callback: (payload) => {
                    context.commit('FETCH_MOVIES', payload);
                }
            });
        },
        applySearchText(context, searchText) {
            context.commit('APPLY_SEARCH_TEXT', searchText);
            context.dispatch('fetchMovies');

        },
        applySearchType(context, searchType) {
            context.commit('APPLY_SEARCH_TYPE', searchType);
            context.dispatch('fetchMovies');
        },
        applySortType(context, sortType) {
            context.commit('APPLY_SORT_TYPE', sortType);
            context.dispatch('fetchMovies');
        },
        applyOffsetMovies(context, offsetMovies) {
            context.commit('APPLY_OFFSET_MOVIES', offsetMovies);
            context.dispatch('fetchMovies');
        }
    }

});
