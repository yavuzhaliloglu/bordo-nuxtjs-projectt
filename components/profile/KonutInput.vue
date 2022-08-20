<template>
    <div class="features-inputs-block">
        <CommonInputComponent v-for="input in defaultInputs" :key="input" v-model="input.data" :name="input.name"
            :type="input.type" />
        <CommonSelectComponent v-for="input in selectInputs" :key="input" v-model="input.data" :name="input.name"
            :options="input.options" />

        <div class="d-flex justify-content-center my-4">
            <div class="mx-2">
                <h4>İç özellikler</h4>
                <CommonInputComponent v-for="item in checkBoxInt" :key="item._id" :name="item.item"
                    :type="'checkbox'" />
            </div>

            <div class="mx-2">
                <h4>Dış özellikler</h4>
                <!-- <CommonCheckBoxInput v-for="item in checkBoxExt" :key="item._id" :name="item.item" :text="item.item" /> -->
                <CommonInputComponent v-for="item in checkBoxExt" :key="item._id" :name="item.item"
                    :type="'checkbox'" />
            </div>

            <div class="mx-2">
                <h4>Konum özellikleri</h4>
                <CommonInputComponent v-for="item in checkBoxLoc" :key="item._id" :name="item.item"
                    :type="'checkbox'" />
            </div>
        </div>

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
            ],
            checkBoxInt: [],
            checkBoxExt: [],
            checkBoxLoc: [],
        }
    },
    created() {
        this.getCheckBoxes()
        this.getCity()
    },
    methods: {
        async getCheckBoxes() {
            const resInt = await this.$axios.get('https://estate-bordo-55.herokuapp.com/features/interior');
            resInt.data.data.forEach(element => {
                this.checkBoxInt.push(element)
            });

            const resExt = await this.$axios.get('https://estate-bordo-55.herokuapp.com/features/external');
            resExt.data.data.forEach(element => {
                this.checkBoxExt.push(element)
            })

            const resLoc = await this.$axios.get('https://estate-bordo-55.herokuapp.com/features/location');
            resLoc.data.data.forEach(element => {
                this.checkBoxLoc.push(element)
            });

        },

    }
}
</script>

<style lang="scss" scoped>
</style>