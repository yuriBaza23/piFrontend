import Axios from 'axios'

const localApi = Axios.create({
  baseURL: process.env.NEXT_PUBLIC_LOCAL_API_URL,
})

export default localApi