<template>
    <div>
        <form class="form d-flex flex-row justify-content-between align-items-center" @submit.prevent="registerUser">
            <div class="form-content d-flex flex-column justify-content-center align-items-center text-center">
                <h1 class="form-content-header mb-2">Kayıt Ol</h1>
                <p class="form-container-text mb-5">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque
                    numquam
                    laborum iure molestias labore explicabo!</p>
                <div class="form-content-container">

                    <div class="cont d-flex flex-row justify-content-center align-items-center">
                        <div class="form-content-container-input">
                            <font-awesome-icon icon="fa-solid fa-envelope" />
                            <input id="email" type="email" placeholder="E-mail *" v-model="registerinfo.email">
                        </div>

                        <div class="form-content-container-input">
                            <font-awesome-icon icon="fa-solid fa-user" />
                            <input id="username" type="text" placeholder="Username *" v-model="registerinfo.userName">
                        </div>
                    </div>

                    <div class="cont d-flex flex-row justify-content-center align-items-center">
                        <div class="form-content-container-input">
                            <font-awesome-icon icon="fa-solid fa-lock" />
                            <input id="password" type="password" placeholder="Password *"
                                v-model="registerinfo.password">
                        </div>

                        <div class="form-content-container-input">
                            <font-awesome-icon icon="fa-solid fa-lock" />
                            <input id="password2" type="password" placeholder="Repeat Password *"
                                v-model="registerinfo.passwordConfirm">
                        </div>
                    </div>

                    <div
                        class="form-content-container-buttons d-flex flex-row justify-content-between align-items-center">
                        <LinksButtonComponent class="login-button " :text="text" :type="type" />
                        <span class="w-50">Hesabın var mı? <nuxt-link class="signup-link" to="/signin">Giriş Yap
                            </nuxt-link></span>
                    </div>
                </div>
            </div>
            <div class="form-image" />
        </form>
    </div>
</template>

<script>
export default {
    name: 'SignUp',
    data() {
        return {
            text: 'Kayıt Ol',
            type: 'submit',
            registerinfo: {
                email: "",
                userName: "",
                password: "",
                passwordConfirm: "",
            }
        }
    },
    methods: {
        async registerUser() {
            const response = await this.$axios.post('user/register', this.registerinfo);
            console.log(response)
            console.log(this.registerinfo);
            this.$router.push('/signin');
            // this.$auth.loginWith('local', { data: this.registerinfo })
        }

    }

}
</script>

<style lang="scss" scoped>
</style>