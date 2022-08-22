export default axios =>({
    getInterior(parameters ={}){
        return axios.get('features/interior')
    },
    getExternal(parameters = {}){
        return axios.get('features/external')
    },
    getLocation(parameters = {}){
        return axios.get('features/location')
    }
});