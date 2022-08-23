export default (axios) => ({
  postAdvert: (payload, ...parameters) => {
    axios.post('advertHousing', payload, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Accept: 'application/json'
      }
    })
  }
})
