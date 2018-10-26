<template>
    <div v-show='info.display'>
        <div class="alert alert-success" role="alert" v-if="info.state">
            {{info.message}}
        </div>
        <div class="alert alert-danger" role="alert" v-else>
            {{info.message}}
        </div>
    </div>
</template>

<script>
    export default {
        props: ['info']
    }
</script>
