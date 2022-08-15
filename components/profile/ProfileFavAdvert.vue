<template>
    <div class="dashboard-content-favorite">
        <h3>Your Favorite Adverts</h3>
        <div v-if="!sliderlist.length">Henüz Favori ilanınız yok</div>
        <div v-else>
            <PopularSlider :sliderlist="sliderlist" :loop="loop" />
        </div>
    </div>
</template>

<script>
import PopularSlider from '../sliders/PopularSlider.vue';
export default {
    name: "ProfileFavAdvert",
    data() {
        return {
            sliderlist: [
                {
                    image: "slider-1.png",
                    header: "Aliva Priva Jalvin",
                    location: "1087 Pin Oak Drive, Clinton, USA",
                    beds: "4",
                    bath: "2",
                    area: "1293"
                },
                {
                    image: "slider-1.png",
                    header: "Aliva Priva Aliva Priva",
                    location: "lorem ipsum dor simet amet",
                    beds: "2",
                    bath: "1",
                    area: "793"
                },
            ],
            loop: false,

        };
    },
    components: { PopularSlider },
    mounted() {
        if (this.$route.path !== '/') {
            const location = document.getElementsByClassName('oneslide-content-location');
            // console.log(location)
            for (let i = 0; i < location.length; i++) {
                location[i].style.order = '10'
            }
        }
    }
}
</script>

<style lang="scss" scoped>
</style>