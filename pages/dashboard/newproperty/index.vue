<template>
  <div class="newproperty">
    <div class="container">
      <ProfileHeader>
        <h1 slot="header" class="header-head">İlan Ver</h1>
        <p slot="text" class="header-text">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod modi
          odit aspernatur vel? Illo quae, sed ex omnis mollitia excepturi.
        </p>
      </ProfileHeader>

      <ProfileFeatures :filter="false" :features="true" class="mt-5" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'NewProperty',
  layout: 'UserProfile',
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped></style>
