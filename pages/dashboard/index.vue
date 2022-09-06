<template>
  <div class="row no-gutters">
    <div class="col-md-8 dashboard-main">
      <div class="container">
        <ProfileHeader>
          <h1 slot="header">Merhaba, {{ $auth.user.data.userName }}</h1>
          <p slot="text">Yeni emlakları keşfet, ilan ver, mesajlaş</p>
        </ProfileHeader>
        <ProfileSearchComponent> </ProfileSearchComponent>

        <ProfileFavAdvert />
      </div>
    </div>

    <div class="col-md-4 dashboard-aside">
      <div class="container">
        <ProfilePropertyDetail />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProfilePage',
  layout: 'UserProfile'
}
</script>

<style lang="scss" scoped></style>
