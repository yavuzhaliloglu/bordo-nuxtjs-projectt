<template>
    <div class="container features">
        <ProfileHeader>
            <h1 slot="header">İlan Özelliklerinizi seçin</h1>
            <p slot="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus nostrum ducimus similique
                dignissimos
                atque non sunt, et possimus autem? Explicabo!</p>
        </ProfileHeader>

        <ProfileDefaultInput>
            <ProfileKonutInput v-if="categoryName === allList[0]" />
            <ProfileArsaInput v-else-if="categoryName === allList[1]" />
            <ProfileIsInput v-else-if="categoryName === allList[2]" />
        </ProfileDefaultInput>
    </div>
</template>

<script>
export default {
    name: 'AdvertFeatures',
    layout: 'UserProfile',
    data() {
        return {
            categoryName: '',
            allList: [],
            selectInputList:[],
            defaultInputList:[]
        }
    },
    created() {
        this.setValues()
    },
    methods: {
        setValues() {
            this.allList = this.$store.state.allNames;
            this.categoryName = this.$store.state.categoryName;
        },
    }
}
</script>

<style lang="scss" scoped>
</style>