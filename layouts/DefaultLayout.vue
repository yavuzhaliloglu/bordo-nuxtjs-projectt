<template>
    <div>
        <TheNavbar />
        <Nuxt />
        <TheFooter />
    </div>
</template>

<script>
import TheNavbar from '~/components/common/TheNavbar.vue';
import TheFooter from '~/components/common/TheFooter.vue';
export default {
    layout: "DefaultLayout",
    components: { TheNavbar, TheFooter }
}
</script>

<style lang="scss" scoped>
div{
    min-height: 100vh;
}
</style>