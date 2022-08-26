export default axios => ({
  getAdverts: (parameters = {}) => {
    return axios.get('advert/getByUser')
  }
})
