<template>
    <div>
        <Nav/>
        <Loading />
        <div class="container-fluid mt-3">
            <nuxt/>
        </div>
        <Footer/>
    </div>
</template>

<script>
    import Nav from "~/components/nav";
    import Footer from "~/components/footer";
    export default {
        components: {
            Nav: Nav,
            Footer: Footer,
            Loading: () => import("~/components/loading")
        }
    }
</script>