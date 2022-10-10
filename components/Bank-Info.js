import React from "react";
import { View, StyleSheet, Text } from "react-native";

const BankCard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Bank</Text>
        <Text style={styles.text}>UBA</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Account Number</Text>
        <Text style={styles.text}>4979391390</Text>
      </View>
    </View>
  )
}

export default BankCard;

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