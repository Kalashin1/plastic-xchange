/* eslint-disable prettier/prettier */
import React, { useEffect, useState} from 'react';
import {View, StyleSheet, TextInput, Text, Button} from 'react-native';
import { getUser, retrieveData, widthdraw } from '../helper';

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
    const [res, err] = await widthdraw(token, amount, user._id)
    if (!err) {
      console.log('logged')
      navigation.navigate('Dashboard')
    } else {
      console.log(err)
    }
  }
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>Amount</Text>
        <TextInput 
          style={styles.input} 
          placeholder="Enter Amount" 
          value={amount}
          keyboardType="numeric"
          onChangeText={v => setAmount(parseInt(v))}
        />
        <Button
          title="Withdraw"
          onPress={() => logWithdrawal(amount)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 2,
    background: 'maroon',
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
    fontWeight: 'b',
  },
});

export default Withdrawal;
