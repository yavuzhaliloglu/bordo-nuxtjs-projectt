<template>
    <div>

        <div class="input-group">
            <label for="image">İmages</label>
            <input name="image" type="file" multiple="multiple" v-on:change="image">
            <button @click="print">asd</button>
        </div>

        <CommonInputComponent v-for="input in defaultInputs" :key="input" :type="input.type" :name="input.name"
            v-model="input.data" />
            
        <slot></slot>

        <div class="input-group">
            <label for="description">Açıklama</label>
            <textarea name="description" cols="30" rows="10" v-model="description" />
        </div>

    </div>
</template>

<script>
export default {
    name: 'ProfileDefaultInput',
    data() {
        return {
            description: '',
            image: [],
            defaultInputs: [
                {
                    name: 'title',
                    type: 'text',
                    data: ''
                },
                {
                    name: 'price',
                    type: 'number',
                    data: ''
                },
            ],
        }
    },
    methods:{
    }
}
</script>

<style lang="scss" scoped>

</style>