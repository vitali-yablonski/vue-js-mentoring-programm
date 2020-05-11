<template>
    <div class="movies">
        <Movie
            v-for="movie in movies"
            :key="movie.id"
            :id="movie.id"
            :name="movie.name"
            :genre="movie.genre"
            :year="movie.year"
            :rating="movie.rating"
            :image="movie.image"
            :description="movie.description"
            v-on:select="onSelect"
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
        },
        methods: {
            onSelect(id) {
                this.$emit('select', id);
            }
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
