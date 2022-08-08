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
@import '~/assets/scss/main.scss';

nav {
    padding: 60px 0;
    position: relative;
    span {
        position: absolute;
        width: 32px;
        height: 31px;
        top: 59px;
        left: -10px;
        background-color: $thirdcolor;
    }

    .logo {
        font-size: 39px;
        z-index: 999;
        background-color: transparent;

        &:hover {
            transform: scale(1.1);
        }

        &-link {
            background-color: transparent;
        }
    }

    .menu-list {
        margin-left: 100px;

        li {
            list-style: none;
            margin-right: 10px;
            font-size: 18px;

            .home-link {
                position: relative;

                &::before {
                    content:'';
                    position: absolute;
                    bottom: -2px;
                    left: 0;
                    width: 100%;
                    height: 4px;
                    background-color: $thirdcolor;
                }
            }

            &:last-child {
                margin-left: 0;
            }
        }
    }

    .buttons {
        font-size: 18px;

        a{
            margin-left: 10px;

            &:last-child{
                background-color: $thirdcolor;
                padding: 10px 12px;
            }
        }
    }
}
</style>