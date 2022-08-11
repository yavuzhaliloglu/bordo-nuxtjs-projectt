<template>
    <form class="signin d-flex flex-row justify-content-between align-items-center" @submit-prevent="deneme">
        <div class="signin-content d-flex flex-column justify-content-center align-items-center text-center">
            <h1 class="signin-content-header mb-2">Giriş Yap</h1>
            <p class="signin-container-text mb-5">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque
                numquam
                laborum iure molestias labore explicabo!</p>
            <div class="signin-content-container">

                <div class="signin-content-container-input">
                    <font-awesome-icon icon="fa-solid fa-envelope" />
                    <input id="email" type="email" placeholder="E-mail *" v-model="email">
                </div>

                <div class="signin-content-container-input">
                    <font-awesome-icon icon="fa-solid fa-lock" />
                    <input id="password" type="password" placeholder="Password *" v-model="password">
                </div>

                <div
                    class="signin-content-container-buttons d-flex flex-row justify-content-between align-items-center">
                    <ButtonComponent class="login-button " :text="text" />
                    <span class="w-50">Henüz hesabın yok mu? <nuxt-link class="signup-link" to="/signup">Kayıt Ol
                        </nuxt-link></span>
                </div>
            </div>
        </div>
        <div class="signin-image" />
    </form>
</template>

<script>
import ButtonComponent from '~/components/ButtonComponent.vue'
export default {
    name: "SignIn",
    components: { ButtonComponent },
    data() {
        return {
            isSubmit:true,
            text: 'Giriş Yap',
            email: "",
            password: ""
        };
    },
    methods:{
        deneme(){
            console.log('merhaba')
        }
    }
    
}
</script>

<style lang="scss" scoped>
</style>