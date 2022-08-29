<template>
    <div class="opportunities">
        <div class="container d-flex flex-column justify-content-center align-items-center">
            <h2 class="opportunities-header">Why To Choose Us</h2>
            <div class="opportunities-content w-100 d-flex flex-row justify-content-around align-items-stretch">
                <IndexOpportunitiesCart v-for="i in opportunityList" :key="i.header" :opportunity="i" />
            </div>
        </div>
        <SlidersOpportunitiesSlider />
    </div>
</template>

<script>

export default {
    name: "OpportunitiesComponent",
    data() {
        return {
            opportunityList: [
                {
                    image: 'zoom.png',
                    header: 'Easy to find',
                    text: "Urna, massa aliqua dui pellentesque. Ac, gravida in. Diam vitae, nec mattis lectus quam pretium amet facilisis."
                }, {
                    image: 'tag.png',
                    header: 'Affordable Prices',
                    text: "Urna, massa aliqua dui pellentesque. Ac, gravida in. Diam vitae, nec mattis lectus quam pretium amet facilisis."
                }, {
                    image: 'clock.png',
                    header: 'Quickly Process',
                    text: "Urna, massa aliqua dui pellentesque. Ac, gravida in. Diam vitae, nec mattis lectus quam pretium amet facilisis."
                }

            ]
        }
    }
}
</script>

<style lang="scss" scoped>

</style>