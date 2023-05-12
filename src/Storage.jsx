export default function getStorage(key) {
    const item = localStorage.getItem(key)
    return item ? JSON.parse(item) : null
}

export function setStorage(key, value) {
    const setStorage = localStorage.setItem(key, JSON.stringify(value))
}

export function removeFromStorage(key) {
    localStorage.removeItem(key);
  }