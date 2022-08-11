<template>
    <a href="#">
        <!-- <font-awesome-icon :icon="require(`['fab', ${social}]`)" /> -->
        <font-awesome-icon :icon="require(`fa-brands fa-${social.item}`)" />
    </a>
</template>

<script>
export default {
    name: 'FooterSocial',
    props: {
        social: {
            type: Object,
            required: true
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