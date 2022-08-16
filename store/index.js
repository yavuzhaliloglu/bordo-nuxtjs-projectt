export const state=()=>({
    propertyDetail:{}
})

export const getters = {
    getPropertyDetail(state) {
        return state.propertyDetail;
    }
}

export const mutations = {
    UPDATE_DETAIL(state,slide){
        state.propertyDetail = slide
    }   
}

export const actions = {
}