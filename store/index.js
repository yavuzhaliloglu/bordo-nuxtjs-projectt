export const state = () => ({
    propertyDetail: {},
    categoryName: '',
    allNames: [],
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
})

export const getters = {
    getPropertyDetail(state) {
        return state.propertyDetail;
    },
    getList(state){
        return state.allNames;
    },
    getName(state){
        return state.categoryName;
    }
}

export const mutations = {
    UPDATE_DETAIL(state, slide) {
        state.propertyDetail = slide
    },
    UPDATE_LIST(state,name,list){
        state.categoryName = name;
        state.allNames = list;
    }
}

export const actions = {
    updateList(context,name,list){
        context.commit('UPDATE_LIST',name,list)
    }
}