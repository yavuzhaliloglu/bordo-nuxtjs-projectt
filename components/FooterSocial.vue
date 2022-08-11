<template>
    <a href="#">
        <font-awesome-icon :icon="`['fab', 'facebook']`" />
    </a>
</template>

<script>
export default {
    name: 'FooterSocial',
    props: {
        social: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            name: 'facebook'
        }
    }
    // created(){
    //     console.log(social)
    // }
}
</script>

<style lang="scss" scoped>
</style>