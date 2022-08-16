<template>
    <div class="info" v-if="propertyDetail.header">
        <h4 class="info-header">Property Details</h4>
        <div class="info-content">
            <img class="info-content-img" src="~/assets/images/slider-1.png" alt="">
            <h6 class="info-content-header">{{ propertyDetail.header }}</h6>
            <div class="info-content-features">
                <div class="info-content-features-container">
                    <font-awesome-icon icon="fa-solid fa-bed" />
                    <span>{{ propertyDetail.beds }} Bedrooms</span>
                </div>

                <div class="info-content-features-container">
                    <font-awesome-icon icon="fa-solid fa-bath" />
                    <span>{{ propertyDetail.bath }} Bathrooms</span>
                </div>

                <div class="info-content-features-container">
                    <font-awesome-icon icon="fa-solid fa-clone" />
                    <span>{{ propertyDetail.area }} Sqft. area</span>
                </div>
            </div>
            <div class="info-content-location">
                <font-awesome-icon icon="fa-solid fa-location-dot" />
                <p>{{ propertyDetail.location }}</p>
            </div>
            <div class="info-content-description">
                <h6 class="info-content-description-header">Description</h6>
                <p class="info-content-description-text">{{ propertyDetail.description }}</p>
            </div>

            <div class="info-content-button">
                <nuxt-link to="/dashboard/newadvert">İlanı Gör</nuxt-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProfilePropertyInfo',
    computed: {
        propertyDetail() {
            return this.$store.getters.getPropertyDetail
        }
    },

}
</script>

<style lang="scss" scoped>
</style>