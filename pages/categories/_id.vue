<template>
    <div>
        <div class="row">
            <div class="col-12">
                <h1>Products of Category</h1>
            </div>
        </div>
        <ProductList :products='products'/>
    </div>
</template>

<script>
    import { mapState } from 'vuex';
    import types from '~/store/types';

    export default {
        computed: mapState({ 'products': state => state.products.list }),
        components: {
            ProductList: () => import("~/components/product_list")
        },
        created() {
            var self = this;
            this.$store.dispatch(types.PRODUCT_GET_LIST, {
                category_id: self.$route.params.id
            });
        }
    };
</script>