<template>
    <div class="opportunities-content-item">
        <div class="opportunities-content-item-logo">
            <img :src="opportunity.image" alt="">
            <!-- <img src="~/assets/images/clock.png" alt=""> -->
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
    },
}
</script>

<style lang="scss" scoped>

</style>