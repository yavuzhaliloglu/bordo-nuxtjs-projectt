<template>
  <div class="container">
    <div class="row">
      <div :class="{ 'col-12': filter, 'col-md-4': features }">
        <div class="my-3 bg-extralightblack newproperty-item">
          <div
            v-for="i in categories"
            :key="i._id"
            class="newproperty-item-button-container"
          >
            <button class="fb" @click="getPurpose(i, $event.target)">
              {{ i.categoryName }}
            </button>
          </div>
        </div>
      </div>

      <div :class="{ 'col-12': filter, 'col-md-4': features }">
        <div class="my-3 bg-extralightblack newproperty-item">
          <div
            v-for="i in purpose"
            :key="i._id"
            class="newproperty-item-button-container"
          >
            <button class="mbb" @click="getTypes(i, $event.target)">
              {{ i.categoryName }}
            </button>
          </div>
        </div>
      </div>

      <div :class="{ 'col-12': filter, 'col-md-4': features }">
        <div class="my-3 bg-extralightblack newproperty-item">
          <div
            v-for="i in type"
            :key="i._id"
            class="newproperty-item-button-container"
          >
            <button class="lb" @click="getPath(i)">{{ i.categoryName }}</button>
          </div>
        </div>
      </div>
    </div>

    <button
      v-if="isClicked && $route.path === '/dashboard/newproperty'"
      class="radiusbutton"
      @click="changePage"
    >
      Bir sonraki adım
    </button>

    <button
      v-if="$route.path === '/adverts'"
      class="radiusbutton"
      @click="filterAdverts"
    >
      Filtrele
    </button>
  </div>
</template>

<script>
export default {
  name: 'ProfileFeatures',
  props: {
    features: {
      type: Boolean,
      default: false
    },
    filter: {
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
    filterAdverts() {
      this.$API.adverts.filterAdverts(this.path).then((res) => {
        console.log(res)
      })
    },
    getChildren(i, list) {
      i.children.forEach((item) => {
        list.push(item)
      })
      this.path = i.path
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
