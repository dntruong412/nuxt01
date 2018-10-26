<template>
    <div class="col-12">
        <ul class="pagination">
            <router-link 
                class="page-item"
                tag="li" 
                v-for="index in pagingObj['total_pages']" 
                v-bind:key="index" 
                :class="pagingObj.page == index ? 'active': ''" 
                :to="{ name: 'products-page-id', params: { id: index }}">
                <a class="page-link">{{index}}</a>
            </router-link>
        </ul>
    </div>
</template>

<script>
    export default {
        props: ['pagingObj', 'component'],
    };
</script>