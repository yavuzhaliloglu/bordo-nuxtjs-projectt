<template>
    <div class="dashboard-content-header">
        <h1 class="dashboard-content-header-head">Good Morning, {{ $auth.user.data.userName }}</h1>
        <p class="dashboard-content-header-text">Yeni emlakları keşfet, ilan ver, mesajlaş</p>
    </div>
</template>

<script>
export default {
    name: 'ProfileHeader'
}
</script>

<style lang="scss" scoped>
</style>