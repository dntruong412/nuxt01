<template>
    <div class="row">
        <div class="col-12">
            <h1>Categories</h1>
        </div>
        <div class="col-3 mb-2" v-for="cate in categories" v-bind:key="cate.id">
            <div class="card">
                <div class="card-body">
                    <router-link :to="{ name: 'categories-id', params: { id: cate.id }}">{{cate.name}}</router-link>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapState } from 'vuex';
import types from '~/store/types';

export default {
    props: ['id'],
    computed: mapState({ 'categories': state => state.categories.list }),
    created() {
        this.$store.dispatch(types.CATEGORY_GET_ALL);
    }
};

</script>
