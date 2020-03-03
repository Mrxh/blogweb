import { http } from '@/plugins/axios'
const api = {
  comCreate: '/comCreate'
}

export const comCreate = async (data) => {
  const ret = await http.post(api.comCreate, data)
  return ret
}
