// import { MMKV } from "react-native-mmkv";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const color5 = '#172815';
export const color4 = '#3E5622';
export const color3 = '#709255';
export const color2 = '#95B46A';
export const color1 = '#C1FFBC';

export const formatDate = (date) => {
  let _date = new Date(date);
  const day = _date.getDate();
  const month = _date.getMonth()
  const year = _date.getFullYear()
  return `${day}/${month}/${year}`;
}

export const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
})

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

export const getUserExchanges = async (token, username) => {
  const res = await fetch(`${baseUrl}/user/projects/${username}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  if (res.ok) {
    const data = await res.json();
    if (data.error) {
      return [null, data.message]
    } else {
      return [data.data, null]
    }
  } else {
    return [null, await res.json()]
  }
}

export const widthdraw = async (token, amount, userId) => {
  // console.log({ amount, userId })
  const res = await fetch(`${baseUrl}/withdraw`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    },
    method: 'POST',
    body: JSON.stringify({ amount, userId })
  })

  if (res.ok) {
    const data = await res.json();
    // console.log(data)

    if (data.error) {
      // console.log(data.message);
      return [null, data.message]
    } else {
      return [data.data, null]
    }
  } else {
    return [null, await res.json()]
  }
}