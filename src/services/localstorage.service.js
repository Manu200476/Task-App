const localStorageService = {
  get(key) {
    const item = JSON.parse(localStorage.getItem(key))

    return item
  },

  set(key, val) {
    const item = localStorage.setItem(key, JSON.stringify(val))

    return item
  },

  remove(key) {
    const item = JSON.parse(localStorage.removeItem(key))

    return item
  },

  clear() {
    localStorage.clear()
  },
}

export default localStorageService
