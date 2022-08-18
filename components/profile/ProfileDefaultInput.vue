<template>
    <div class="features-inputs">
        <div class="input-group">
            <vue-upload-multiple-image @upload-success="uploadImageSuccess" @before-remove="beforeRemove"
                @edit-image="editImage" :data-images="images" idUpload="myIdUpload" editUpload="myIdEdit"
                dragText="Resim sürükleyin" browseText="(veya tıklayarak arayın)" primaryText="Varsayılan Resim"
                markIsPrimaryText="Varsayılan olarak ayarla" popupText="Bu resim ilanda varsayılan olarak gösterilecek"
                dropText="Drag and drop" accept=image/jpeg,image/png,image/jpg,image/tif,image/tiff>
            </vue-upload-multiple-image>
        </div>

        <CommonInputComponent v-for="input in defaultInputs" :key="input" :type="input.type" :name="input.name"
            v-model="input.data" />
        <slot></slot>

        <div class="input-group">
            <label for="description">Açıklama</label>
            <textarea name="description" cols="30" rows="10" v-model="description" />
        </div>

        <button @click="print">slda</button>

    </div>
</template>

<script>
export default {
    name: 'ProfileDefaultInput',
    data() {
        return {
            description: '',
            file: "",
            images: [],
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
    methods: {
        print() {
            console.log(this.images)
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