<template>
  <div class="container-fluid">
    <div class="row">
      <div :class="{ 'col-12': filterColumn, 'col-md-4': featuresColumn }">
        <div class="my-3 bg-extralightblack">
          <div v-for="i in categories" :key="i._id" class="">
            <button class="fb" @click="getPurpose(i, $event.target)">
              {{ i.categoryName }}
            </button>
          </div>
        </div>
      </div>

      <div :class="{ 'col-12': filterColumn, 'col-md-4': featuresColumn }">
        <div class="my-3 bg-extralightblack">
          <div v-for="i in purpose" :key="i._id" class="button-container">
            <button class="mbb" @click="getTypes(i, $event.target)">
              {{ i.categoryName }}
            </button>
          </div>
        </div>
      </div>

      <div :class="{ 'col-12': filterColumn, 'col-md-4': featuresColumn }">
        <div class="my-3 bg-extralightblack">
          <div v-for="i in type" :key="i._id" class="button-container">
            <button class="lb" @click="getPath(i)">{{ i.categoryName }}</button>
          </div>
        </div>
      </div>
    </div>

    <button v-if="isClicked" class="radiusbutton" @click="changePage">
      Bir sonraki adım
    </button>
  </div>
</template>

<script>
export default {
  name: 'ProfileFeatures',
  props: {
    featuresColumn: {
      type: Boolean,
      default: false
    },
    filterColumn: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      path: '',
      categoryName: '',
      categories: [],
      purpose: [],
      type: [],
      isClicked: false,
      isActive: true
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
      localStorage.setItem('path', this.path)
    },
    getChildren(i, list) {
      i.children.forEach((item) => {
        list.push(item)
      })
      this.isClicked = false
    },
    changeStyle(e) {
      const btn = document.querySelectorAll(`.${e.classList[0]}`)
      btn.forEach((item) => {
        item.classList.remove('clickedButton')
      })
      e.classList.add('clickedButton')
    },
    getPurpose(i, e) {
      this.type = []
      this.purpose = []
      this.changeStyle(e)
      this.categoryName = i.categoryName
      this.getChildren(i, this.purpose)
    },
    getTypes(i, e) {
      this.type = []
      this.changeStyle(e)
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
