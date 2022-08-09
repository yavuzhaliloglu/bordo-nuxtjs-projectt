<template>
    <footer class="footer">

        <div class="footer-content container d-flex flex-row justify-content-start justify-content-between">
            <span></span>
            <div class="footer-content-brand">
                <h1>Rentiz</h1>
                <p>Neque, vestibulum sed varius magna et at. Eu, adipiscing morbi augue.</p>
                <div class="footer-content-brand-social">
                    <a href="#">
                        <font-awesome-icon :icon="['fab', 'facebook']" />
                    </a>
                    <a href="#">
                        <font-awesome-icon :icon="['fab', 'instagram']" />
                    </a>
                    <a href="#">
                        <font-awesome-icon :icon="['fab', 'twitter']" />
                    </a>
                    <a href="#">
                        <font-awesome-icon :icon="['fab', 'youtube']" />
                    </a>
                </div>
            </div>

            <div class="footer-content-links d-flex flex-row justify-content-between mx-5">
                <div class="project">
                    <h3>Project</h3>
                    <nuxt-link to="/">Houses</nuxt-link>
                    <nuxt-link to="/">Rooms</nuxt-link>
                    <nuxt-link to="/">Flats</nuxt-link>
                    <nuxt-link to="/">Appartments</nuxt-link>
                </div>
                <div class="company">
                    <h3>Company</h3>
                    <nuxt-link to="/">How we work?</nuxt-link>
                    <nuxt-link to="/">Capital</nuxt-link>
                    <nuxt-link to="/">Security</nuxt-link>
                </div>
                <div class="movement">
                    <h3>Movement</h3>
                    <nuxt-link to="/">Who we are</nuxt-link>
                    <nuxt-link to="/">Support us</nuxt-link>
                </div>
                <div class="help">
                    <h3>Help</h3>
                    <nuxt-link to="/">Privacy</nuxt-link>
                    <nuxt-link to="/">Condition</nuxt-link>
                    <nuxt-link to="/">Blog</nuxt-link>
                    <nuxt-link to="/">FAQs</nuxt-link>
                </div>
            </div>
        </div>

        <div class="footer-bottom">
            <div class="container d-flex flex-row justify-content-between">
                <span>Copyright ©TemplatesJungle. 2022. All right reserved</span>
                <span>Design by: TemplatesJungle</span>
            </div>
        </div>

    </footer>
</template>

<script>
export default {
    name: 'TheFooter'
}
</script>

<style lang="scss" scoped>
</style>