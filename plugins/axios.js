import Vue from 'vue'
import axios from 'axios'
import { Spin } from 'iview'

const service = axios.create({
  baseURL: '/api'
})

// @请求拦截器
service.interceptors.request.use(
  (config) => {
    Spin.show()
    return config
  },
  (err) => {
    return Promise.reject(err)
  }
)

// @相应拦截器
service.interceptors.response.use(
  async (response) => {
    // 应用层只需要数据data
    Spin.hide()
    const { data } = await response
    return data
  }
)

Vue.prototype.$http = service

export const http = service
