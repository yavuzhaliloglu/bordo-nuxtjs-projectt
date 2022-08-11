<template>
    <div class="opportunities">
        <div class="container d-flex flex-column justify-content-center align-items-center">
            <h2 class="opportunities-header">Why To Choose Us</h2>
            <div class="opportunities-content w-100 d-flex flex-row justify-content-around align-items-stretch">
                <OpportunitiesCart v-for="(i,index) in opportunityList" :key="index" :opportunity="i" />
            </div>
        </div>


        <OpportunitiesSlider />


    </div>
</template>

<script>
import OpportunitiesSlider from "./sliders/OpportunitiesSlider.vue";
import OpportunitiesCart from "./OpportunitiesCart.vue";

export default {
    name: "OpportunitiesComponent",
    components: { OpportunitiesSlider, OpportunitiesCart },
    data() {
        return {
            opportunityList: [
                {
                    image: '@/assets/images/zoom.png',
                    header: 'Easy to find',
                    text: "Urna, massa aliqua dui pellentesque. Ac, gravida in. Diam vitae, nec mattis lectus quam pretium amet facilisis."
                }, {
                    image: '@/assets/images/tag.png',
                    header: 'Affordable Prices',
                    text: "Urna, massa aliqua dui pellentesque. Ac, gravida in. Diam vitae, nec mattis lectus quam pretium amet facilisis."
                }, {
                    image: '@/assets/images/clock.png',
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