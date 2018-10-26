<template>
    <div class="row">
        <div class="col-12">
            <h1 class="red">Hello {{ name }}!</h1>
        </div>
    </div>
</template>

<script>
    export default {
        asyncData (context) {
            return { name: 'There' }
        }
    }
</script>