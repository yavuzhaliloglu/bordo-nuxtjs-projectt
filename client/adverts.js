export default (axios) => ({
  getAdverts: (currentPage, psize, parameters = {}) => {
    return axios.get('advert/getByUser', {
      params: { page: currentPage, pageSize: psize }
    })
  },
  deleteAdvert: (cardId, parameters = {}) => {
    // return axios.delete(`advert/${cardId}`)
    console.log(cardId)
  }
})
