import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { color5 } from "../helper";

const BankCard = ({ bank, accountNo }) => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Bank</Text>
        <Text style={styles.text}>{ bank }</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Account Number</Text>
        <Text style={styles.text}>{ accountNo }</Text>
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
    color: '#fff',
    fontFamily: 'Lato-Regular',
  },
})