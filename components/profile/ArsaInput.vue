<template>
    <div>
        <CommonInputComponent v-for="input in defaultInputs" :key="input" :name="input.name" :type="input.type"
            v-model="input.data" />
        <CommonSelectComponent v-for="input in selectInputs" :key="input" :name="input.name" :options="input.options"
            v-model="input.data" />
    </div>
</template>

<script>
export default {
    name: 'ArsaInput',
    data() {
        return {
            selectInputs: [
                {
                    name: 'landStatus',
                    options: [
                        { value: 'Ekili' },
                        { value: 'Boş' }
                    ],
                    data: ''
                }
            ],
            defaultInputs: [
                {
                    name: 'squareMeters',
                    type: 'number',
                    data: ''
                },
                {
                    name: 'parcel',
                    type: 'number',
                    data: ''
                },
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
</style>