// 登录逻辑 pinia
import { defineStore } from 'pinia'
import { ref } from 'vue'

const useTokenStore = defineStore('token', () => {
  // 用不用ref 有什么不同
  const token = ref(null)
  const updateToken = val => token.value = val
  const removeToken = () => token.value = null
  return { token, updateToken, removeToken }
}, {
  persist: {
    enabled: true,
    strategies: [
      {
        key: 'token',
        storage: sessionStorage
      }
    ]
  }
})
export default useTokenStore
