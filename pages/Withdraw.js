/* eslint-disable prettier/prettier */
import React, { useEffect, useState} from 'react';
import {View, StyleSheet, Text } from 'react-native';
import { getUser, retrieveData, widthdraw } from '../helper';
import HeaderText from '../components/Header-Text';
import Button from '../components/Button';
import Input from '../components/Input';

// import {Input} from '@rneui/themed';

const Withdrawal = ({navigation}) => {
  const [amount, setAmount] = useState(0);
  const [token, setToken] = useState('')
  const [user, setUser] = useState()

  useEffect(() => {
    const getData = async () => {
      const [_token, _] = await retrieveData('userToken');
      setToken(_token)
      const [_user, err] = await getUser(token);

      if (!err) {
        // console.log(_user)
        setUser(_user)
      }
    }

    getData();
  }, [])


  const logWithdrawal = async (amount) => {
    const [res, err] = await widthdraw(token, parseInt(amount), user._id)
    if (!err) {
      console.log('logged')
      navigation.navigate('Profile-Screen', { screen: 'Dashboard' })
    } else {
      console.log(err)
    }
  }
  return (
    <View style={styles.container}>
      <HeaderText
        text="Withdraw to your account"
      />
      <View>
        <Input
          placeholder="Enter Amount"
          defaultV={amount}
          handleChange={setAmount}
          label="Amount"
        />
        <Button
          label="Withdraw"
          onPressHandler={() => logWithdrawal(amount)}
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

export default Withdrawal;
