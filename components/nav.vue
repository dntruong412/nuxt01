<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand mb-0 h1" href="/">
            <img src="/favicon.svg" width="30" height="30" alt="">
            Test Nuxt
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <Bar/>
            <Auth/>
        </div>
    </nav>
</template>

<script>
    import Auth from "~/components/nav/auth";
    import Bar from "~/components/nav/bar";
    export default {
        components: {
            Auth: Auth,
            Bar: Bar
        }
    };
</script>