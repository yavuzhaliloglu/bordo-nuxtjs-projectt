<template>
    <div class="user">
        <div class="user-container">
            <b-dropdown class="user-container-dropdown" no-caret >
                <template #button-content>
                    <font-awesome-icon icon="fa-solid fa-bell" />
                </template>
                <b-dropdown-item v-for="i in 5" :key="i">aaa</b-dropdown-item>
            </b-dropdown>
        </div>

        <div class="user-container">
            <nuxt-link to="/dashboard/profile">
                <div v-if="!user.haspicture" class="user-container-image">
                    <font-awesome-icon icon="fa-solid fa-user" />
                </div>
            </nuxt-link>
        </div>

        <div class="user-container">
            <b-dropdown class="user-container-dropdown" no-caret right no-flip>
                <template #button-content>
                    <font-awesome-icon icon="fa-solid fa-angle-down" />
                </template>
                <b-dropdown-item v-for="i in links" :key="i.path" :href="`${i.path}`">{{i.text}}</b-dropdown-item>
            </b-dropdown>
        </div>
    </div>

</template>

<script>
export default {
    name: 'ProfileDetailUser',
    data(){
        return{
            user:{
                haspic:false
            },
            links:[
                {path:'/dashboard/profile', text:'Profilim'},
                {path:'/dashboard/newadvert', text:'İlanlarım'},
                {path:'/dashboard', text:'Favorilerim'},
                {path:'/', text:'Çıkış Yap'}
            ]
        }
    },
    mounted() {
        const button = document.querySelector('.btn');
        button.classList.remove('btn-secondary');
    }

}
</script>

<style lang="scss" scoped>
</style>