<template>
    <section>
        <div class="hero container">
            <div class="hero-content d-flex flex-column justify-content-around">
                <div class="hero-content-text">
                    <h1>Perfect way to buy and sell a home</h1>
                    <p>Diam vitae, nec mattis lectus quam pretium amet facilisis. Urna, massa aliqua dui pellentesque.
                        Ac,
                        gravida in eget non amet eget purus non.</p>
                </div>
                <div class="hero-content-search">
                    aslkdhqlhdqwdhqwlkh
                </div>
            </div>
            <div class="hero-image">
                <img src="~/assets/images/hero.png" alt="">
            </div>
        </div>
        <FeaturedComponent />
    </section>
</template>

<script>
export default {
    name: 'HeroComponent'
}
</script>

<style lang="scss" scoped>

.hero {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80vh;
    padding: 0;
    margin-bottom: 120px;

    &-content {
        width: 50%;
        height: 100%;

        &-text {
            width: 90%;
            font-size: 18px;

            h1 {
                font-size: 40px;
                margin-bottom: 32px;
            }
        }
    }

    &-image {
        width: 50%;
        height: 100%;

        img {
            width: 100%;
            height: 100%;
        }
    }
}
</style>