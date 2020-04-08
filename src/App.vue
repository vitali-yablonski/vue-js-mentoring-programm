<template>
    <div id="app">
        <Page :movies="movies"/>
    </div>
</template>

<script>
import Page from './pages/Page.vue';
import movies from './store/movies';
export default {
    name: 'App',
    components: {
        Page
    },
    data: () => {
        return {
            movies: movies
        }
    }
}
</script>

<style>
  html, body, #app {
    background-color: #232323;
    height: 100%;
    width: 100%;
    padding: 0;
    margin: 0;
  }
</style>
