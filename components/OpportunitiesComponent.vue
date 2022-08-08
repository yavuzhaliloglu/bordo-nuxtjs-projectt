<template>
    <div class="opportunities">
        <div class="container d-flex flex-column justify-content-center align-items-center">
            <h2 class="opportunities-header">Why To Choose Us</h2>
            <div class="opportunities-logo-container w-100 d-flex flex-row justify-content-around align-items-center">
                <div class="opportunities-logo-container-logo">
                    
                </div>
                <div class="opportunities-logo-container-logo"></div>
                <div class="opportunities-logo-container-logo"></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'OpportunitiesComponent.vue'
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/main.scss';

.opportunities {
    border: 1px solid white;
    padding: 100px 0;
    &-header {
        margin-bottom: 50px;

    }

    &-logo-container {
        &-logo {
            border-radius: 50%;
            background-color: darken($thirdcolor,27%);
            background-image: url('~/assets/images/zoom.png');
            background-position: center;
            background-repeat: no-repeat;
            width: 180px;
            height: 180px;
            &:nth-child(2){
                background-image: url('~/assets/images/tag.png');
            }
            &:last-child{
                background-image: url('~/assets/images/clock.png');
            }
        }
    }
}
</style>