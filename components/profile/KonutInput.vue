<template>
    <div>
        <CommonInputComponent v-for="input in defaultInputs" :key="input" :name="input.name"
            :type="input.type" v-model="input.data" />
        <CommonSelectComponent v-for="input in selectInputs" :key="input" :name="input.name"
            :options="input.options" v-model="input.data" />
    </div>
</template>

<script>
export default {
    name: 'KonutInput',
    data() {
        return {
            selectInputs: [
                {
                    name: 'roomCount',
                    options: [
                        { value: '1+0' },
                        { value: '1+1' },
                        { value: '2+1' },
                        { value: '3+1' },
                    ],
                    data: '',
                },
                {
                    name: 'buildingAge',
                    options: [
                        { value: '1' },
                        { value: '2' },
                        { value: '3' },
                        { value: '4' },
                        { value: '5-10' },
                        { value: '11-20' },
                        { value: '+20' }
                    ],
                    data: '',
                },
                {
                    name: 'heatingType',
                    options: [
                        { value: 'Yok' },
                        { value: 'Doğalgaz' },
                        { value: 'Kombi' },
                        { value: 'Soba' },
                        { value: 'Merkezi' },
                    ],
                    data: '',
                },
                {
                    name: 'itemStatus',
                    options: [
                        { value: 'Boş' },
                        { value: 'Eşyalı' },
                    ],
                    data: '',
                }
            ],
            defaultInputs: [
                {
                    name: 'grossSquareMeters',
                    type: 'number',
                    data: '',
                },
                {
                    name: 'netSquareMeters',
                    type: 'number',
                    data: '',
                },
                {
                    name: 'floor',
                    type: 'number',
                    data: '',
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
</style>