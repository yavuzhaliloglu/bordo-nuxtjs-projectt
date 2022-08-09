<template>
    <div class="bg">
        <div class="container">

            <div class="contact d-flex flex-row justify-content-between align-items-center">

                <div class="contact-images d-flex flex-row justify-content-between align-items-center">
                    <img src="~/assets/images/contact-1.png" alt="">
                    <img src="~/assets/images/contact-2.png" alt="">
                </div>

                <div class="contact-content">
                    <h2 class="contact-content-header">We help people to find homes</h2>
                    <p class="contact-content-text">Mauris orci donec blandit maecenas. Orci lorem purus porttitor massa
                        consectetur. Neque,
                        vestibulum
                        sed varius magna et at. Eu, adipiscing morbi augue justo. Nibh laoreet volutpat quis velit.
                        Blandit
                        aliquam donec sed morbi congue eget lorem viverra porta id lobortis.
                    </p>
                    <button class="button contact-content-button">
                        Get In Touch
                    </button>
                </div>

            </div>

        </div>
    </div>
</template>

<script>

export default {
    name: 'ContactComponent'
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/main.scss';

.bg {
    background-color: $footerbackground ;
    padding: 100px 0;

    .contact {
        &-images {
            width: 50%;

            img {
                object-fit: cover;
                width: 50%;
                margin-left: 10px;

                &:first-child {
                    margin-left: 0;
                }
            }
        }

        &-content {
            width: 45%;

            &-header {
                margin-bottom: 20px;
            }

            &-text {
                line-height: 170%;
                margin-bottom: 30px;
            }

            &-button {}
        }
    }
}
</style>