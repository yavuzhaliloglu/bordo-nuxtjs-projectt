export default axios => ({
    getCity:(parameters ={}) =>{
        return axios.get('location/city')
    },
    getDistrict:(id,parameters={})=>{
        return axios.get(`location/city/${id}/district`)
    },
    getTown:(id,parameters={})=>{
        return axios.get(`location/city/district/${id}/town`)
    }
})
