<template>
    <div class="d-flex flex-row justify-content-start align-items-start dashboard">
        <div class="dashboard-content container">
            <ProfileHeader>
                <h1 slot="header">Merhaba, {{ $auth.user.data.userName }}</h1>
                <p slot="text">Yeni emlakları keşfet, ilan ver, mesajlaş</p>
            </ProfileHeader>
            <ProfileSearchComponent>
            </ProfileSearchComponent>

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
// scss leri buraya import et
</style>