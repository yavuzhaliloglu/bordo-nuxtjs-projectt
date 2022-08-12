<template>
    <a href="#">
        <!-- <font-awesome-icon :icon="require(`['fab', ${social}]`)" /> -->
        <font-awesome-icon :icon="`fa-brands fa-${social}`" />
    </a>
</template>

<script>
export default {
    name: 'FooterSocial',
    props: {
        social: {
            type: String,
        }
    },
    data() {
        return {
            
        }
    },
    created(){
        console.log('deneme')
    }
}
</script>

<style lang="scss" scoped>
</style>