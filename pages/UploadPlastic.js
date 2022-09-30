/* eslint-disable prettier/prettier */
import React from 'react';
import {View, StyleSheet, TextInput, Text, Button} from 'react-native';
import DropdownComponent from '../components/Dropdown';

const data = [
  {label: 'User', value: 'USER'},
  {label: 'Agent', value: 'AGENT'},
];

const UploadPlastic = ({navigation}) => {

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Weight</Text>
      <TextInput style={styles.input} placeholder="Enter Plastic Weight" />
      <Text style={styles.text}>Weight</Text>
      <DropdownComponent data={data} />
      <Button title="UploadPlastic" onPress={() => navigation.navigate('Update-Bank')} />
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


export default UploadPlastic;
