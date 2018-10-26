<template>
    <div>
        <div class="row">
            <div class="col-12">
                <h1>Products</h1>
            </div>
        </div>
        <ProductList :products='products'/>
    </div>
</template>

<script>
    import { mapState } from "vuex";
    import types from "~/store/types";

    export default {
        computed: mapState({
            products: state => state.products.list
        }),
        components: {
            ProductList: () => import("~/components/product_list")
        },
        watch: {
            $route() {
                this.$store.dispatch(types.PRODUCT_GET_LIST, {
                    page: this.$route.params.page || 1
                });
            }
        },
        created() {
            var self = this;
            this.$store.dispatch(types.PRODUCT_GET_LIST, {
                page: self.$route.params.page || 1
            });
        }
    };
</script>