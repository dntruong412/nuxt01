<template>
    <div class="row">
        <Paginate :pagingObj='products' :component="'products-page-id'" />
        <div class="col-3" v-for="prod in products['data']" v-bind:key="prod.id">
            <div class="card mb-3">
                <img class="card-img-top" :src="prod.image" :alt="prod.name">
                <div class="card-body">
                    <h5 class="card-title">{{prod.name}}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">{{prod.price}}$</h6>
                    <p class="card-text">{{prod.description}}</p>
                    <router-link class="card-link" :to="{ name: 'products-id', params: { id: prod.id }}">Card link</router-link>
                    <router-link class="card-link" to="#">Another link</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['products'],
        components: {
            Paginate: () => import("~/components/Paginate.vue")
        }
    }
</script>