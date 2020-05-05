<template>
    <section class="page">
        <img class="page__not-found" :src="notFound"/>
    </section>
</template>

<script>
    import notFound from '../assets/not-found.jpg';
    export default {
        name: 'NotFound',
        data: () => ({
            notFound
        }),
    }
</script>

<style scoped>
    .page {
        display: flex;
        flex-direction: column;
        height: 100%;
        background-color: #FFF;
        justify-content: center;
        align-items: center;
    }
    .page__not-found {
        width: 50%;
        height: auto;
    }
</style>
