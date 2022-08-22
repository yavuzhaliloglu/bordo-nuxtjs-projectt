export default axios =>({
    getCategories: (parameters={})=>{
        return axios.get('categories')
    }   
});

