<template>
    <div class="header">
        <h1 class="header-head">Good Morning, {{ $auth.user.data.userName }}</h1>
        <p class="header-text">Yeni emlakları keşfet, ilan ver, mesajlaş</p>
    </div>
</template>

<script>
export default {
    name: 'ProfileHeader',
    // props:{
    //     headertext:{
    //         type:'String',
    //     },
    //     headerhead:{
    //         type:'String'
    //     }
    // }
}
</script>

<style lang="scss" scoped>
</style>