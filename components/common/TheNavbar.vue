<template>
    <nav class="container d-flex flex-row justify-content-between">
        <span></span>
        <div class="logo">
            <nuxt-link class="logo-link" to="/">Rentiz</nuxt-link>
        </div>

        <div class="menu">
            <ul class="d-flex flex-row justify-content-evenly menu-list">
                <li>
                    <nuxt-link class="home-link" to="/">Home</nuxt-link>
                </li>
                <li>
                    <nuxt-link to="/">About Us</nuxt-link>
                </li>
                <li>
                    <nuxt-link to="/">Buying</nuxt-link>
                </li>
                <li>
                    <nuxt-link to="/">Renting</nuxt-link>
                </li>
                <li>
                    <nuxt-link to="/">Selling</nuxt-link>
                </li>
                <li>
                    <nuxt-link to="/">Contact Us</nuxt-link>
                </li>
            </ul>
        </div>

        <div class="buttons">
            <nuxt-link to="/">Login</nuxt-link>
            <nuxt-link to="/">Sign up</nuxt-link>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'TheNavbar'
}
</script>

<style lang="scss" scoped>
</style>