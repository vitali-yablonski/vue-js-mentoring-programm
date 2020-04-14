<template>
    <div id="app">
        <Page/>
    </div>
</template>

<script>
import Page from './pages/Page.vue';
export default {
    name: 'App',
    components: {
        Page
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
