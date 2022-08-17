<template>
    <div class="property-inputs my-5">
        <h3>İlan Detaylarını Doldurun</h3>
        <!-- <form @submit.prevent="postForm">
            <ProfileKonutInput v-if="id === allId[0]" />
            <ProfileArsaInput v-else-if="id === allId[1]" />
            <ProfileIsInput v-else-if="id === allId[2]" />

            <button type="submit">İlan ver</button>
        </form> -->

        <ProfileDefaultInput>
            <ProfileKonutInput v-if="id === allId[0]" />
            <ProfileArsaInput v-else-if="id === allId[1]" />
            <ProfileIsInput v-else-if="id === allId[2]" />
        </ProfileDefaultInput>
    </div>
</template>

<script>
export default {
    name: 'ProfilePropertyInputs',
    props: {
        id: { type: String, required: true },
        allId: { type: Array, required: true },
        path: { type: String, required: true }
    },
    data() {
        return {

        }
    },
    created() {
        this.print()
    },
    methods: {
        print() {
            console.log(this.id)
            console.log(this.allId)
            console.log(this.path)
        }
    }
}
</script>

<style lang="scss" scoped>
</style>