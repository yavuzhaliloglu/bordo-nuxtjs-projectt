<template>
  <div class="newproperty container">
    <ProfileHeader>
      <h1 slot="header" class="header-head">İlan Ver</h1>
      <p slot="text" class="header-text">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod modi odit
        aspernatur vel? Illo quae, sed ex omnis mollitia excepturi.
      </p>
    </ProfileHeader>

    <div class="d-flex w-100 justify-content-around my-3">
      <div class="newproperty-container">
        <div v-for="i in categories" :key="i._id" class="button-container">
          <button class="first-buttons" @click="getPurpose(i, $event.target)">
            {{ i.categoryName }}
          </button>
        </div>
      </div>

      <div class="newproperty-container">
        <div v-for="i in purpose" :key="i._id" class="button-container">
          <button class="middle-buttons" @click="getTypes(i, $event.target)">
            {{ i.categoryName }}
          </button>
        </div>
      </div>

      <div class="newproperty-container">
        
        <div v-for="i in type" :key="i._id" class="button-container">
          <button @click="getPath(i)">{{ i.categoryName }}</button>
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
      path: '',
      categoryName: '',
      categories: [],
      purpose: [],
      type: [],
      isClicked: false,
    }
  },
  created() {
    this.getCategories()
  },
  methods: {
    getCategories() {
      this.$API.categories.getCategories().then((res) => {
        this.categories = res.data.data
      })
    },
    changePage() {
      if (this.categoryName === 'İş Yeri') {
        this.$router.push('/dashboard/newproperty/features/isyeri')
      } else {
        this.$router.push(
          `/dashboard/newproperty/features/${this.categoryName}`
        )
      }
      localStorage.setItem("path",this.path);
    },
    getChildren(i, list) {
      i.children.forEach((item) => {
        list.push(item)
      })
      this.isClicked = false
    },
    getPurpose(i, e) {
      this.type = []
      this.purpose = []
      const buttons = document.querySelectorAll('.first-buttons')
      buttons.forEach((item) => {
        item.classList.remove('clickedButton')
      })
      e.classList.add('clickedButton')
      this.categoryName = i.categoryName
      this.getChildren(i, this.purpose)
    },
    getTypes(i, e) {
      this.type = []
      const buttons = document.querySelectorAll('.middle-buttons')
      buttons.forEach((item) => {
        item.classList.remove('clickedButton')
      })
      e.classList.add('clickedButton')
      this.getChildren(i, this.type)
    },
    getPath(i) {
      this.path = i.path
      this.isClicked = true
    }
  }
}
</script>

<style lang="scss" scoped></style>
