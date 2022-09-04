<template>
    <nuxt-link class="link" :to="path">
        {{ text }}
    </nuxt-link>
</template>

<script>
export default {
    name: 'LinkComponent',
    props: {
        path: {
            type: String,
            required: true
        },
        text: {
            type: String,
            required: true
        }
    },

}
</script>

<style lang="scss" scoped>
</style>