import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import image01 from '../assets/image-01.png';
import image02 from '../assets/image-02.png';
import image03 from '../assets/image-03.png';
import image04 from '../assets/image-04.png';
import image05 from '../assets/image-05.png';
import image06 from '../assets/image-06.png';
import image07 from '../assets/image-07.png';
import image08 from '../assets/image-08.png';

export default new Vuex.Store({

    state: {
        searchType: 'name',
        searchText: '',
        sortType: 'year',
        movies: [
            {
                id: 1,
                name: 'Kill Bill: Vol 1',
                genre: ['Action & Adventure'],
                year: 2003,
                duration: 111,
                rating: 5.3,
                image: image01,
                description: ''
            },
            {
                id: 2,
                name: 'Kill Bill: Vol 2',
                genre: ['Action & Adventure', 'Fiction'],
                year: 2004,
                duration: 136,
                rating: 4.3,
                image: image02,
                description: ''
            },
            {
                id: 3,
                name: 'Reservoir Dogs',
                genre: ['Action & Adventure'],
                year: 1992,
                duration: 99,
                rating: 3.3,
                image: image03,
                description: ''
            },
            {
                id: 4,
                name: 'Pulp Fiction',
                genre: ['Action & Adventure'],
                year: 1994,
                duration: 154,
                rating: 5.3,
                image: image04,
                description: ''
            },
            {
                id: 5,
                name: 'Inseption',
                genre: ['Action & Adventure'],
                year: 2010,
                duration: 154,
                rating: 2.3,
                image: image05,
                description: ''
            },
            {
                id: 6,
                name: 'Avengers Infinity War',
                genre: ['Action & Adventure'],
                year: 2018,
                duration: 129,
                rating: 5.0,
                image: image06,
                description: ''
            },
            {
                id: 7,
                name: 'Four Rooms',
                genre: ['Action & Adventure'],
                year: 1995,
                duration: 99,
                rating: 4.3,
                image: image07,
                description: ''
            },
            {
                id: 8,
                name: 'Jackie Brown',
                genre: ['Action & Adventure'],
                year: 1997,
                duration: 154,
                rating: 2.3,
                image: image08,
                description: ''
            }
        ]
    },

    getters: {
        doneMovies: state => {
            let movies = [...state.movies];

            const searchKey = state.searchType;
            const searchText = state.searchText;
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

            const sortKey = state.sortType;
            return movies.sort(function(movie1, movie2) {
                const x = movie1[sortKey];
                const y = movie2[sortKey];
                return ((x < y) ? -1 : ((x > y) ? 1 : 0));
            });
        }
    },

    mutations: {
        APPLY_SEARCH_TYPE(state, searchType) {
            state.searchType = searchType;
        },
        APPLY_SEARCH_TEXT(state, searchText) {
            state.searchText = searchText;
        },
        APPLY_SORT_TYPE(state, sortType) {
            state.sortType = sortType;
        },
    },

    actions: {
        applySearchType(context, payload) {
            context.commit('APPLY_SEARCH_TYPE', payload);
        },
        applySearchText(context, payload) {
            context.commit('APPLY_SEARCH_TEXT', payload);
        },
        applySortType(context, payload) {
            context.commit('APPLY_SORT_TYPE', payload);
        }
    }

});
