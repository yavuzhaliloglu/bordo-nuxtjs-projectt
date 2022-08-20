<template>
    <div>
        <div class="container features">
            <ProfileHeader>
                <h1 slot="header">İlan Özelliklerinizi seçin</h1>
                <p slot="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus nostrum ducimus
                    similique
                    dignissimos
                    atque non sunt, et possimus autem? Explicabo!</p>
            </ProfileHeader>

            <ProfileDefaultInput>
                <ProfileKonutInput v-if="this.categoryId === this.allId[0]" />
                <ProfileArsaInput v-else-if="this.categoryId === this.allId[1]" />
                <ProfileIsInput v-else-if="this.categoryId === this.allId[2]" />
            </ProfileDefaultInput>
            
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProfileInputComponent'
}
</script>

<style lang="scss" scoped>
</style>