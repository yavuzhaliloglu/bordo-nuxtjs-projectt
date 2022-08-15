<template>
    <nuxt-link :to="path" class="userlink d-flex justify-content-center align-items-start">
        <div>
            <font-awesome-icon :icon="`fa-solid fa-${icon}`" />
        </div>
        <div class="ml-3">
            <p class="ml-2">{{ text }}</p>
        </div>
    </nuxt-link>
</template>

<script>
export default {
    name: 'UserLinkComponent',
    props: {
        path: {
            type: String,
            required: true
        },
        icon: {
            type: String,
            required: true
        },
        text: {
            type: String,
            required: true
        }
    }
}
</script>

<style lang="scss" scoped>
</style>