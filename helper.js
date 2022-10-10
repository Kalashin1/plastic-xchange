// import { MMKV } from "react-native-mmkv";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios"; 

export const baseUrl = 'https://api.plasticxcange.com'
// export const storage = new MMKV();
// export const baseUrl = 'http://localhost:4200'

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

export const getPlastics = async (token) => {
  if (token) {
    const res = await fetch(`${baseUrl}/plastics`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })


    if (res.ok) {
      const data = await res.json();
      if (!data.error) {
        return [data.data, null]
      } else {
        return [null, data.message]
      }
    } else {
      const data = await res.json();
      return [null, data.message]
    }
  }
}

export const getUser = async (token) => {
  const res = await fetch(`${baseUrl}/user/token/${token}`)

  if (res.ok) {
    const data = await res.json();
    
    if (data.error) {
      return [null, data.message]
    } else {
      return [data.data, null]
    }
  } else {
    const { message } = await res.json();
    return [null, message];
  }
}

export const createPlasticExchange = async (payload, token) => {
  console.log(payload);
  const res = await fetch(`${baseUrl}/project`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    },
    method: 'POST',
    body: JSON.stringify(payload)
  })

  if (res.ok) {
    const data = await res.json();
    if (data.error) {
    return [null, data.message];
    } else {
    return [data.data, null];
    }
  } else {
    console.log(await res.json())
  }
}

// const res = await fetch(``, {
//   headers: {
//     'Content-Type': 'application/json',
//     Authorization: `Bearer ${token}`
//   },
//   method: 'POST',
//   body: payload
// })

// if (res.ok) {
//   const data = await res.json();

//   if (data.error) {
//   return [null, data.message];
// } else {
//   return [data.data, null];
// }
// } else {
//   console.log(await res.json())
// }

// const res = await axios({
//   url: `${baseUrl}/project`,
//   method: 'POST',
//   headers: {
//     Authorization: `Bearer ${token}`,
//   },
//   data: payload
// });

// if (res.status == 200 | 201) {
//   const data = res.data;

//   if (data.error) {
//     return [null, data.message];
//   } else {
//     return [data.data, null];
//   }
// } else {
//   console.log(res.statusText)
//   return [null, "something happened"]
// }