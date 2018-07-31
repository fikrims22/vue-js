import Api from '@/Services/Api'
import qs from 'qs'

export default {
  fetchPosts () {
    return Api().get('Test')
  },
  addPost (params) {
    return Api().post('Test/Create', qs.stringify(params))
  },
  updatePost (params) {
    return Api().post('Test/Update', qs.stringify(params))
  },
  getPost (params) {
    return Api().get('Test/BookById/' + params.Id)
  },
  deletePost (params) {
    return Api().post('Test/Delete', qs.stringify({Id: params}))
  }
}
