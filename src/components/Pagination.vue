<template>
    <div class="pagination">
        <span v-if="total > 0" v-bind:class="[currentIndex === 1? 'pagination-disable' : '', 'pagination-page-prev']" @click="() => onClick('prev')">&lt;</span>
        <span v-for="index in size" :key="index" v-bind:class="[currentIndex === index ? 'pagination-selected' : '', 'pagination-page']" @click="() => onClick('page', index)">{{ index }}</span>
        <span v-if="total > 0" v-bind:class="[currentIndex >= size ? 'pagination-disable' : '', 'pagination-page-next']" @click="() => onClick('next')">&gt;</span>
    </div>
</template>

<script>
    export default {
        name: 'Pagination',
        props: {
            total: Number,
            offset: Number,
            limit: Number
        },
        computed: {
            size: function () {
                return Math.ceil(this.total / this.limit)
            },
            currentIndex: function () {
                return (this.offset / this.limit) + 1
            }
        },
        methods: {
            onClick(type, index) {
                if (type === 'prev') {
                    this.$emit('pagination', this.offset - this.limit);
                } else if (type === 'next') {
                    this.$emit('pagination', this.offset + this.limit);
                } else if (type === 'page') {
                    this.$emit('pagination', (index - 1) * this.limit);
                }
            }
        }
    }
</script>

<style scoped>
    .pagination {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        padding-bottom: 50px;
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }

    .pagination-page,
    .pagination-page-prev,
    .pagination-page-next {
        color: #988c8c;
        font-size: 18px;
        padding: 0 5px 0 0;
        cursor: pointer;
    }

    .pagination-disable {
         pointer-events: none;
         opacity: 0.2;
     }

    .pagination-selected,
    .pagination-page:hover, .pagination-selected:focus,
    .pagination-page-prev:hover, .pagination-selected-prev:focus,
    .pagination-page-next:hover, .pagination-selected-next:focus {
         color: #f65261;
         text-decoration: none;
         cursor: pointer;
     }
</style>
