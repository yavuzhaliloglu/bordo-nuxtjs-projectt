export default axios =>({
    deleteImage:(id,...parameters)=>{
        return axios.delete(`images/${id}`)
    }
})