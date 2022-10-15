import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { color5 } from "../helper";

const AddressCard = ({ street, zip, state, country }) => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Address</Text>
        <Text style={styles.textSmall}>{ street }</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Zip Code</Text>
        <Text style={styles.text}>{ zip }</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>State</Text>
        <Text style={styles.text}>{ state }</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Country</Text>
        <Text style={styles.text}>{ country }</Text>
      </View>
    </View>
  )
}

export default AddressCard;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    paddingVertical: 15,
    margin: 20,
    padding: 20,
    backgroundColor: color5,
    borderRadius: 10,
  },
  textContainer: {
    flexDirection: 'row',
    justifyContent: "space-between",
    marginVertical: 10
  },
  text: {
    fontSize: 18,
    // fontWeight: 'bold',
    fontFamily: 'Lato-Regular',
    color: '#fff'
  },
  textSmall: {
    fontSize: 16,
    // fontWeight: 'bold',
    fontFamily: 'Lato-Regular',
    color: '#fff'
  }
})