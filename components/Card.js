import React from "react";
import { View, StyleSheet, Text } from "react-native";

const Card = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.cardText}>Total Earnings</Text>
      <Text style={styles.cardNum}>N 2,300,00</Text>
      <Text style={styles.cardText}>Kilogram Earned</Text>
      <Text style={styles.cardNum}>N 5,600</Text>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 15,
    margin: 20,
    padding: 20,
    backgroundColor: "darkgreen",
    borderRadius: 10,
  },
  cardText: {
    fontSize: 18,
    marginVertical: 10,
    fontWeight: 'bold',
    color: '#fff',
  },
  cardNum: {
    fontSize: 14,
    marginVertical: 5,
    color: '#fff',
  }
})