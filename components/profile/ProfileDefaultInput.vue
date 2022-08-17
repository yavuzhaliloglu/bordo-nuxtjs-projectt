<template>
    <div>
        <div class="group-row">
            <div class="input-group">
                <label for="image">İmages</label>
                <input name="image" type="file" v-on:change="image">
            </div>

            <div class="input-group">
                <label for="title">Başlık</label>
                <input name="title" type="text" v-model="title">
            </div>
        </div>

        <div class="group-row">
            <div class="input-group">
                <label for="description">Açıklama</label>
                <input name="description" type="textarea" v-model="description">
            </div>

            <div class="input-group">
                <label for="price">Fiyat</label>
                <input name="price" type="number" v-model="price">
            </div>
        </div>

        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'ProfileDefaultInput'
}
</script>

<style lang="scss" scoped>
</style>