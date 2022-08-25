export default axios =>({
    deleteImage:(id,...parameters)=>{
        return axios.delete(`/advert/image/${id}`)
    }
})