/* eslint-disable prettier/prettier */
import React from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';
// import {Input} from '@rneui/themed';

const Splash = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.text}>Splash</Text>
        <Button
          title="Move"
          onPress={() => navigation.navigate('Register')}
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
  text: {
    textAlign: 'left',
    marginVertical: 10,
    fontWeight: 'b',
  },
});

export default Splash;
