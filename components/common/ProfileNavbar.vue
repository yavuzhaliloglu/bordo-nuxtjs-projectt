<template>
    <nav class="profile-nav">
        <div class="profile-nav-brand-container">
            <UserLinkComponent class="profile-nav-brand-container-brand" :path="brandlink.path" :text="brandlink.text"
                :icon="brandlink.icon" />
        </div>
        <div class="profile-nav-links-container mt-3">
            <UserLinkComponent v-for="link in links" :key="link.text" :path="link.path" :text="link.text" :icon="link.icon" />
        </div>
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
                    icon: 'building'
                },
                {
                    path: '/dashboard/myadverts',
                    text: 'İlanlarım',
                    icon: 'building-user'
                },
                {
                    path: '/',
                    text: 'Mesaj',
                    icon: 'message'
                },
                {
                    path: '/dashboard/profile',
                    text: 'Profilim',
                    icon: 'circle-user'
                },
                {
                    path: '/dashboard/newproperty',
                    text: 'İlan Ekle',
                    icon: 'circle-plus'
                }
            ],
            brandlink: {
                path: '/',
                text: 'Home',
                icon: 'house'
            }

        };
    },
    components: { UserLinkComponent }
}
</script>

<style lang="scss" scoped>
</style>