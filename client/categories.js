export default axios =>({
    getCategories: (parameters={})=>{
        return axios.get('categories')
    }   
});

// export default {
//   getCategories: async () => {
//     const res = await this.$axios.get('categories');
//     return res.data.data
//   }
// }
