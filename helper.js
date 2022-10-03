import { AsyncStorage } from "react-native"

export const baseUrl = 'https://api.plasticxcange.com/'
// export const baseUrl = 'http://localhost:4200/'

export const storeUserData = async (id, token) => {
  try {
    await AsyncStorage.setItem('userToken', token);
    await AsyncStorage.setItem('userId', id);
    return [true, null]
  } catch (error) {
    return [false, error.message]
  }
}

export const retrieveData = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key)
    if (value !== null) return [value, null]
  } catch (error) {
    return [null, error.message]
  }
}