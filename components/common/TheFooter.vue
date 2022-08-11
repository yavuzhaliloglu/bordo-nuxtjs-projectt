<template>
    <footer class="footer">

        <div class="footer-content container d-flex flex-row justify-content-start justify-content-between">
            <span></span>
            <div class="footer-content-brand">
                <h1>Rentiz</h1>
                <p>Neque, vestibulum sed varius magna et at. Eu, adipiscing morbi augue.</p>
                <div class="footer-content-brand-social">
                    <!-- <FooterSocial v-for="i in social" :key='i' :social="i" /> -->

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

            <div class="footer-content-links d-flex flex-row justify-content-between flex-wrap mx-5">
                <FooterLink v-for="i in links" :key="i" :links="i" />
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
    name: "TheFooter",

    data() {
        return {
        // social: [{item:'facebook'}, {item:'instagram'}, {item:'twitter'}, {item:'youtube'}],
            links: [
                { header: 'Project', items: ['Houses', 'Rooms', 'Flats', 'Apartments'] },
                { header: 'Company', items: ['How we work?', 'Capital', 'Security'] },
                { header: 'Movement', items: ['Who we are', 'Support us'] },
                { header: 'Help', items: ['Privacy', 'Condition', 'Blog', 'FAQs'] },                
            ]
        };
    },
}
</script>

<style lang="scss" scoped>
</style>