import axios from 'axios'

export default() => {
  return axios.create({
    baseURL: `http://localhost:64834/api/v1/`,
    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
  })
}
