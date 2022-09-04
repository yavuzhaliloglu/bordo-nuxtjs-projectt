<template>
  <footer class="footer">
    <div class="container">
      <div class="row py-5">
        <div class="col-md-4">
          <div class="footer-brand">
            <h1><span></span>Rentiz</h1>
            <p>
              Neque, vestibulum sed varius magna et at. Eu, adipiscing morbi
              augue.
            </p>
            <div class="footer-brand-social">
              <LinksIconLink
                v-for="link in social"
                :key="link.name"
                :social="link.name"
                :path="link.path"
                class="footer-brand-social__link"
              />
            </div>
          </div>
        </div>
        <div class="col-md-8">
          <div class="row mt-4">
            <div v-for="link in links" :key="link.header" class="col my-3">
              <h3>{{ link.header }}</h3>
              <LinksLinkComponent
                v-for="oneLink in link.items"
                :key="oneLink.text"
                :path="oneLink.path"
                :text="oneLink.text"
                class="d-block"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="footer-bottom">
      <div class="container">
        <div class="d-flex flex-row justify-content-between">
          <span>Copyright ©TemplatesJungle. 2022. All right reserved</span>
          <span>Design by: TemplatesJungle</span>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  name: 'TheFooter',
  data() {
    return {
      //   social: ['facebook', 'instagram', 'twitter', 'youtube'],
      social: [
        { name: 'facebook', path: '/' },
        { name: 'instagram', path: '/' },
        { name: 'twitter', path: '/' },
        { name: 'youtube', path: '/' }
      ],
      links: [
        {
          header: 'Project',
          items: [
            {
              text: 'Houses',
              path: '/'
            },
            {
              text: 'Flats',
              path: '/'
            },
            {
              text: 'Apartments',
              path: '/'
            }
          ]
        },
        {
          header: 'Company',
          items: [
            {
              text: 'How we work?',
              path: '/'
            },
            {
              text: 'Capital',
              path: '/'
            },
            {
              text: 'Security',
              path: '/'
            }
          ]
        },
        {
          header: 'Movement',
          items: [
            {
              text: 'Who we are?',
              path: '/'
            },
            {
              text: 'Support Us',
              path: '/'
            }
          ]
        },
        {
          header: 'Help',
          items: [
            {
              text: 'Privacy',
              path: '/'
            },
            {
              text: 'Condition',
              path: '/'
            },
            {
              text: 'Blog',
              path: '/'
            },
            {
              text: 'FAQs',
              path: '/'
            }
          ]
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped></style>
