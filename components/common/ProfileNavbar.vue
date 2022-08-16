<template>
    <nav class="profile-nav">
        <div class="profile-nav-brand">
            <UserLinkComponent :path="brandlink.path" :text="brandlink.text" :icon="brandlink.icon" />
        </div>
        <UserLinkComponent v-for="link in links" :key="link" :path="link.path" :text="link.text" :icon="link.icon" />
    </nav>
</template>

<script>
import UserLinkComponent from '../links/UserLinkComponent.vue';
export default {
    name: "ProfileNavbar",
    data() {
        return {
            links: [
                {
                    path: '/dashboard',
                    text: 'Dashboard',
                    icon: 'house-user'
                },
                {
                    path: '/',
                    text: 'İlanlar',
                    icon:'building'
                },
                {
                    path: '/',
                    text: 'İlanlarım',
                    icon:'building-user'
                },
                {
                    path: '/',
                    text: 'Mesaj',
                    icon:'message'
                },
                {
                    path:'/',
                    text:'Profilim',
                    icon:'circle-user'
                },
                {
                    path:'/dashboard/newproperty',
                    text:'İlan Ekle',
                    icon:'circle-plus'
                }
            ],
            brandlink:{
                path:'/',
                text:'Home',
                icon:'house'
            }

        };
    },
    components: { UserLinkComponent }
}
</script>

<style lang="scss" scoped>
</style>