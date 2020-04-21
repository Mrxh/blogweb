import Vue from 'vue'
import iView from 'iview'
import locale from 'iview/dist/locale/en-US' // Change locale, check node_modules/iview/dist/locale

// 兼容ie数组没有findIndex方法
if (!Object.findIndex) {
  Object.findIndex = function (callback) {
    for (let i = 0; i < this.length; i++) {
      if (callback(this[i], i, this)) {
        return i
      }
    }
    return -1
  }
}

Vue.use(iView, {
  locale
})
