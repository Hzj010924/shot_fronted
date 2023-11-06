import { ref } from 'vue'
import { defineStore } from 'pinia'

const useCartStore = defineStore('cart', () => {
  const cart = ref([])
  const addToCart = goods => {
    const item = cart.value.find(item => goods.id == item.id)
    if (item) {
      item.num += goods.num
    } else {
      cart.value.push(goods)
    }
  }
  const removeCart = id => {
    cart.value.forEach((item, index) => {
      if (item.id == id) {
        cart.value.splice(index, 1)
      }
    })
  }
  const cartCount = () => {
    let sum = 0
    cart.value.forEach(item => {
      sum += item.num
    })
    return sum || ''
  }

  return { cart, addToCart, removeCart, cartCount }
}, {
  persist: {
    enabled: true,
    strategies: [
      {
        key: 'cart',
        storage: localStorage
      }
    ]
  }
})

export default useCartStore
