<template>
    <section class="page">
        <header class="page__header" :style="{ backgroundImage: `url(${backgroundImage})` }">
            <Button :active="true" v-on:click="onClickHome">HOME</Button>
        </header>
        <main class="page__body">
            <Movie
                :id="movie.id"
                :name="movie.name"
                :genre="movie.genre"
                :year="movie.year"
                :rating="movie.rating"
                :image="movie.image"
                :description="movie.description"
            />
        </main>
    </section>
</template>

<script>
    import { mapState, mapActions } from 'vuex';
    import backgroundImage from '../assets/bg.png';
    import Movie from '../components/Movie.vue'
    import Button from '../components/Button.vue';
    export default {
        name: 'Details',
        components: {
            Movie,
            Button
        },
        data: function () {
            return {
                backgroundImage: backgroundImage,
            }
        },
        methods: {
            ...mapActions(['fetchMovie']),
            onClickHome: function () {
                this.$router.push({ name: 'home' })
            },
        },
        computed: {
            ...mapState(['movie'])
        },
        created() {
            this.fetchMovie(this.$route.params.id);
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
        align-items: center;
        justify-content: center;
    }
    .page__header .button {
        width: 150px;
    }
    .page__body {
        flex: 1;
        padding: 50px 50px;
        box-sizing: border-box;
        overflow: auto;
    }
</style>
