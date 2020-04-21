import { http } from '@/plugins/axios'
const api = {
  imageList: '/imageList'
}

export const imageList = async (data) => {
  const ret = await http.post(api.imageList, data)
  return ret
}
