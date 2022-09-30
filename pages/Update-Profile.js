/* eslint-disable prettier/prettier */
import React from 'react';
import {View, StyleSheet, TextInput, Text, Button} from 'react-native';
import DropdownComponent from '../components/Dropdown';

const data = [
  {label: 'User', value: 'USER'},
  {label: 'Agent', value: 'AGENT'},
];

const UpdateProfile = ({navigation}) => {

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Name</Text>
      <TextInput style={styles.input} placeholder="Enter Your Full Name" />
      <Text style={styles.text}>Phone Number</Text>
      <TextInput style={styles.input} placeholder="Enter Your Phone Number" />
      <Button title="UpdateProfile" onPress={() => navigation.navigate('Dashboard')} />
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
  },
});


export default UpdateProfile;
