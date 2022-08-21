export const state = () => ({
  propertyDetail: {},
  // workplace: {
  //     selectInputs: [
  //         {
  //             name: 'roomCount',
  //             options: [
  //                 { value: '1+0' },
  //                 { value: '1+1' },
  //                 { value: '2+1' },
  //                 { value: '3+1' },
  //             ],
  //             data: '',
  //         },
  //         {
  //             name: 'buildingAge',
  //             options: [
  //                 { value: '1' },
  //                 { value: '2' },
  //                 { value: '3' },
  //                 { value: '4' },
  //                 { value: '5-10' },
  //                 { value: '11-20' },
  //                 { value: '+20' }
  //             ],
  //             data: '',
  //         },
  //         {
  //             name: 'heatingType',
  //             options: [
  //                 { value: 'Yok' },
  //                 { value: 'Doğalgaz' },
  //                 { value: 'Kombi' },
  //                 { value: 'Soba' },
  //                 { value: 'Merkezi' },
  //             ],
  //             data: '',
  //         },
  //         {
  //             name: 'itemStatus',
  //             options: [
  //                 { value: 'Boş' },
  //                 { value: 'Eşyalı' },
  //             ],
  //             data: '',
  //         }
  //     ],
  //     defaultInputs: [
  //         {
  //             name: 'grossSquareMeters',
  //             type: 'number',
  //             data: '',
  //         },
  //         {
  //             name: 'netSquareMeters',
  //             type: 'number',
  //             data: '',
  //         },
  //         {
  //             name: 'floor',
  //             type: 'number',
  //             data: '',
  //         }
  //     ]
  // },
  // land: {
  //     selectInputs: [
  //         {
  //             name: 'landStatus',
  //             options: [
  //                 { value: 'Ekili' },
  //                 { value: 'Boş' }
  //             ],
  //             data: ''
  //         }
  //     ],
  //     defaultInputs: [
  //         {
  //             name: 'squareMeters',
  //             type: 'number',
  //             data: ''
  //         },
  //         {
  //             name: 'parcel',
  //             type: 'number',
  //             data: ''
  //         },
  //     ]
  // },
  // residence: {
  //     selectInputs: [
  //         {
  //             name: 'roomCount',
  //             options: [
  //                 { value: '1+0' },
  //                 { value: '1+1' },
  //                 { value: '2+1' },
  //                 { value: '3+1' },
  //             ],
  //             data: '',
  //         },
  //         {
  //             name: 'buildingAge',
  //             options: [
  //                 { value: '1' },
  //                 { value: '2' },
  //                 { value: '3' },
  //                 { value: '4' },
  //                 { value: '5-10' },
  //                 { value: '11-20' },
  //                 { value: '+20' }
  //             ],
  //             data: '',
  //         },
  //         {
  //             name: 'heatingType',
  //             options: [
  //                 { value: 'Yok' },
  //                 { value: 'Doğalgaz' },
  //                 { value: 'Kombi' },
  //                 { value: 'Soba' },
  //                 { value: 'Merkezi' },
  //             ],
  //             data: '',
  //         },
  //         {
  //             name: 'itemStatus',
  //             options: [
  //                 { value: 'Boş' },
  //                 { value: 'Eşyalı' },
  //             ],
  //             data: '',
  //         }
  //     ],
  //     defaultInputs: [
  //         {
  //             name: 'grossSquareMeters',
  //             type: 'number',
  //             data: '',
  //         },
  //         {
  //             name: 'netSquareMeters',
  //             type: 'number',
  //             data: '',
  //         },
  //         {
  //             name: 'floor',
  //             type: 'number',
  //             data: '',
  //         }
  //     ]
  // },
  workplaceInputs: {
    roomCount: {
      name: 'roomCount',
      title: 'Oda Sayısı',
      options: [
        { _id: '1+0', name: '1+0' },
        { _id: '1+1', name: '1+1' },
        { _id: '2+1', name: '2+1' },
        { _id: '3+1', name: '3+1' }
      ]
    },
    buildingAge: {
      name: 'buildingAge',
      title: 'Bina Yaşı',
      options: [
        { _id: '1', name: '1' },
        { _id: '2', name: '2' },
        { _id: '3', name: '3' },
        { _id: '4', name: '4' },
        { _id: '5-10', name: '5-10' },
        { _id: '11-20', name: '11-20' },
        { _id: '+20', name: '+20' }
      ]
    },
    heatingType: {
      name: 'heatingType',
      title: 'Isıtma Tipi',
      options: [
        { _id: 'Yok', name: 'Yok' },
        { _id: 'Doğalgaz', name: 'Doğalgaz' },
        { _id: 'Kombi', name: 'Kombi' },
        { _id: 'Soba', name: 'Soba' },
        { _id: 'Merkezi', name: 'Merkezi' }
      ]
    },
    itemStatus: {
      name: 'itemStatus',
      title: 'Eşya Durumu',
      options: [
        { _id: 'Boş', name: 'Boş' },
        { _id: 'Eşyalı', name: 'Eşyalı' }
      ]
    },
    grossSquareMeters: {
      name: 'grossSquareMeters',
      title: 'Brüt Metrekare',
      type: 'number'
    },
    netSquareMeters: {
      name: 'netSquareMeters',
      title: 'Net Metrekare',
      type: 'number'
    },
    floor: {
      name: 'floor',
      title: 'Kat',
      type: 'number'
    }
  },
  landInputs: {
      landStatus: {
        name: 'landStatus',
        title: 'Arazi Durumu',
        options: [
          { _id: 'Ekili', name: 'Ekili' },
          { _id: 'Boş', name: 'Boş' }
        ]
      },
      squareMeters: {
        name: 'squareMeters',
        title: 'Metrekare',
        type: 'number'
      },
      parcel: {
        name: 'parcel',
        title: 'Parsel',
        type: 'number'
      }
  }
})

export const getters = {
  getPropertyDetail(state) {
    return state.propertyDetail
  },
  getWorkPlaceInputs(state) {
    return state.workplaceInputs
  },
  getLandInputs(state){
    return state.landInputs
  }
}

export const mutations = {
  UPDATE_DETAIL(state, slide) {
    state.propertyDetail = slide
  },
  UPDATE_LIST(state, name, list) {
    state.categoryName = name
    state.allNames = list
  }
}

export const actions = {
  updateList(context, name, list) {
    context.commit('UPDATE_LIST', name, list)
  }
}
