import React from "react";
import { View, StyleSheet, Text } from "react-native";

const AddressCard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Address</Text>
        <Text style={styles.text}>No 32 Worlu Street, Eneka</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Zip Code</Text>
        <Text style={styles.text}>012345</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>State</Text>
        <Text style={styles.text}>Rivers</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Country</Text>
        <Text style={styles.text}>Nigeria</Text>
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
})