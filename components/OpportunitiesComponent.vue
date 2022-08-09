<template>
    <div class="opportunities">
        <div class="container d-flex flex-column justify-content-center align-items-center">
            <h2 class="opportunities-header">Why To Choose Us</h2>
            <div class="opportunities-content w-100 d-flex flex-row justify-content-around align-items-center">
                <div class="opportunities-content-item">
                    <div class="opportunities-content-item-logo">
                        <img src="~/assets/images/zoom.png" alt="">
                    </div>
                    <h3>Easy to find</h3>
                    <p>Urna, massa aliqua dui pellentesque. Ac, gravida in. Diam vitae, nec mattis lectus quam
                        pretium amet facilisis.</p>

                </div>
                <div class="opportunities-content-item">
                    <div class="opportunities-content-item-logo">
                        <img src="~/assets/images/tag.png" alt="">
                    </div>
                    <h3>Affordable Prices</h3>
                    <p>Urna, massa aliqua dui pellentesque. Ac, gravida in. Diam vitae, nec mattis lectus quam pretium
                        amet facilisis.</p>
                </div>
                <div class="opportunities-content-item">
                    <div class="opportunities-content-item-logo">
                        <img src="~/assets/images/clock.png" alt="">
                    </div>
                    <h3>Quickly Process</h3>
                    <p>Ac, gravida in diam vitae, nec mattis lectus quam pretium amet facilisis. Urna, massa aliqua dui
                        pellentesque. </p>
                </div>
            </div>
        </div>
        <OpportunitiesSlider />


    </div>
</template>

<script>
import OpportunitiesSlider from "./OpportunitiesSlider.vue";

export default {
    name: "OpportunitiesComponent",
    components: { OpportunitiesSlider }
}
</script>

<style lang="scss" scoped>
</style>