import axios from 'axios'

const url = 'http://localhost:3000/api/posts/'

class PostService {
  // GET
  static getPosts () {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.get(url)
        const data = res.data
        resolve(
          data.map(post => ({
            ...post,
            createdAt: new Date(post.createdAt)
          }))
        )
      } catch (err) {
        reject(err)
      }
    })
  }

  // Create
  static insertPost (text, number) {
    return axios.post(url, {
      text,
      number
    })
  }

  //  Delete Post

  static deletePost (id) {
    return axios.delete(`${url}${id}`)
  }
}

export default PostService
