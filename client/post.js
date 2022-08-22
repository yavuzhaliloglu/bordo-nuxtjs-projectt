export default (axios) => ({
  postAdvert: (data,parameters = {}) => {
    axios.post('advertHousing',data)
  },
  postLand: (parameters = {}) => {},
  postWorkPlace: (parameters = {}) => {}
})
