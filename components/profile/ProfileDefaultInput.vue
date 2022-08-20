<template>
    <div class="features-inputs">
        <div class="input-group">
            <vue-upload-multiple-image @upload-success="uploadImageSuccess" @before-remove="beforeRemove"
                @edit-image="editImage" :data-images="images" idUpload="myIdUpload" editUpload="myIdEdit"
                dragText="Resim sürükleyin" browseText="(veya tıklayarak arayın)" primaryText="Varsayılan Resim"
                markIsPrimaryText="Varsayılan olarak ayarla" dropText="Drag and drop"
                accept=image/jpeg,image/png,image/jpg,image/tif,image/tiff>
            </vue-upload-multiple-image>
        </div>

        <CommonSelectComponent v-model="cityId" :name="'Şehir'" :options="selectCity" />
        <button @click="getIlce(cityId)"></button>
        <CommonSelectComponent v-model="ilceId" :name="'İlçe'" :options="selectIlce" />
        <button @click="getMahalle(ilceId)"></button>
        <CommonSelectComponent v-model="mahalleId" :name="'Mahalle'" :options="selectMahalle" />
        
        <!-- <CommonInputComponent v-for="input in defaultInputs" :key="input" :type="input.type" :name="input.name" v-model="inputlist" /> -->
        
        <button @click="yazdir">asd</button>

        <CommonInputComponent :type="text" :name="'title'" v-model="title" />
        <CommonInputComponent :type="number" :name="'price'" v-model="price" />

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
            title:'',
            description: '',
            file: "",
            images: [],
            cityId: '',
            ilceId: '',
            mahalleId: '',
            selectCity: [],
            selectIlce: [],
            selectMahalle: [],
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
    created() {
        this.getCity();
        // const title = ''
        // const price = ''
        // this.setValues(title,price)
    },
    methods: {
        yazdir(){
            console.log(this.inputlist)
        },
        // setValues(title,price){

        // },
        async getCity() {
            const res = await this.$axios.get('https://estate-bordo-55.herokuapp.com/location/city');
            res.data.data.forEach(element => {
                this.selectCity.push(element)
            })
        },
        async getIlce(id) {
            const res = await this.$axios.get(`https://estate-bordo-55.herokuapp.com/location/district/${id}`);
            res.data.data.forEach(element => {
                this.selectIlce.push(element)
            })
            console.log(this.selectIlce);
        },
        async getMahalle(id) {
            const res = await this.$axios.get(`https://estate-bordo-55.herokuapp.com/location/town/${id}`);
            res.data.data.forEach(element => {
                this.selectMahalle.push(element)
            })
        },

        uploadImageSuccess(formData, index, fileList) {
            console.log(formData, index, fileList);
            console.log(formData)
            this.images = fileList;
            // Upload image api
            // axios.post('http://your-url-upload', formData).then(response => {
            //   console.log(response)
            // })
        },
        beforeRemove(index, done, fileList) {
            console.log('index', index, fileList)
            const r = confirm("remove image")
            if (r === true) {
                done()
            }

        },
        editImage(formData, index, fileList) {
            console.log('edit data', formData, index, fileList)
        }
    }
}
</script>

<style lang="scss" scoped>
</style>