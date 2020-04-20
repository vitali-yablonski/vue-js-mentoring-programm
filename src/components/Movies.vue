<template>
    <div class="movies">
        <Movie
            v-for="movie in movies"
            :key="movie.id"
            :name="movie.name"
            :genre="movie.genre"
            :year="movie.year"
            :duration="movie.duration"
            :rating="movie.rating"
            :image="movie.image"
            :description="movie.description"
        />
    </div>
</template>

<script>
    import Movie from './Movie.vue'
    export default {
        name: 'Movies',
        components: {
            Movie
        },
        props: {
            movies: Array
        }
    }
</script>

<style scoped>
    .movies {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }
</style>
