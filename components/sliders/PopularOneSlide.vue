<template>
    <div class="oneslide d-flex flex-column align-items-start justify-content-end">
        <!-- <img class="oneslide-img" src="~/assets/images/slider-1.png" alt=""> -->
        <img class="oneslide-img" :src="require(`~/assets/images/${slide.image}`)" alt="" />

        <div class="oneslide-content d-flex flex-column">

            <div class="oneslide-content-header">
                <h4>{{ slide.header }}</h4>
            </div>

            <div class="oneslide-content-location d-flex mt-2">
                <p>{{ slide.location }}</p>
                <div class="oneslide-button mt-2">
                    <LinksLinkComponent v-if="this.$route.path !== '/'" class="viewbutton" :path="path" :text="text" />
                </div>
            </div>

            <div class="oneslide-icons d-flex flex-row justify-content-start align-items-center">
                <div class="cont">
                    <img class="oneslide-icons-icon" src="~/assets/images/bed.png" alt="">
                    <span>{{ slide.beds }} Beds</span>
                </div>

                <div class="cont">
                    <img class="oneslide-icons-icon" src="~/assets/images/bath.png" alt="">
                    <span>{{ slide.bath }} Bath</span>
                </div>

                <div class="cont">
                    <img class="oneslide-icons-icon" src="~/assets/images/area.png" alt="">
                    <span>{{ slide.area }} Sqft.</span>
                </div>

            </div>

        </div>

    </div>
</template>

<script>
export default {
    name: 'PopularOneSlide',
    props: {
        slide: {
            type: Object,
        }
    },
    data() {
        return {
            path: '/addadvert',
            text: 'View'
        }
    },
}
</script>

<style lang="scss" scoped>
.viewbutton {
    font-size: 10px;
    padding: 10px 12px;
    border-radius: 8px;
}

</style>