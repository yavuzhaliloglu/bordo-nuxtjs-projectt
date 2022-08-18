<template>
    <div class="container">
        <ProfileHeader>
            <h1 slot="header">İlan Özelliklerinizi seçin</h1>
            <p slot="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus nostrum ducimus similique
                dignissimos
                atque non sunt, et possimus autem? Explicabo!</p>
        </ProfileHeader>

        <ProfileDefaultInput>
            <ProfileKonutInput v-if="this.categoryId === this.allId[0]" />
            <ProfileArsaInput v-else-if="this.categoryId === this.allId[1]" />
            <ProfileIsInput v-else-if="this.categoryId === this.allId[2]" />
        </ProfileDefaultInput>
    </div>
</template>

<script>
export default {
    name: 'AdvertFeatures',
    layout: 'UserProfile',
    data() {
        return {
            categoryId:'',
            allId:[]
        }
    },


    created() {
        this.setValues()
    },
    computed:{
        list(){
            return this.$store.getters.getList
        },
        categoryid(){
            return this.$store.getters.getId
        }
    },
    methods: {
        setValues() {
            this.categoryId = this.categoryid;
            this.allId = this.list;

            console.log(this.list);
            console.log(this.categoryid)
        },
    }
}
</script>

<style lang="scss" scoped>
</style>