/* eslint-disable prettier/prettier */
import React, { useEffect, useState} from 'react';
import {View, StyleSheet, Text } from 'react-native';
import { getUser, retrieveData, verifyOTP } from '../helper';
import HeaderText from '../components/Header-Text';
import Button from '../components/Button';
import Input from '../components/Input';

// import {Input} from '@rneui/themed';

const OTP = ({navigation}) => {
  const [otp, setOTP] = useState(0);
  const [otpError, setOtpError] = useState(false)
  const [token, setToken] = useState('')
  const [user, setUser] = useState()

  useEffect(() => {
    const getData = async () => {
      const [_token, _] = await retrieveData('userToken');
      const [_id, _err] = await retrieveData('userId')
      console.log(_token)
      const [_user, err] = await getUser(_token);

      if (!err) {
        console.log(_user);
        setUser(_user);
        setToken(_token)
      }
    }

    getData();
  }, [])

  const signin = async (otp, username) => {
    setOtpError(false)
    const [data, err] = await verifyOTP(otp, username);
    if (!err){
      alert("verified successfully")
      if (user.location) {
        if (user.bankInfo) {
          navigation.navigate('Profile-Screen', { screen: 'Dashboard' });
        } else {
          navigation.navigate('Edit-Screen', { screen: 'Update-Bank' });
        }
      } else {
        navigation.navigate('Edit-Screen', { screen: 'Update-Address' });
      }
    } else {
      setOtpError(true)
      console.log(err)
    }
  }
2
  return (
    <View style={styles.container}>
      <HeaderText
        text="Enter Your OTP to continue."
      />
      <View>
        <Input
          placeholder="0123345"
          defaultV={otp}
          handleChange={setOTP}
          errorMessage="incorrect otp"
          showError={otpError}
          label="OTP"
        />
        <Button
          label="Verify"
          onPressHandler={() => signin(parseInt(otp), user.username)}
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
    marginVertical: 5,
    marginBottom: 20,
    borderRadius: 8,
    borderWidth: 1,
    width: 300,
    borderColor: '#333',
  },
  text: {
    textAlign: 'left',
    marginVertical: 10,
    fontFamily: 'Lato-Bold',
  },
});

export default OTP;
