export default (axios) => ({
  getAdverts: (currentPage, psize , parameters = {}) => {
    return axios.get('adverts/user', {
      params: { page: currentPage, pageSize: psize }
    })
  },
  deleteAdvert: (cardId, parameters = {}) => {
    return axios.delete(`adverts/${cardId}`)
  },
  getSingleAdvert: (id, parameters = {}) => {
    return axios.get(`adverts/${id}`)
  }
})
