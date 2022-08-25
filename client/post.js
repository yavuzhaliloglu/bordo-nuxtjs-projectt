export default (axios) => ({
  post: (payload,endpoint , ...parameters) => {
    return axios.post(`${endpoint}`, payload)
  },

  postImage: (payload, ...parameters) => {
    return axios.post('image/upload', payload, {
      headers: {
        'Content-Type': 'multipart/form-data',
        // Accept: 'application/json'
      }
    })
  }
})
