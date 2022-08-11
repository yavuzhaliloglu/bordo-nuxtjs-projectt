<template>
    <nav class="container d-flex flex-row justify-content-between flex-wrap">
        <span></span>
        <div class="logo">
            <nuxt-link class="logo-link" to="/">Rentiz</nuxt-link>
        </div>

        <div class="menu d-flex flex-row justify-content-between">
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

            <div class="buttons">
                <nuxt-link to="/signin">Login</nuxt-link>
                <nuxt-link to="/signup">Sign up</nuxt-link>
            </div>
        </div>

        <!--MOBİLE MENU-->
        <div id="hamburger-icon" @click="toggleMobileMenu()">
            <div class="bar1" />
            <div class="bar2" />
            <div class="bar3" />

            <ul class="menu-list mobile-menu">
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
                <li>
                    <nuxt-link to="/signin">Login</nuxt-link>
                </li>
                <li class="mt-2">
                    <nuxt-link class="nav-button" to="/signup">Sign up</nuxt-link>
                </li>

            </ul>
        </div>

    </nav>
</template>

<script>
export default {
    name: 'TheNavbar',
    data() {
        return {
            isClicked: false
        }
    },
    methods: {
        toggleMobileMenu() {
            this.isClicked = !this.isClicked
            const menu = document.querySelector('#hamburger-icon')
            const mobilemenu = document.querySelector('.mobile-menu')
            const nav = document.querySelector('nav')
            menu.classList.toggle('open')
            nav.classList.toggle('mb')

            if (this.isClicked) {
                mobilemenu.style.transform = 'scale(1)'
            } else {
                mobilemenu.style.transform = 'scale(0)'
            }
        },

    },
    computed: {
        colorChange() {
            if (this.$nuxt.$route.path === '/') {
                return '#fff'
            }
            else {
                return '#111'
            }
        }
    },
}
</script>

<style lang="scss" scoped>
</style>