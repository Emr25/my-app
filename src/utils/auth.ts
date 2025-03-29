export const isAuthenticated = () => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('isAuthenticated') === 'true'
    }
    return false
  }
  
  export const login = () => {
    localStorage.setItem('isAuthenticated', 'true')
  }
  
  export const logout = () => {
    localStorage.removeItem('isAuthenticated')
  }