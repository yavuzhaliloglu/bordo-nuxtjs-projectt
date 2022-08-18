export const state = () => ({
    propertyDetail: {},
    categoryId: '',
    allId: [],
    // isInput: {
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
    // arsaInput: {
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
    // konutInput: {
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
    // inputToSend: {}
})

export const getters = {
    getPropertyDetail(state) {
        return state.propertyDetail;
    },
    getList(state){
        return state.allId;
    },
    getId(state){
        return state.categoryId;
    }
}

export const mutations = {
    UPDATE_DETAIL(state, slide) {
        state.propertyDetail = slide
    },
    // UPDATE_LIST(state,id,list){
    //     state.categoryId = id;
    //     state.allId = list;
    // }
}

export const actions = {
    // updateList({commit},id,list){
    //     commit('UPDATE_LIST',id,list)
    // }
}