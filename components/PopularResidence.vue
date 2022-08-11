<template>
    <div class="popular-component">
        <div class="popular-residence container">
            <h2 class="popular-residence-header text-center">Popular Residence</h2>
            <SlidersPopularSlider />
            <div class="text-center">
                <LinksLinkComponent :text="text" :path="path"/>
            </div>
        </div>
    </div>
</template>

<script>


export default {
    name: "PopularResidance",

    data() {
        return {
            text:'View All Properties',
            path:'/signin'
        };
    }
}
</script>

<style lang="scss" scoped>
</style>