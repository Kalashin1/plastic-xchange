import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { color5 } from "../helper";

const ProfileCard = ({ name, email, username }) => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Name</Text>
        <Text style={styles.text}>{ name }</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Email</Text>
        <Text style={styles.text}>{ email }</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Username</Text>
        <Text style={styles.text}>{ username }</Text>
      </View>
    </View>
  )
}

export default ProfileCard;

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
})