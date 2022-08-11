<template>
    <div class="popular-component">
        <div class="popular-residence container">
            <h2 class="popular-residence-header text-center">Popular Residence</h2>
            <PopularSlider />
            <div class="text-center">
                <ButtonComponent :text="text"/>
            </div>
        </div>
    </div>
</template>

<script>
import PopularSlider from './sliders/PopularSlider.vue'
import ButtonComponent from './ButtonComponent.vue';

export default {
    name: "PopularResidance",

    data() {
        return {
            text:'View All Properties'
        };
    },
    components: { PopularSlider, ButtonComponent }
}
</script>

<style lang="scss" scoped>
</style>