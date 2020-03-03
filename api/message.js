import { http } from '@/plugins/axios'
const api = {
  createMessage: '/createMessage',
  MessageList: 'MessageList'
}

export const createMessage = async (data) => {
  const ret = await http.post(api.createMessage, data)
  return ret
}

export const MessageList = async () => {
  const ret = await http.get(api.MessageList)
  return ret
}
