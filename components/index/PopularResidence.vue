<template>
    <div class="popular-component">
        <div class="popular-residence container">
            <h2 class="popular-residence-header text-center">Popular Residence</h2>
            <SlidersPopularSlider :sliderlist="sliderlist" :loop="loop" />
            <div class="text-center mt-5">
                <LinksLinkComponent :text="text" :path="path" />
            </div>
        </div>
    </div>
</template>

<script>


export default {
    name: "PopularResidance",

    data() {
        return {
            text: 'View All Properties',
            path: '/signin',
            loop:true,
            sliderlist: [
                {
                    image: 'slider-1.png',
                    header: 'Aliva Priva Jalvin',
                    location: '1087 Pin Oak Drive, Clinton, USA',
                    beds: '4',
                    bath: '2',
                    area: '1293'
                },
                {
                    image: 'slider-1.png',
                    header: 'Aliva Priva',
                    location: 'lorem ipsum dor simet amet',
                    beds: '2',
                    bath: '1',
                    area: '793'
                },
                {
                    image: 'slider-1.png',
                    header: ' Priva lorem',
                    location: '9999 Pin Oak Drive, Clinton, USA',
                    beds: '9',
                    bath: '4',
                    area: '2096'
                },
                {
                    image: 'slider-1.png',
                    header: ' ipsum lorem',
                    location: '9999 leoran ajula, USA',
                    beds: '1',
                    bath: '1',
                    area: '509'
                },
            ]
        };
    }
}
</script>

<style lang="scss" scoped>
</style>