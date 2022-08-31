export default axios => ({
    getCity:(parameters ={}) =>{
        return axios.get('locations/city')
    },
    getDistrict:(id,parameters={})=>{
        return axios.get(`locations/city/${id}/district`)
    },
    getTown:(id,parameters={})=>{
        return axios.get(`locations/city/district/${id}/town`)
    }
})
