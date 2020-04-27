import Vue from 'vue';

const mapping = {
    id: 'id',
    name: 'title',
    genre: 'genres',
    year: 'release_date',
    rating: 'vote_average',
    image: 'poster_path',
    description: 'overview'
};

const transform = (movies = []) => (movies.map((movie) => ({
    id: movie[mapping.id],
    name: movie[mapping.name],
    genre: movie[mapping.genre],
    year: movie[mapping.year],
    rating: movie[mapping.rating],
    image: movie[mapping.image],
    description: movie[mapping.description]
})));

export default {
    fetchMovies({ search, searchBy, sortBy, sortOrder = 'desc', offset, limit, callback = () => {} }) {
        Vue.http.get('http://react-cdp-api.herokuapp.com/movies', {
            params: {
                search,
                searchBy: mapping[searchBy],
                sortBy: mapping[sortBy],
                sortOrder,
                offset,
                limit
            }
        }).then(response => {
            callback({
                ...response.data, data: transform(response.data.data)
            });
        }, () => {
            callback({
                data: [], total: 0, offset: 0, limit: 0
            });
        });
    },
};
