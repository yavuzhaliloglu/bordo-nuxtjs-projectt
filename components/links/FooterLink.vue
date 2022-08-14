<template>
    <div>
        <h3>{{ links.header }}</h3>
        <nuxt-link to="/" v-for="i in links.items" :key="i">
            {{ i }}
        </nuxt-link>
    </div>
</template>

<script>
export default {
    name: 'FooterLink',
    props: {
        links: {
            type: Object,
            required: true
        }
    }
}
</script>

<style lang="scss" scoped>
</style>