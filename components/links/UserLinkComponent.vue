<template>
    <nuxt-link :to="path">

    </nuxt-link>
</template>

<script>
    export default {
        name:'UserLinkComponent',
        props:{
            path:{
                type:String,
                required:true
            },
            icon:{
                type:String,
                required:true
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>