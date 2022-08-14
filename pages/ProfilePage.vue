<template>
    <div class="dashboard">
        <ProfileDashboard />
    </div>
</template>

<script>
import ProfileDashboard from '~/components/profile/ProfileDashboard.vue';

export default {
    name: "ProfilePage",
    layout: "UserProfile",
    components: { ProfileDashboard }
}
</script>

<style lang="scss" scoped>
</style>