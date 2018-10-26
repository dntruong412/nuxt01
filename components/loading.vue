<template>
    <div class="progress border-0 rounded-0" v-show="display">
        <div role="progressbar" 
            aria-valuenow="100" 
            aria-valuemin="0" 
            aria-valuemax="100"
            class="progress-bar bg-warning progress-bar-striped progress-bar-animated">
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                display: false
            };
        }
    }
</script>

<style scoped="scoped">
    .progress {
        height: 4px
    }
    .progress-bar {
        width: 100%
    }
</style>