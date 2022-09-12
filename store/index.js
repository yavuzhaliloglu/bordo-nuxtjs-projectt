export const state = () => ({
  propertyDetail: {},
  workplace: {
    selectInputs: [
      {
        name: 'Oda Sayısı',
        options: [
          { _id: '1+0', name: '1+0' },
          { _id: '1+1', name: '1+1' },
          { _id: '2+1', name: '2+1' },
          { _id: '3+1', name: '3+1' }
        ],
        value: ''
      },
      {
        name: 'Bina Yaşı',
        options: [
          { _id: '1', name: '1' },
          { _id: '2', name: '2' },
          { _id: '3', name: '3' },
          { _id: '4', name: '4' },
          { _id: '5-10', name: '5-10' },
          { _id: '11-20', name: '11-20' },
          { _id: '+20', name: '+20' }
        ],
        value: ''
      },
      {
        name: 'Isıtma Tipi',
        options: [
          { _id: 'Yok', name: 'Yok' },
          { _id: 'Doğalgaz', name: 'Doğalgaz' },
          { _id: 'Kombi', name: 'Kombi' },
          { _id: 'Soba', name: 'Soba' },
          { _id: 'Merkezi', name: 'Merkezi' }
        ],
        value: ''
      },
      {
        name: 'Eşya Durumu',
        options: [
          { _id: 'Boş', name: 'Boş' },
          { _id: 'Eşyalı', name: 'Eşyalı' }
        ],
        value: ''
      }
    ],
    defaultInputs: [
      {
        name: 'Metrekare (m²)',
        type: 'number',
        value: ''
      },
      {
        name: 'Net Metrekare (m²)',
        type: 'number',
        value: ''
      },
      {
        name: 'Kat',
        type: 'number',
        value: ''
      }
    ]
  },
  land: {
    selectInputs: [
      {
        name: 'Arazi Durumu',
        options: [
          { _id: 'Ekili', name: 'Ekili' },
          { _id: 'Boş', name: 'Boş' }
        ],
        value: ''
      }
    ],
    defaultInputs: [
      {
        name: 'Metrekare (m²)',
        type: 'number',
        value: ''
      },
      {
        name: 'Parsel',
        type: 'number',
        value: ''
      }
    ]
  },
  common: {
    location: {
      city: {},
      district: {},
      town: {}
    },
    interiorFeatures: [],
    externalFeatures: [],
    locationFeatures: [],
    images: [],
    title: '',
    price: '',
    description: ''
  }
  // veriler backend
})

export const getters = {
  getCommonInputs(state) {
    return state.common
  },
  getPropertyDetail(state) {
    return state.propertyDetail
  },
  getWorkPlaceInputs(state) {
    return state.workplace
  },
  getLandInputs(state) {
    return state.land
  },
  getResidenceInputs(state) {
    return state.residence
  }
}

export const mutations = {
  UPDATE_DETAIL(state, slide) {
    state.propertyDetail = slide
  },

  UPDATE_LIST(state, name, list) {
    state.categoryName = name
    state.allNames = list
  },
  UPDATE_INPUT_VALUES(state, data) {
    const d = state.workplace.defaultInputs
    const s = state.workplace.selectInputs
    const c = state.common

    d[0].value = data.squareMeters
    d[1].value = data.netSquareMeters
    d[2].value = data.floor

    s[0].value = data.roomCount
    s[1].value = data.buildingAge
    s[2].value = data.heatingType
    s[3].value = data.itemStatus

    c.location.city = data.address.city
    c.location.district = data.address.district
    c.location.town = data.address.town

    c.interiorFeatures = data.interiorFeatures
    c.externalFeatures = data.externalFeatures
    c.locationFeatures = data.locationFeatures

    c.title = data.title
    c.price = data.price
    c.description = data.description

    c.images = data.images
    // gelen ilan türüne göre inputları setleyen 3 ayrı fonksiyon yapılabilir. bu şekilde her seferinde tek tek verileri yazmaya gerek kalmaz
  }
}

export const actions = {
  updateList(context, name, list) {
    context.commit('UPDATE_LIST', name, list)
  }
}
