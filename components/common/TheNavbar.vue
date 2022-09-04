<template>
  <div class="container">
    <nav class="d-flex justify-content-between align-items-center">
      <div class="nav-logo">
        <span></span>
        <LinksLinkComponent :path="'/'" :text="'Rentiz'" />
      </div>

      <div class="nav-menu">
        <ul class="d-flex justify-content-evenly">
          <li v-for="link in links" :key="link.path">
            <LinksLinkComponent :path="link.path" :text="link.text" />
          </li>
        </ul>
      </div>

      <div class="nav-buttons">
        <div
          v-if="$auth.loggedIn"
          class="d-flex justify-content-between align-items-center"
        >
          <LinksLinkComponent
            :path="profilepath"
            :text="$auth.user.data.userName"
            class="nav-buttons__dashboard"
          />
          <button class="nav-buttons__logout" @click="$auth.logout()">
            Log Out
          </button>
        </div>

        <div v-else>
          <nuxt-link to="/signin">Login</nuxt-link>
          <nuxt-link to="/signup">Sign up</nuxt-link>
        </div>
      </div>

      <!--MOBİLE MENU-->
      <div id="hamburger-icon" @click="toggleMobileMenu()">
        <div class="bar bar1" />
        <div class="bar bar2" />
        <div class="bar bar3" />

        <ul class="mobile-menu">
          <li v-for="link in links" :key="link.path">
            <LinksLinkComponent :path="link.path" :text="link.text" />
          </li>

          <div v-if="!$auth.loggedIn">
            <nuxt-link to="/signin">Login</nuxt-link>
            <nuxt-link to="/signup">Sign up</nuxt-link>
          </div>

          <div v-else class="d-flex flex-column justify-content-center align-items-center">
            <nuxt-link class="mt-2" to="/dashboard">{{
              $auth.user.data.userName
            }}</nuxt-link>
            <button @click="$auth.logout()">Log Out</button>
          </div>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'TheNavbar',
  data() {
    return {
      isClicked: false,
      profilepath: '/dashboard',
      links: [
        {
          path: '/',
          text: 'Home'
        },
        {
          path: '/',
          text: 'About Us'
        },
        {
          path: '/',
          text: 'Buying'
        },
        {
          path: '/',
          text: 'Renting'
        },
        {
          path: '/',
          text: 'Selling'
        },
        {
          path: '/',
          text: 'Contact Us'
        }
      ]
    }
  },
  computed: {
    colorChange() {
      if (this.$nuxt.$route.path === '/') {
        return '#fff'
      } else {
        return '#111'
      }
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
    }
  }
}
</script>

<style lang="scss" scoped></style>
