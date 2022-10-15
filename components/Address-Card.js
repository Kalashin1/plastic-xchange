import React from "react";
import { View, StyleSheet, Text } from "react-native";

const AddressCard = ({ street, zip, state, country }) => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Address</Text>
        <Text style={styles.textSmall}>{ street }</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Zip Code</Text>
        <Text style={styles.textSmall}>{ zip }</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>State</Text>
        <Text style={styles.textSmall}>{ state }</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Country</Text>
        <Text style={styles.textSmall}>{ country }</Text>
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
    backgroundColor: "darkgreen",
    borderRadius: 10,
  },
  textContainer: {
    flexDirection: 'row',
    justifyContent: "space-between",
    marginVertical: 10
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff'
  },
  textSmall: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#fff'
  }
})