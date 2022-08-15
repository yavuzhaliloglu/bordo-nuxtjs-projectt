<template>
    <div class="d-flex flex-row justify-content-start align-items-start dashboard">
        <div class="dashboard-content container">
            <!-- <ProfileHeader /> -->
            <ProfileSearch />
            <ProfileFavAdvert />
        </div>
        <ProfilePropertyDetail />
    </div>

</template>

<script>
export default {
    name: "ProfilePage",
    layout: "UserProfile",
}
</script>

<style lang="scss" scoped>
</style>