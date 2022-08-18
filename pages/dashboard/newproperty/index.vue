<template>
    <div class="newproperty container">
        <ProfileHeader>
            <h1 slot="header" class="header-head">İlan Ver</h1>
            <p slot="text" class="header-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod modi odit
                aspernatur vel? Illo quae, sed ex omnis mollitia excepturi.</p>
        </ProfileHeader>

        <div class="d-flex w-100 justify-content-around my-3">
            <div class="newproperty-container">
                <div v-for="i in categories" :key="i" class="button-container">
                    <button @click="print(i)">{{ i.categoryName }}</button>
                </div>
            </div>

            <div class="newproperty-container">
                <div v-for="i in purpose" :key="i" class="button-container">
                    <button @click="print2(i)">{{ i.categoryName }}</button>
                </div>
            </div>

            <div class="newproperty-container">
                <div v-for="i in type" :key="i" class="button-container">
                    <button @click="print3(i)">{{ i.categoryName }}</button>
                </div>
            </div>
        </div>

        <button v-if="isClicked" @click="changePage">Bir sonraki adım</button>
    </div>
</template>

<script>
export default {
    name: 'NewProperty',
    layout: 'UserProfile',
    data() {
        return {
            categories: [],
            purpose: [],
            type: [],
            categoryId: '',
            allId: [],
            isClicked: false,
        }
    },
    created() {
        this.getCategories()
    },
    methods: {
        changePage() {
            this.$store.state.categoryId = this.categoryId;
            this.$store.state.allId = this.allId;
            this.$router.push('/dashboard/newproperty/features');
        },
        print(i) {
            this.purpose = [];
            this.type = [];
            i.children.forEach(item => {
                this.purpose.push(item)
            });
            this.categoryId = i._id;
            this.isClicked = false
        },
        print2(i) {
            this.type = [];
            i.children.forEach(item => {
                this.type.push(item)
            });
            this.isClicked = false
        },
        print3(i) {
            this.path = i.path
            this.isClicked = true;
        },
        async getCategories() {
            try {
                const res = await this.$axios.get('https://estate-bordo-55.herokuapp.com/categories');
                res.data.data.forEach(element => {
                    this.categories.push(element)
                });
                this.categories.forEach(item => {
                    this.allId.push(item._id)
                });
            }
            catch (err) {
                alert(err);
            }
        },
    },
}
</script>

<style lang="scss" scoped>
</style>