/* eslint-disable prettier/prettier */
import React,{ useState, useEffect } from 'react';
import {View, StyleSheet, TextInput, Text } from 'react-native';
import Input from '../components/Input';
import HeaderText from '../components/Header-Text';
import Button from '../components/Button';
import { UpdateProfile as updateProfile, retrieveData, getUser } from '../helper'

const UpdateProfile = ({navigation}) => {

  const [token, setToken] = useState()
  const [id, setId] = useState('')
  const [user, setUser] = useState();

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

  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const _updateProfile = async () => {
    const payload =  JSON.stringify({ name, phoneNumber, type: user.type })
    const [res, _err] = await updateProfile(token, id, payload)
    if (!_err) {
      // console.log(res)
      alert("Profile updated!")
      if(!user.bankInfo) {
        navigation.navigate('Edit-Screen', { screen: 'Update-Bank' });
      }
      if (!user.location) {
        navigation.navigate('Edit-Screen', { screen: 'Update-Address' });
      }
      navigation.navigate('Profile-Screen', { screen: 'Profile' });
    } else {
      console.log(_err)
    }
  }

  return (
    <View style={styles.container}>

      <View>
        <HeaderText text="Update Your Profile" />
      </View>
      <View>
        <Input 
          defaultV={name}
          label="Name"
          placeholder="John Doe"
          handleChange={setName}

        />

        <Input
          defaultV={phoneNumber}
          label="Phone Number"
          placeholder="0123456789"
          handleChange={setPhoneNumber}
        />

        <Button label="Update" onPressHandler={_updateProfile} />
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
    fontWeight: 'b',
  }
});


export default UpdateProfile;
