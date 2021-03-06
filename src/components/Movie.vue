<template>
    <div class="movie" v-on:click="onClick">
        <img class="movie__image"
             :src="lazyLoadImage"
             v-hasIntersectionWithElement="'.page__body'"
             @intersection="intersection($event)"
        />
        <div class="movie__content">
            <div class="movie__name">
                <p class="movie__text">{{ name }}</p>
                <p class="movie__eyebrow">{{ genreText }}</p>
            </div>
            <div class="movie__details">
                <p class="movie__text">
                    <Pill>{{ year }}</Pill>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
    import Pill from './Pill.vue'
    import placeholder from '../assets/placeholder.png';
    export default {
        name: 'Movie',
        components: {
            Pill
        },
        props: {
            id: Number,
            name: String,
            genre: Array,
            year: String,
            rating: Number,
            image: String,
            description: String
        },
        data: () => ({
            lazyLoadImage: placeholder
        }),
        computed: {
            genreText: function () {
                return (this.genre || []).join(', ')
            }
        },
        methods: {
            onClick() {
                this.$emit('select', this.id);
            },
            intersection() {
                this.lazyLoadImage = this.image;
            }
        },
    }
</script>

<style scoped>
    .movie {
        position: relative;
        box-sizing: border-box;
        padding: 25px;
        width: 33.33%;
        display: flex;
        flex-direction: column;
    }
    .movie:hover:after {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: 0.2;
        content: '';
        background-color: #fff;
        cursor: pointer;
    }
    .movie__image {
        flex: 1;
        width: 100%;
        height: auto;
    }
    .movie__content {
        display: flex;
        flex-direction: row;
    }
    .movie__name {
        flex: 1;
    }
    .movie__details {
    }
    .movie__text, .movie__eyebrow {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        padding: 0;
        margin: 0;
    }
    .movie__text {
        color: #fff;
        font-size: 20px;
        margin: 20px 0 10px 0;
    }
    .movie__eyebrow {
        color: #424242;
        font-size: 16px;
    }
    @media only screen and (max-width: 600px) {
        .movie {
            width: 100%;
        }
    }
    @media only screen and (min-width: 600px) {
        .movie {
            width: 50%;
        }
    }
    @media only screen and (min-width: 768px) {
        .movie {
            width: 33.33%;
        }
    }
    @media only screen and (min-width: 992px) {
        .movie {
            width: 33.33%;
        }
    }
    @media only screen and (min-width: 1200px) {
        .movie {
            width: 25%;
        }
    }
    @media only screen and (min-width: 1600px) {
        .movie {
            width: 20%;
        }
    }
</style>
