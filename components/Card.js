import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { color5, formatter } from "../helper";

const Card = ({ header, text, textTwo, headerTwo }) => {
  return (
    <View style={styles.container}>
      <View style={styles.cardWrapper}>
        <Text style={styles.cardText}>{header}</Text>
        <Text style={styles.cardNum}>{ formatter.format(text) }</Text>
      </View>
      <View>
        <Text style={styles.cardText}>{ headerTwo }</Text>
        <Text style={styles.cardNum}>{ textTwo }</Text>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 15,
    margin: 20,
    padding: 20,
    backgroundColor: color5,
    borderRadius: 10,
  },
  cardText: {
    fontSize: 18,
    marginVertical: 5,
    // fontWeight: 'bold',
    fontFamily: 'Lato-Regular',
    color: '#fff',
  },
  cardNum: {
    fontSize: 14,
    marginTop: 8,
    fontFamily: 'Lato-Regular',
    color: '#fff',
  },
  cardWrapper: {
    marginBottom: 30
  },
})