<template>
    <section>
        <div class="hero">
            <div class="hero-content d-flex flex-column justify-content-around">
                <div class="hero-content-text">
                    <h1>Perfect way to buy and sell a home</h1>
                    <p>Diam vitae, nec mattis lectus quam pretium amet facilisis. Urna, massa aliqua dui pellentesque.
                        Ac,
                        gravida in eget non amet eget purus non.</p>
                </div>

                <!--SEARCH-->
                <div class="hero-content-search d-flex flex-row justify-content-center align-items-stretch">
                    <b-form-select v-model="selected" class="select" :options="options"></b-form-select>
                    <b-form-select v-model="selected" class="select" :options="options"></b-form-select>
                    <b-form-select v-model="selected" class="select" :options="options"></b-form-select>
                    <LinksLinkComponent class="search-button" :text="text" :path="path" />
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
    name: "HeroComponent",
    data() {
        return {
            text: 'Search',
            path: '/signup',
            options: [
                { value: null, text: "Please select an option" },
                { value: "a", text: "This is First option" },
                { value: "b", text: "Selected Option" },
                { value: { C: "3PO" }, text: "This is an option with object value" },
                { value: "d", text: "This one is disabled", disabled: true }
            ]
        };
    },
    created() {
        console.log(this.$auth.loggedIn)
    }

}

</script>

<style lang="scss" scoped>
</style>