<template>
    <div class="opportunities-content-item">
        <div class="opportunities-content-item-logo">
            <img :src="require(`~/assets/images/${opportunity.image}`)" alt="" />
        </div>
        <h3>{{opportunity.header}}</h3>
        <p>{{opportunity.text}}</p>
    </div>
</template>

<script>
export default {
    name: 'OpportunitiesCart',
    props:{
        opportunity:{
            type:Object,
            required:true
        }
    }
}
</script>

<style lang="scss" scoped>

</style>