<template>
    <ul class="navbar-nav mr-auto">
        <li class="nav-item">
            <router-link to="/categories" active-class="active" class="nav-link">Category</router-link>
        </li>
        <li class="nav-item">
            <router-link to="/products" active-class="active" class="nav-link">Product</router-link>
        </li>
        <li class="nav-item">
            <router-link to="/contact" active-class="active" class="nav-link">Contact</router-link>
        </li>
    </ul>
</template>

<script>
    export default {
        created() {
            this.$getToken();
            debugger;
        }
    }
</script>