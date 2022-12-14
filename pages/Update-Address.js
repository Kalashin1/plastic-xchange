/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import {View, StyleSheet, TextInput, Text} from 'react-native';
import HeaderText from '../components/Header-Text';
import Input from '../components/Input';
import Button from '../components/Button';
import DropdownComponent from '../components/Dropdown';
import { baseUrl, retrieveData, getUser } from '../helper';
import { lgaList } from '../states'

const keys = Object.keys(lgaList).map(k => ({ label: k, value: k }))
const states = [
  ...keys
];


const UpdateAddress = ({navigation}) => {

  const [street, setStreet] = useState('');
  const [zip, setZip] = useState('');
  const [state, setState] = useState('');
  const [lga, setLga] = useState('');
  const [lgas, setLgas] = useState(lgaList.Abia.map(l => ({ label: l, value: l }) ))

  const [token, setToken] = useState()
  const [id, setId] = useState('')
  const [user, setUser] = useState();

  function updateState(state) {
    setState(state)
    setLgas(lgaList[state].map(l => ({ label: l, value: l }) ))
  }

  useEffect(() => {
    const getLoggedInUser = async () => {
      const [_token, _] = await retrieveData('userToken');
      if (!_) {
        setToken(_token)
      }
      let id, _err;
      [id, _err] = await retrieveData('userId');

      if(!_err) {
        setId(id);
      }
      let _user, err;

      if (!_) {
        [_user, err] = await getUser(_token);
      } 

      if (!err) {
        setUser(_user);
        console.log(_user)
      }
    }

    getLoggedInUser()
  }, [])

  const updateUserAddress = async () => {
    // console.log(token, id)
    const res = await fetch(`${baseUrl}/user/location/${id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({ street, zip, state, lga, country: "Nigeria" })
    })

    if (res.ok) {
      const data = await res.json();

      if (data.error) {
        // TODO: handle errors
        alert('Oops something happened!');
      } else {
        // console.log(data.message);
        alert(data.message)
        if(user.bankInfo == null || undefined) {
          navigation.navigate('Edit-Screen', { screen: 'Update-Bank' });
        } else if (user.name == null || undefined) {
          navigation.navigate('Edit-Screen', { screen: 'Update-Profile' });
        } else {
          navigation.navigate('Profile-Screen', { screen: 'Profile' })
        }
      }
    } else {
      console.log(await res.json())
    }
  }

  return (
    <View style={styles.container}>
      
      <View>
        <HeaderText text="Update Address" />
      </View>

      <View>
      <Input
        label="Street"
        defaultV={street}
        handleChange={setStreet}
        placeholder="No 32 Worlu street"
      />

      <Input
        label="Zip code"
        defaultV={zip}
        handleChange={setZip}
        placeholder="123456"
      />

      <Text style={styles.text}>State</Text>
      <DropdownComponent 
        data={states} 
        value={state} 
        setValue={updateState} 
      />

      <Text style={styles.text}>LGA</Text>
      <DropdownComponent 
        data={lgas} 
        value={lga} 
        setValue={setLga} 
      />

      <Button 
        label="Update Address" 
        onPressHandler={() => updateUserAddress()} 
      />
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    marginVertical: 10,
    borderRadius: 8,
    borderWidth: 0.5,
    width: 300,
    borderColor: '#333',
  },
  text: {
    textAlign: 'left',
    marginVertical: 10,
    marginHorizontal: 12,
    fontFamily: 'Lato-Bold',
  },
});


export default UpdateAddress;
