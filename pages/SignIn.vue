<template>
  <form
    class="form d-flex flex-row justify-content-between align-items-center"
    @submit.prevent="loginUser"
  >
    <div
      class="form-content d-flex flex-column justify-content-center align-items-center text-center"
    >
      <h1 class="form-content-header mb-2">Giriş Yap</h1>
      <p class="form-container-text mb-5">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque numquam
        laborum iure molestias labore explicabo!
      </p>
      <div class="form-content-container">
        <div class="form-content-container-input">
          <font-awesome-icon icon="fa-solid fa-envelope" />
          <input
            id="email"
            v-model="logininfo.email"
            type="email"
            placeholder="E-mail *"
          />
        </div>

        <div class="form-content-container-input">
          <font-awesome-icon icon="fa-solid fa-lock" />
          <input
            id="password"
            v-model="logininfo.password"
            type="password"
            placeholder="Password *"
          />
        </div>

        <div
          class="form-content-container-buttons d-flex flex-row justify-content-between align-items-center"
        >
          <LinksButtonComponent
            class="login-button"
            :text="text"
            :type="type"
          />
          <span class="w-50"
            >Henüz hesabın yok mu?
            <nuxt-link class="signup-link" to="/signup"
              >Kayıt Ol
            </nuxt-link></span
          >
        </div>
      </div>
    </div>
    <div class="form-image" />
  </form>
</template>

<script>
export default {
  name: 'SignIn',
  data() {
    return {
      text: 'Giriş Yap',
      type: 'submit',
      logininfo: {
        email: 'yavuz.haliloglu@hotmail.com',
        password: 'Yavuz123*Yavuz'
      }
    }
  },
  methods: {
    async loginUser() {
      try {
        await this.$auth.loginWith('local', { data: this.logininfo })
        // this.$auth.setUserToken(response.data.data.accessToken, response.data.data.refreshToken)
        //     .then(() => this.$toast.success('User set!'))
        // console.log(response)
        console.log(this.$auth.user)
        // this.$router.push('/');
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '/assets/scss/pages/signin.scss';
</style>
