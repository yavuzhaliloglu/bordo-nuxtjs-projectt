<template>
    <form class="form d-flex flex-row justify-content-between align-items-center" >
        <div class="form-content d-flex flex-column justify-content-center align-items-center text-center">
            <h1 class="form-content-header mb-2">Giriş Yap</h1>
            <p class="form-container-text mb-5">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque
                numquam
                laborum iure molestias labore explicabo!</p>
            <div class="form-content-container">

                <div class="form-content-container-input">
                    <font-awesome-icon icon="fa-solid fa-envelope" />
                    <input id="email" type="email" placeholder="E-mail *" v-model="email">
                </div>

                <div class="form-content-container-input">
                    <font-awesome-icon icon="fa-solid fa-lock" />
                    <input id="password" type="password" placeholder="Password *" v-model="password">
                </div>

                <div
                    class="form-content-container-buttons d-flex flex-row justify-content-between align-items-center">
                    <ButtonComponent class="login-button " :text="text" :type="type"/>
                    <span class="w-50">Henüz hesabın yok mu? <nuxt-link class="signup-link" to="/signup">Kayıt Ol
                        </nuxt-link></span>
                </div>
            </div>
        </div>
        <div class="form-image" />
    </form>
</template>

<script>
import ButtonComponent from '~/components/ButtonComponent.vue'
export default {
    name: "SignIn",
    components: { ButtonComponent },
    data() {
        return {
            text: 'Giriş Yap',
            type:'submit',
            email: "",
            password: ""
        };
    },
    methods:{

    }
    
}
</script>

<style lang="scss" scoped>
</style>